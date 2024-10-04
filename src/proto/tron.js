/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.tron = (function() {

    /**
     * Namespace tron.
     * @exports tron
     * @namespace
     */
    var tron = {};

    tron.Tron = (function() {

        /**
         * Constructs a new Tron service.
         * @memberof tron
         * @classdesc Represents a Tron
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Tron(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Tron.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Tron;

        /**
         * Creates new Tron service using the specified rpc implementation.
         * @function create
         * @memberof tron.Tron
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Tron} RPC service. Useful where requests and/or responses are streamed.
         */
        Tron.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link tron.Tron#createToken}.
         * @memberof tron.Tron
         * @typedef CreateTokenCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {tron.UTransactionItem} [response] UTransactionItem
         */

        /**
         * Calls CreateToken.
         * @function createToken
         * @memberof tron.Tron
         * @instance
         * @param {tron.ITokenItem} request TokenItem message or plain object
         * @param {tron.Tron.CreateTokenCallback} callback Node-style callback called with the error, if any, and UTransactionItem
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Tron.prototype.createToken = function createToken(request, callback) {
            return this.rpcCall(createToken, $root.tron.TokenItem, $root.tron.UTransactionItem, request, callback);
        }, "name", { value: "CreateToken" });

        /**
         * Calls CreateToken.
         * @function createToken
         * @memberof tron.Tron
         * @instance
         * @param {tron.ITokenItem} request TokenItem message or plain object
         * @returns {Promise<tron.UTransactionItem>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link tron.Tron#broadcastToken}.
         * @memberof tron.Tron
         * @typedef BroadcastTokenCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {tron.TokenContractAdd} [response] TokenContractAdd
         */

        /**
         * Calls BroadcastToken.
         * @function broadcastToken
         * @memberof tron.Tron
         * @instance
         * @param {tron.ISTransactionItem} request STransactionItem message or plain object
         * @param {tron.Tron.BroadcastTokenCallback} callback Node-style callback called with the error, if any, and TokenContractAdd
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Tron.prototype.broadcastToken = function broadcastToken(request, callback) {
            return this.rpcCall(broadcastToken, $root.tron.STransactionItem, $root.tron.TokenContractAdd, request, callback);
        }, "name", { value: "BroadcastToken" });

        /**
         * Calls BroadcastToken.
         * @function broadcastToken
         * @memberof tron.Tron
         * @instance
         * @param {tron.ISTransactionItem} request STransactionItem message or plain object
         * @returns {Promise<tron.TokenContractAdd>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link tron.Tron#buyToken}.
         * @memberof tron.Tron
         * @typedef BuyTokenCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {tron.TokenTradeTx} [response] TokenTradeTx
         */

        /**
         * Calls BuyToken.
         * @function buyToken
         * @memberof tron.Tron
         * @instance
         * @param {tron.ITokenTradeItem} request TokenTradeItem message or plain object
         * @param {tron.Tron.BuyTokenCallback} callback Node-style callback called with the error, if any, and TokenTradeTx
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Tron.prototype.buyToken = function buyToken(request, callback) {
            return this.rpcCall(buyToken, $root.tron.TokenTradeItem, $root.tron.TokenTradeTx, request, callback);
        }, "name", { value: "BuyToken" });

        /**
         * Calls BuyToken.
         * @function buyToken
         * @memberof tron.Tron
         * @instance
         * @param {tron.ITokenTradeItem} request TokenTradeItem message or plain object
         * @returns {Promise<tron.TokenTradeTx>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link tron.Tron#sellToken}.
         * @memberof tron.Tron
         * @typedef SellTokenCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {tron.TokenTradeTx} [response] TokenTradeTx
         */

        /**
         * Calls SellToken.
         * @function sellToken
         * @memberof tron.Tron
         * @instance
         * @param {tron.ITokenTradeItem} request TokenTradeItem message or plain object
         * @param {tron.Tron.SellTokenCallback} callback Node-style callback called with the error, if any, and TokenTradeTx
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Tron.prototype.sellToken = function sellToken(request, callback) {
            return this.rpcCall(sellToken, $root.tron.TokenTradeItem, $root.tron.TokenTradeTx, request, callback);
        }, "name", { value: "SellToken" });

        /**
         * Calls SellToken.
         * @function sellToken
         * @memberof tron.Tron
         * @instance
         * @param {tron.ITokenTradeItem} request TokenTradeItem message or plain object
         * @returns {Promise<tron.TokenTradeTx>} Promise
         * @variation 2
         */

        return Tron;
    })();

    tron.TokenItem = (function() {

        /**
         * Properties of a TokenItem.
         * @memberof tron
         * @interface ITokenItem
         * @property {string|null} [name] TokenItem name
         * @property {string|null} [description] TokenItem description
         * @property {string|null} [symbol] TokenItem symbol
         * @property {number|null} [totalSupply] TokenItem totalSupply
         */

        /**
         * Constructs a new TokenItem.
         * @memberof tron
         * @classdesc Represents a TokenItem.
         * @implements ITokenItem
         * @constructor
         * @param {tron.ITokenItem=} [properties] Properties to set
         */
        function TokenItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TokenItem name.
         * @member {string} name
         * @memberof tron.TokenItem
         * @instance
         */
        TokenItem.prototype.name = "";

        /**
         * TokenItem description.
         * @member {string} description
         * @memberof tron.TokenItem
         * @instance
         */
        TokenItem.prototype.description = "";

        /**
         * TokenItem symbol.
         * @member {string} symbol
         * @memberof tron.TokenItem
         * @instance
         */
        TokenItem.prototype.symbol = "";

        /**
         * TokenItem totalSupply.
         * @member {number} totalSupply
         * @memberof tron.TokenItem
         * @instance
         */
        TokenItem.prototype.totalSupply = 0;

        /**
         * Creates a new TokenItem instance using the specified properties.
         * @function create
         * @memberof tron.TokenItem
         * @static
         * @param {tron.ITokenItem=} [properties] Properties to set
         * @returns {tron.TokenItem} TokenItem instance
         */
        TokenItem.create = function create(properties) {
            return new TokenItem(properties);
        };

        /**
         * Encodes the specified TokenItem message. Does not implicitly {@link tron.TokenItem.verify|verify} messages.
         * @function encode
         * @memberof tron.TokenItem
         * @static
         * @param {tron.ITokenItem} message TokenItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.description);
            if (message.symbol != null && Object.hasOwnProperty.call(message, "symbol"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.symbol);
            if (message.totalSupply != null && Object.hasOwnProperty.call(message, "totalSupply"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.totalSupply);
            return writer;
        };

        /**
         * Encodes the specified TokenItem message, length delimited. Does not implicitly {@link tron.TokenItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tron.TokenItem
         * @static
         * @param {tron.ITokenItem} message TokenItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TokenItem message from the specified reader or buffer.
         * @function decode
         * @memberof tron.TokenItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tron.TokenItem} TokenItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tron.TokenItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.description = reader.string();
                        break;
                    }
                case 3: {
                        message.symbol = reader.string();
                        break;
                    }
                case 4: {
                        message.totalSupply = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TokenItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tron.TokenItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tron.TokenItem} TokenItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TokenItem message.
         * @function verify
         * @memberof tron.TokenItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TokenItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                if (!$util.isString(message.symbol))
                    return "symbol: string expected";
            if (message.totalSupply != null && message.hasOwnProperty("totalSupply"))
                if (!$util.isInteger(message.totalSupply))
                    return "totalSupply: integer expected";
            return null;
        };

        /**
         * Creates a TokenItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tron.TokenItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tron.TokenItem} TokenItem
         */
        TokenItem.fromObject = function fromObject(object) {
            if (object instanceof $root.tron.TokenItem)
                return object;
            var message = new $root.tron.TokenItem();
            if (object.name != null)
                message.name = String(object.name);
            if (object.description != null)
                message.description = String(object.description);
            if (object.symbol != null)
                message.symbol = String(object.symbol);
            if (object.totalSupply != null)
                message.totalSupply = object.totalSupply | 0;
            return message;
        };

        /**
         * Creates a plain object from a TokenItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tron.TokenItem
         * @static
         * @param {tron.TokenItem} message TokenItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TokenItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.description = "";
                object.symbol = "";
                object.totalSupply = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                object.symbol = message.symbol;
            if (message.totalSupply != null && message.hasOwnProperty("totalSupply"))
                object.totalSupply = message.totalSupply;
            return object;
        };

        /**
         * Converts this TokenItem to JSON.
         * @function toJSON
         * @memberof tron.TokenItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TokenItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TokenItem
         * @function getTypeUrl
         * @memberof tron.TokenItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TokenItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tron.TokenItem";
        };

        return TokenItem;
    })();

    tron.UTransactionItem = (function() {

        /**
         * Properties of a UTransactionItem.
         * @memberof tron
         * @interface IUTransactionItem
         * @property {string|null} [trx] UTransactionItem trx
         */

        /**
         * Constructs a new UTransactionItem.
         * @memberof tron
         * @classdesc Represents a UTransactionItem.
         * @implements IUTransactionItem
         * @constructor
         * @param {tron.IUTransactionItem=} [properties] Properties to set
         */
        function UTransactionItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UTransactionItem trx.
         * @member {string} trx
         * @memberof tron.UTransactionItem
         * @instance
         */
        UTransactionItem.prototype.trx = "";

        /**
         * Creates a new UTransactionItem instance using the specified properties.
         * @function create
         * @memberof tron.UTransactionItem
         * @static
         * @param {tron.IUTransactionItem=} [properties] Properties to set
         * @returns {tron.UTransactionItem} UTransactionItem instance
         */
        UTransactionItem.create = function create(properties) {
            return new UTransactionItem(properties);
        };

        /**
         * Encodes the specified UTransactionItem message. Does not implicitly {@link tron.UTransactionItem.verify|verify} messages.
         * @function encode
         * @memberof tron.UTransactionItem
         * @static
         * @param {tron.IUTransactionItem} message UTransactionItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UTransactionItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.trx != null && Object.hasOwnProperty.call(message, "trx"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.trx);
            return writer;
        };

        /**
         * Encodes the specified UTransactionItem message, length delimited. Does not implicitly {@link tron.UTransactionItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tron.UTransactionItem
         * @static
         * @param {tron.IUTransactionItem} message UTransactionItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UTransactionItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UTransactionItem message from the specified reader or buffer.
         * @function decode
         * @memberof tron.UTransactionItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tron.UTransactionItem} UTransactionItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UTransactionItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tron.UTransactionItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.trx = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UTransactionItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tron.UTransactionItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tron.UTransactionItem} UTransactionItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UTransactionItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UTransactionItem message.
         * @function verify
         * @memberof tron.UTransactionItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UTransactionItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.trx != null && message.hasOwnProperty("trx"))
                if (!$util.isString(message.trx))
                    return "trx: string expected";
            return null;
        };

        /**
         * Creates a UTransactionItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tron.UTransactionItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tron.UTransactionItem} UTransactionItem
         */
        UTransactionItem.fromObject = function fromObject(object) {
            if (object instanceof $root.tron.UTransactionItem)
                return object;
            var message = new $root.tron.UTransactionItem();
            if (object.trx != null)
                message.trx = String(object.trx);
            return message;
        };

        /**
         * Creates a plain object from a UTransactionItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tron.UTransactionItem
         * @static
         * @param {tron.UTransactionItem} message UTransactionItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UTransactionItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.trx = "";
            if (message.trx != null && message.hasOwnProperty("trx"))
                object.trx = message.trx;
            return object;
        };

        /**
         * Converts this UTransactionItem to JSON.
         * @function toJSON
         * @memberof tron.UTransactionItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UTransactionItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UTransactionItem
         * @function getTypeUrl
         * @memberof tron.UTransactionItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UTransactionItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tron.UTransactionItem";
        };

        return UTransactionItem;
    })();

    tron.STransactionItem = (function() {

        /**
         * Properties of a STransactionItem.
         * @memberof tron
         * @interface ISTransactionItem
         * @property {string|null} [trx] STransactionItem trx
         * @property {string|null} [utrx] STransactionItem utrx
         */

        /**
         * Constructs a new STransactionItem.
         * @memberof tron
         * @classdesc Represents a STransactionItem.
         * @implements ISTransactionItem
         * @constructor
         * @param {tron.ISTransactionItem=} [properties] Properties to set
         */
        function STransactionItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * STransactionItem trx.
         * @member {string} trx
         * @memberof tron.STransactionItem
         * @instance
         */
        STransactionItem.prototype.trx = "";

        /**
         * STransactionItem utrx.
         * @member {string} utrx
         * @memberof tron.STransactionItem
         * @instance
         */
        STransactionItem.prototype.utrx = "";

        /**
         * Creates a new STransactionItem instance using the specified properties.
         * @function create
         * @memberof tron.STransactionItem
         * @static
         * @param {tron.ISTransactionItem=} [properties] Properties to set
         * @returns {tron.STransactionItem} STransactionItem instance
         */
        STransactionItem.create = function create(properties) {
            return new STransactionItem(properties);
        };

        /**
         * Encodes the specified STransactionItem message. Does not implicitly {@link tron.STransactionItem.verify|verify} messages.
         * @function encode
         * @memberof tron.STransactionItem
         * @static
         * @param {tron.ISTransactionItem} message STransactionItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STransactionItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.trx != null && Object.hasOwnProperty.call(message, "trx"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.trx);
            if (message.utrx != null && Object.hasOwnProperty.call(message, "utrx"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.utrx);
            return writer;
        };

        /**
         * Encodes the specified STransactionItem message, length delimited. Does not implicitly {@link tron.STransactionItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tron.STransactionItem
         * @static
         * @param {tron.ISTransactionItem} message STransactionItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        STransactionItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a STransactionItem message from the specified reader or buffer.
         * @function decode
         * @memberof tron.STransactionItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tron.STransactionItem} STransactionItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STransactionItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tron.STransactionItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.trx = reader.string();
                        break;
                    }
                case 2: {
                        message.utrx = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a STransactionItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tron.STransactionItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tron.STransactionItem} STransactionItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        STransactionItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a STransactionItem message.
         * @function verify
         * @memberof tron.STransactionItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        STransactionItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.trx != null && message.hasOwnProperty("trx"))
                if (!$util.isString(message.trx))
                    return "trx: string expected";
            if (message.utrx != null && message.hasOwnProperty("utrx"))
                if (!$util.isString(message.utrx))
                    return "utrx: string expected";
            return null;
        };

        /**
         * Creates a STransactionItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tron.STransactionItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tron.STransactionItem} STransactionItem
         */
        STransactionItem.fromObject = function fromObject(object) {
            if (object instanceof $root.tron.STransactionItem)
                return object;
            var message = new $root.tron.STransactionItem();
            if (object.trx != null)
                message.trx = String(object.trx);
            if (object.utrx != null)
                message.utrx = String(object.utrx);
            return message;
        };

        /**
         * Creates a plain object from a STransactionItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tron.STransactionItem
         * @static
         * @param {tron.STransactionItem} message STransactionItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        STransactionItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.trx = "";
                object.utrx = "";
            }
            if (message.trx != null && message.hasOwnProperty("trx"))
                object.trx = message.trx;
            if (message.utrx != null && message.hasOwnProperty("utrx"))
                object.utrx = message.utrx;
            return object;
        };

        /**
         * Converts this STransactionItem to JSON.
         * @function toJSON
         * @memberof tron.STransactionItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        STransactionItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for STransactionItem
         * @function getTypeUrl
         * @memberof tron.STransactionItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        STransactionItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tron.STransactionItem";
        };

        return STransactionItem;
    })();

    tron.TokenContractAdd = (function() {

        /**
         * Properties of a TokenContractAdd.
         * @memberof tron
         * @interface ITokenContractAdd
         * @property {string|null} [add] TokenContractAdd add
         */

        /**
         * Constructs a new TokenContractAdd.
         * @memberof tron
         * @classdesc Represents a TokenContractAdd.
         * @implements ITokenContractAdd
         * @constructor
         * @param {tron.ITokenContractAdd=} [properties] Properties to set
         */
        function TokenContractAdd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TokenContractAdd add.
         * @member {string} add
         * @memberof tron.TokenContractAdd
         * @instance
         */
        TokenContractAdd.prototype.add = "";

        /**
         * Creates a new TokenContractAdd instance using the specified properties.
         * @function create
         * @memberof tron.TokenContractAdd
         * @static
         * @param {tron.ITokenContractAdd=} [properties] Properties to set
         * @returns {tron.TokenContractAdd} TokenContractAdd instance
         */
        TokenContractAdd.create = function create(properties) {
            return new TokenContractAdd(properties);
        };

        /**
         * Encodes the specified TokenContractAdd message. Does not implicitly {@link tron.TokenContractAdd.verify|verify} messages.
         * @function encode
         * @memberof tron.TokenContractAdd
         * @static
         * @param {tron.ITokenContractAdd} message TokenContractAdd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenContractAdd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.add != null && Object.hasOwnProperty.call(message, "add"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.add);
            return writer;
        };

        /**
         * Encodes the specified TokenContractAdd message, length delimited. Does not implicitly {@link tron.TokenContractAdd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tron.TokenContractAdd
         * @static
         * @param {tron.ITokenContractAdd} message TokenContractAdd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenContractAdd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TokenContractAdd message from the specified reader or buffer.
         * @function decode
         * @memberof tron.TokenContractAdd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tron.TokenContractAdd} TokenContractAdd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenContractAdd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tron.TokenContractAdd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.add = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TokenContractAdd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tron.TokenContractAdd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tron.TokenContractAdd} TokenContractAdd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenContractAdd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TokenContractAdd message.
         * @function verify
         * @memberof tron.TokenContractAdd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TokenContractAdd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.add != null && message.hasOwnProperty("add"))
                if (!$util.isString(message.add))
                    return "add: string expected";
            return null;
        };

        /**
         * Creates a TokenContractAdd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tron.TokenContractAdd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tron.TokenContractAdd} TokenContractAdd
         */
        TokenContractAdd.fromObject = function fromObject(object) {
            if (object instanceof $root.tron.TokenContractAdd)
                return object;
            var message = new $root.tron.TokenContractAdd();
            if (object.add != null)
                message.add = String(object.add);
            return message;
        };

        /**
         * Creates a plain object from a TokenContractAdd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tron.TokenContractAdd
         * @static
         * @param {tron.TokenContractAdd} message TokenContractAdd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TokenContractAdd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.add = "";
            if (message.add != null && message.hasOwnProperty("add"))
                object.add = message.add;
            return object;
        };

        /**
         * Converts this TokenContractAdd to JSON.
         * @function toJSON
         * @memberof tron.TokenContractAdd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TokenContractAdd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TokenContractAdd
         * @function getTypeUrl
         * @memberof tron.TokenContractAdd
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TokenContractAdd.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tron.TokenContractAdd";
        };

        return TokenContractAdd;
    })();

    tron.TokenTradeItem = (function() {

        /**
         * Properties of a TokenTradeItem.
         * @memberof tron
         * @interface ITokenTradeItem
         * @property {string|null} [from] TokenTradeItem from
         * @property {string|null} [to] TokenTradeItem to
         * @property {string|null} [symbol] TokenTradeItem symbol
         * @property {number|null} [amount] TokenTradeItem amount
         */

        /**
         * Constructs a new TokenTradeItem.
         * @memberof tron
         * @classdesc Represents a TokenTradeItem.
         * @implements ITokenTradeItem
         * @constructor
         * @param {tron.ITokenTradeItem=} [properties] Properties to set
         */
        function TokenTradeItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TokenTradeItem from.
         * @member {string} from
         * @memberof tron.TokenTradeItem
         * @instance
         */
        TokenTradeItem.prototype.from = "";

        /**
         * TokenTradeItem to.
         * @member {string} to
         * @memberof tron.TokenTradeItem
         * @instance
         */
        TokenTradeItem.prototype.to = "";

        /**
         * TokenTradeItem symbol.
         * @member {string} symbol
         * @memberof tron.TokenTradeItem
         * @instance
         */
        TokenTradeItem.prototype.symbol = "";

        /**
         * TokenTradeItem amount.
         * @member {number} amount
         * @memberof tron.TokenTradeItem
         * @instance
         */
        TokenTradeItem.prototype.amount = 0;

        /**
         * Creates a new TokenTradeItem instance using the specified properties.
         * @function create
         * @memberof tron.TokenTradeItem
         * @static
         * @param {tron.ITokenTradeItem=} [properties] Properties to set
         * @returns {tron.TokenTradeItem} TokenTradeItem instance
         */
        TokenTradeItem.create = function create(properties) {
            return new TokenTradeItem(properties);
        };

        /**
         * Encodes the specified TokenTradeItem message. Does not implicitly {@link tron.TokenTradeItem.verify|verify} messages.
         * @function encode
         * @memberof tron.TokenTradeItem
         * @static
         * @param {tron.ITokenTradeItem} message TokenTradeItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenTradeItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.from != null && Object.hasOwnProperty.call(message, "from"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.from);
            if (message.to != null && Object.hasOwnProperty.call(message, "to"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.to);
            if (message.symbol != null && Object.hasOwnProperty.call(message, "symbol"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.symbol);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.amount);
            return writer;
        };

        /**
         * Encodes the specified TokenTradeItem message, length delimited. Does not implicitly {@link tron.TokenTradeItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tron.TokenTradeItem
         * @static
         * @param {tron.ITokenTradeItem} message TokenTradeItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenTradeItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TokenTradeItem message from the specified reader or buffer.
         * @function decode
         * @memberof tron.TokenTradeItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tron.TokenTradeItem} TokenTradeItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenTradeItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tron.TokenTradeItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.from = reader.string();
                        break;
                    }
                case 2: {
                        message.to = reader.string();
                        break;
                    }
                case 3: {
                        message.symbol = reader.string();
                        break;
                    }
                case 4: {
                        message.amount = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TokenTradeItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tron.TokenTradeItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tron.TokenTradeItem} TokenTradeItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenTradeItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TokenTradeItem message.
         * @function verify
         * @memberof tron.TokenTradeItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TokenTradeItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.from != null && message.hasOwnProperty("from"))
                if (!$util.isString(message.from))
                    return "from: string expected";
            if (message.to != null && message.hasOwnProperty("to"))
                if (!$util.isString(message.to))
                    return "to: string expected";
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                if (!$util.isString(message.symbol))
                    return "symbol: string expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount))
                    return "amount: integer expected";
            return null;
        };

        /**
         * Creates a TokenTradeItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tron.TokenTradeItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tron.TokenTradeItem} TokenTradeItem
         */
        TokenTradeItem.fromObject = function fromObject(object) {
            if (object instanceof $root.tron.TokenTradeItem)
                return object;
            var message = new $root.tron.TokenTradeItem();
            if (object.from != null)
                message.from = String(object.from);
            if (object.to != null)
                message.to = String(object.to);
            if (object.symbol != null)
                message.symbol = String(object.symbol);
            if (object.amount != null)
                message.amount = object.amount | 0;
            return message;
        };

        /**
         * Creates a plain object from a TokenTradeItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tron.TokenTradeItem
         * @static
         * @param {tron.TokenTradeItem} message TokenTradeItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TokenTradeItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.from = "";
                object.to = "";
                object.symbol = "";
                object.amount = 0;
            }
            if (message.from != null && message.hasOwnProperty("from"))
                object.from = message.from;
            if (message.to != null && message.hasOwnProperty("to"))
                object.to = message.to;
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                object.symbol = message.symbol;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = message.amount;
            return object;
        };

        /**
         * Converts this TokenTradeItem to JSON.
         * @function toJSON
         * @memberof tron.TokenTradeItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TokenTradeItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TokenTradeItem
         * @function getTypeUrl
         * @memberof tron.TokenTradeItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TokenTradeItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tron.TokenTradeItem";
        };

        return TokenTradeItem;
    })();

    tron.TokenTradeTx = (function() {

        /**
         * Properties of a TokenTradeTx.
         * @memberof tron
         * @interface ITokenTradeTx
         * @property {string|null} [tx] TokenTradeTx tx
         */

        /**
         * Constructs a new TokenTradeTx.
         * @memberof tron
         * @classdesc Represents a TokenTradeTx.
         * @implements ITokenTradeTx
         * @constructor
         * @param {tron.ITokenTradeTx=} [properties] Properties to set
         */
        function TokenTradeTx(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TokenTradeTx tx.
         * @member {string} tx
         * @memberof tron.TokenTradeTx
         * @instance
         */
        TokenTradeTx.prototype.tx = "";

        /**
         * Creates a new TokenTradeTx instance using the specified properties.
         * @function create
         * @memberof tron.TokenTradeTx
         * @static
         * @param {tron.ITokenTradeTx=} [properties] Properties to set
         * @returns {tron.TokenTradeTx} TokenTradeTx instance
         */
        TokenTradeTx.create = function create(properties) {
            return new TokenTradeTx(properties);
        };

        /**
         * Encodes the specified TokenTradeTx message. Does not implicitly {@link tron.TokenTradeTx.verify|verify} messages.
         * @function encode
         * @memberof tron.TokenTradeTx
         * @static
         * @param {tron.ITokenTradeTx} message TokenTradeTx message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenTradeTx.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tx != null && Object.hasOwnProperty.call(message, "tx"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tx);
            return writer;
        };

        /**
         * Encodes the specified TokenTradeTx message, length delimited. Does not implicitly {@link tron.TokenTradeTx.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tron.TokenTradeTx
         * @static
         * @param {tron.ITokenTradeTx} message TokenTradeTx message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenTradeTx.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TokenTradeTx message from the specified reader or buffer.
         * @function decode
         * @memberof tron.TokenTradeTx
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tron.TokenTradeTx} TokenTradeTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenTradeTx.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tron.TokenTradeTx();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.tx = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TokenTradeTx message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tron.TokenTradeTx
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tron.TokenTradeTx} TokenTradeTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenTradeTx.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TokenTradeTx message.
         * @function verify
         * @memberof tron.TokenTradeTx
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TokenTradeTx.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tx != null && message.hasOwnProperty("tx"))
                if (!$util.isString(message.tx))
                    return "tx: string expected";
            return null;
        };

        /**
         * Creates a TokenTradeTx message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tron.TokenTradeTx
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tron.TokenTradeTx} TokenTradeTx
         */
        TokenTradeTx.fromObject = function fromObject(object) {
            if (object instanceof $root.tron.TokenTradeTx)
                return object;
            var message = new $root.tron.TokenTradeTx();
            if (object.tx != null)
                message.tx = String(object.tx);
            return message;
        };

        /**
         * Creates a plain object from a TokenTradeTx message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tron.TokenTradeTx
         * @static
         * @param {tron.TokenTradeTx} message TokenTradeTx
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TokenTradeTx.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.tx = "";
            if (message.tx != null && message.hasOwnProperty("tx"))
                object.tx = message.tx;
            return object;
        };

        /**
         * Converts this TokenTradeTx to JSON.
         * @function toJSON
         * @memberof tron.TokenTradeTx
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TokenTradeTx.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TokenTradeTx
         * @function getTypeUrl
         * @memberof tron.TokenTradeTx
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TokenTradeTx.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tron.TokenTradeTx";
        };

        return TokenTradeTx;
    })();

    return tron;
})();

module.exports = $root;
