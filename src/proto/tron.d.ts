import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace tron. */
export namespace tron {

    /** Represents a Tron */
    class Tron extends $protobuf.rpc.Service {

        /**
         * Constructs a new Tron service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Tron service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Tron;

        /**
         * Calls CreateToken.
         * @param request TokenItem message or plain object
         * @param callback Node-style callback called with the error, if any, and UTransactionItem
         */
        public createToken(request: tron.ITokenItem, callback: tron.Tron.CreateTokenCallback): void;

        /**
         * Calls CreateToken.
         * @param request TokenItem message or plain object
         * @returns Promise
         */
        public createToken(request: tron.ITokenItem): Promise<tron.UTransactionItem>;

        /**
         * Calls BroadcastToken.
         * @param request STransactionItem message or plain object
         * @param callback Node-style callback called with the error, if any, and TokenContractAdd
         */
        public broadcastToken(request: tron.ISTransactionItem, callback: tron.Tron.BroadcastTokenCallback): void;

        /**
         * Calls BroadcastToken.
         * @param request STransactionItem message or plain object
         * @returns Promise
         */
        public broadcastToken(request: tron.ISTransactionItem): Promise<tron.TokenContractAdd>;

        /**
         * Calls BuyToken.
         * @param request TokenTradeItem message or plain object
         * @param callback Node-style callback called with the error, if any, and TokenTradeTx
         */
        public buyToken(request: tron.ITokenTradeItem, callback: tron.Tron.BuyTokenCallback): void;

        /**
         * Calls BuyToken.
         * @param request TokenTradeItem message or plain object
         * @returns Promise
         */
        public buyToken(request: tron.ITokenTradeItem): Promise<tron.TokenTradeTx>;

        /**
         * Calls SellToken.
         * @param request TokenTradeItem message or plain object
         * @param callback Node-style callback called with the error, if any, and TokenTradeTx
         */
        public sellToken(request: tron.ITokenTradeItem, callback: tron.Tron.SellTokenCallback): void;

        /**
         * Calls SellToken.
         * @param request TokenTradeItem message or plain object
         * @returns Promise
         */
        public sellToken(request: tron.ITokenTradeItem): Promise<tron.TokenTradeTx>;
    }

    namespace Tron {

        /**
         * Callback as used by {@link tron.Tron#createToken}.
         * @param error Error, if any
         * @param [response] UTransactionItem
         */
        type CreateTokenCallback = (error: (Error|null), response?: tron.UTransactionItem) => void;

        /**
         * Callback as used by {@link tron.Tron#broadcastToken}.
         * @param error Error, if any
         * @param [response] TokenContractAdd
         */
        type BroadcastTokenCallback = (error: (Error|null), response?: tron.TokenContractAdd) => void;

        /**
         * Callback as used by {@link tron.Tron#buyToken}.
         * @param error Error, if any
         * @param [response] TokenTradeTx
         */
        type BuyTokenCallback = (error: (Error|null), response?: tron.TokenTradeTx) => void;

        /**
         * Callback as used by {@link tron.Tron#sellToken}.
         * @param error Error, if any
         * @param [response] TokenTradeTx
         */
        type SellTokenCallback = (error: (Error|null), response?: tron.TokenTradeTx) => void;
    }

    /** Properties of a TokenItem. */
    interface ITokenItem {

        /** TokenItem name */
        name?: (string|null);

        /** TokenItem description */
        description?: (string|null);

        /** TokenItem symbol */
        symbol?: (string|null);

        /** TokenItem totalSupply */
        totalSupply?: (number|null);
    }

    /** Represents a TokenItem. */
    class TokenItem implements ITokenItem {

        /**
         * Constructs a new TokenItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: tron.ITokenItem);

        /** TokenItem name. */
        public name: string;

        /** TokenItem description. */
        public description: string;

        /** TokenItem symbol. */
        public symbol: string;

        /** TokenItem totalSupply. */
        public totalSupply: number;

        /**
         * Creates a new TokenItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TokenItem instance
         */
        public static create(properties?: tron.ITokenItem): tron.TokenItem;

