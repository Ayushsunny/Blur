import { NextResponse } from 'next/server';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

// Load the proto file
const PROTO_PATH = path.resolve(process.cwd(), 'src/app/api/proto/tron.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const tronProto = grpc.loadPackageDefinition(packageDefinition) as any;

// Create a gRPC client
const client = new tronProto.tron.Tron('localhost:50051', grpc.credentials.createInsecure());

export async function POST(request: Request) {
  try {
    const { action, data } = await request.json();

    if (action === 'createToken') {
      return new Promise((resolve, reject) => {
        client.createToken(data, (err: any, response: any) => {
          if (err) {
            console.error('Error calling gRPC createToken method:', err);
            resolve(NextResponse.json({ error: 'gRPC call failed', details: err.message }, { status: 500 }));
          } else {
            console.log('gRPC createToken response:', response);
            resolve(NextResponse.json(response));
          }
        });
      });
    }

    if (action === 'broadcastToken') {
      return new Promise((resolve, reject) => {
        client.broadcastToken(data, (err: any, response: any) => {
          if (err) {
            console.error('Error calling gRPC broadcastToken method:', err);
            resolve(NextResponse.json({ error: 'gRPC call failed', details: err.message }, { status: 500 }));
          } else {
            console.log('gRPC broadcastToken response:', response);
            resolve(NextResponse.json(response));
          }
        });
      });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ error: 'Server error', details: error.message }, { status: 500 });
  }
}




// import { NextResponse } from 'next/server';
// import * as grpc from '@grpc/grpc-js';
// import * as protoLoader from '@grpc/proto-loader';
// import path from 'path';

// export async function POST(request: Request) {
//     console.log("Received a POST request to /api/tronClient");

//     try {
//         console.log("Loading proto file...");
//         const PROTO_PATH = path.resolve(process.cwd(), 'src/app/api/proto/tron.proto');
//         console.log("Proto file path:", PROTO_PATH);

//         const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
//             keepCase: true,
//             longs: String,
//             enums: String,
//             defaults: true,
//             oneofs: true,
//         });
//         console.log("Proto file loaded successfully");

//         console.log("Creating gRPC client...");
//         const tronProto = grpc.loadPackageDefinition(packageDefinition) as any;
//         const client = new tronProto.tron.Tron('localhost:50051', grpc.credentials.createInsecure());
//         console.log("gRPC client created successfully");

//         console.log("Parsing request body...");
//         const { action, data } = await request.json();
//         console.log("Received action:", action);
//         console.log("Received data:", data);

//         if (action !== 'createToken') {
//             return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
//         }

//         console.log("Calling CreateToken gRPC method...");
//         const createTokenPromise = new Promise((resolve, reject) => {
//             client.CreateToken(data, (err: any, response: any) => {
//                 if (err) {
//                     console.error("gRPC error:", err);
//                     reject(err);
//                 } else {
//                     console.log("Token created:", response);
//                     resolve(response);
//                 }
//             });
//         });

//         const response = await createTokenPromise as { trx: string };
//         console.log("Received response from gRPC server:", response);
//         return NextResponse.json({ trx: response.trx });
        
//     } catch (error) {
//         console.error("Error during gRPC client initialization or token creation:", error);
//         if (error instanceof Error) {
//             console.error("Error details:", error.message);
//             console.error("Stack trace:", error.stack);
//         }
//         return NextResponse.json({ error: 'Server error', details: error.message }, { status: 500 });
//     }
// }