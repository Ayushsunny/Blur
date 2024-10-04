import { NextResponse } from 'next/server';
import * as grpc from '@grpc/grpc-js';
import { loadSync } from '@grpc/proto-loader';
import * as path from 'path';

// Load the proto file correctly by adjusting the relative path
const PROTO_PATH = path.resolve('../proto/tron.proto');
console.log('PROTO_PATH:', PROTO_PATH);
const packageDefinition = loadSync(PROTO_PATH, {});
const userProto = grpc.loadPackageDefinition(packageDefinition) as unknown as { user: { UserService: any } };

const client = new userProto.user.UserService('localhost:50051', grpc.credentials.createInsecure());

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    try {
        const response = await new Promise<any>((resolve, reject) => {
            client.GetUser({ id }, (error: any, data: any) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            });
        });

        return NextResponse.json(response);
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ error: error.details || 'An error occurred while fetching the user' }, { status: 500 });
    }
}