        /**
         * Encodes the specified TokenItem message. Does not implicitly {@link tron.TokenItem.verify|verify} messages.
         * @param message TokenItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tron.ITokenItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TokenItem message, length delimited. Does not implicitly {@link tron.TokenItem.verify|verify} messages.
         * @param message TokenItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tron.ITokenItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TokenItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TokenItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tron.TokenItem;

        /**
         * Decodes a TokenItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TokenItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tron.TokenItem;

        /**
         * Verifies a TokenItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TokenItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TokenItem
         */
        public static fromObject(object: { [k: string]: any }): tron.TokenItem;

        /**
         * Creates a plain object from a TokenItem message. Also converts values to other types if specified.
         * @param message TokenItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tron.TokenItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TokenItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TokenItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a UTransactionItem. */
    interface IUTransactionItem {

        /** UTransactionItem trx */
        trx?: (string|null);
    }

    /** Represents a UTransactionItem. */
    class UTransactionItem implements IUTransactionItem {

        /**
         * Constructs a new UTransactionItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: tron.IUTransactionItem);

        /** UTransactionItem trx. */
        public trx: string;

        /**
         * Creates a new UTransactionItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UTransactionItem instance
         */
        public static create(properties?: tron.IUTransactionItem): tron.UTransactionItem;

        /**
         * Encodes the specified UTransactionItem message. Does not implicitly {@link tron.UTransactionItem.verify|verify} messages.
         * @param message UTransactionItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tron.IUTransactionItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UTransactionItem message, length delimited. Does not implicitly {@link tron.UTransactionItem.verify|verify} messages.
         * @param message UTransactionItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tron.IUTransactionItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UTransactionItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UTransactionItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tron.UTransactionItem;

        /**
         * Decodes a UTransactionItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UTransactionItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tron.UTransactionItem;

        /**
         * Verifies a UTransactionItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UTransactionItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UTransactionItem
         */
        public static fromObject(object: { [k: string]: any }): tron.UTransactionItem;

        /**
         * Creates a plain object from a UTransactionItem message. Also converts values to other types if specified.
         * @param message UTransactionItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tron.UTransactionItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UTransactionItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UTransactionItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a STransactionItem. */
    interface ISTransactionItem {

        /** STransactionItem trx */
        trx?: (string|null);

        /** STransactionItem utrx */
        utrx?: (string|null);
    }

    /** Represents a STransactionItem. */
    class STransactionItem implements ISTransactionItem {

        /**
         * Constructs a new STransactionItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: tron.ISTransactionItem);

        /** STransactionItem trx. */
        public trx: string;

        /** STransactionItem utrx. */
        public utrx: string;

        /**
         * Creates a new STransactionItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns STransactionItem instance
         */
        public static create(properties?: tron.ISTransactionItem): tron.STransactionItem;

        /**
         * Encodes the specified STransactionItem message. Does not implicitly {@link tron.STransactionItem.verify|verify} messages.
         * @param message STransactionItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tron.ISTransactionItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified STransactionItem message, length delimited. Does not implicitly {@link tron.STransactionItem.verify|verify} messages.
         * @param message STransactionItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tron.ISTransactionItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a STransactionItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns STransactionItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tron.STransactionItem;

        /**
         * Decodes a STransactionItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns STransactionItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tron.STransactionItem;

        /**
         * Verifies a STransactionItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a STransactionItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns STransactionItem
         */
        public static fromObject(object: { [k: string]: any }): tron.STransactionItem;

        /**
         * Creates a plain object from a STransactionItem message. Also converts values to other types if specified.
         * @param message STransactionItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tron.STransactionItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this STransactionItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for STransactionItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TokenContractAdd. */
    interface ITokenContractAdd {

        /** TokenContractAdd add */
        add?: (string|null);
    }

    /** Represents a TokenContractAdd. */
    class TokenContractAdd implements ITokenContractAdd {

        /**
         * Constructs a new TokenContractAdd.
         * @param [properties] Properties to set
         */
        constructor(properties?: tron.ITokenContractAdd);

        /** TokenContractAdd add. */
        public add: string;

        /**
         * Creates a new TokenContractAdd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TokenContractAdd instance
         */
        public static create(properties?: tron.ITokenContractAdd): tron.TokenContractAdd;

        /**
         * Encodes the specified TokenContractAdd message. Does not implicitly {@link tron.TokenContractAdd.verify|verify} messages.
         * @param message TokenContractAdd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tron.ITokenContractAdd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TokenContractAdd message, length delimited. Does not implicitly {@link tron.TokenContractAdd.verify|verify} messages.
         * @param message TokenContractAdd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tron.ITokenContractAdd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TokenContractAdd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TokenContractAdd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tron.TokenContractAdd;

        /**
         * Decodes a TokenContractAdd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TokenContractAdd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tron.TokenContractAdd;

        /**
         * Verifies a TokenContractAdd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TokenContractAdd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TokenContractAdd
         */
        public static fromObject(object: { [k: string]: any }): tron.TokenContractAdd;

        /**
         * Creates a plain object from a TokenContractAdd message. Also converts values to other types if specified.
         * @param message TokenContractAdd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tron.TokenContractAdd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TokenContractAdd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TokenContractAdd
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TokenTradeItem. */
    interface ITokenTradeItem {

        /** TokenTradeItem from */
        from?: (string|null);

        /** TokenTradeItem to */
        to?: (string|null);

        /** TokenTradeItem symbol */
        symbol?: (string|null);

        /** TokenTradeItem amount */
        amount?: (number|null);
    }

    /** Represents a TokenTradeItem. */
    class TokenTradeItem implements ITokenTradeItem {

        /**
         * Constructs a new TokenTradeItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: tron.ITokenTradeItem);

        /** TokenTradeItem from. */
        public from: string;

        /** TokenTradeItem to. */
        public to: string;

        /** TokenTradeItem symbol. */
        public symbol: string;

        /** TokenTradeItem amount. */
        public amount: number;

        /**
         * Creates a new TokenTradeItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TokenTradeItem instance
         */
        public static create(properties?: tron.ITokenTradeItem): tron.TokenTradeItem;

        /**
         * Encodes the specified TokenTradeItem message. Does not implicitly {@link tron.TokenTradeItem.verify|verify} messages.
         * @param message TokenTradeItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tron.ITokenTradeItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TokenTradeItem message, length delimited. Does not implicitly {@link tron.TokenTradeItem.verify|verify} messages.
         * @param message TokenTradeItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tron.ITokenTradeItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TokenTradeItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TokenTradeItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tron.TokenTradeItem;

        /**
         * Decodes a TokenTradeItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TokenTradeItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tron.TokenTradeItem;

        /**
         * Verifies a TokenTradeItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TokenTradeItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TokenTradeItem
         */
        public static fromObject(object: { [k: string]: any }): tron.TokenTradeItem;

        /**
         * Creates a plain object from a TokenTradeItem message. Also converts values to other types if specified.
         * @param message TokenTradeItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tron.TokenTradeItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TokenTradeItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TokenTradeItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TokenTradeTx. */
    interface ITokenTradeTx {

        /** TokenTradeTx tx */
        tx?: (string|null);
    }

    /** Represents a TokenTradeTx. */
    class TokenTradeTx implements ITokenTradeTx {

        /**
         * Constructs a new TokenTradeTx.
         * @param [properties] Properties to set
         */
        constructor(properties?: tron.ITokenTradeTx);

        /** TokenTradeTx tx. */
        public tx: string;

        /**
         * Creates a new TokenTradeTx instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TokenTradeTx instance
         */
        public static create(properties?: tron.ITokenTradeTx): tron.TokenTradeTx;

        /**
         * Encodes the specified TokenTradeTx message. Does not implicitly {@link tron.TokenTradeTx.verify|verify} messages.
         * @param message TokenTradeTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tron.ITokenTradeTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TokenTradeTx message, length delimited. Does not implicitly {@link tron.TokenTradeTx.verify|verify} messages.
         * @param message TokenTradeTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tron.ITokenTradeTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TokenTradeTx message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TokenTradeTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tron.TokenTradeTx;

        /**
         * Decodes a TokenTradeTx message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TokenTradeTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tron.TokenTradeTx;

        /**
         * Verifies a TokenTradeTx message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TokenTradeTx message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TokenTradeTx
         */
        public static fromObject(object: { [k: string]: any }): tron.TokenTradeTx;

        /**
         * Creates a plain object from a TokenTradeTx message. Also converts values to other types if specified.
         * @param message TokenTradeTx
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tron.TokenTradeTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TokenTradeTx to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TokenTradeTx
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
