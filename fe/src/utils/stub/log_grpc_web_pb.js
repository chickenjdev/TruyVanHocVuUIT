/**
 * @fileoverview gRPC-Web generated client stub for com.mservice.gen
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.com = {};
proto.com.mservice = {};
proto.com.mservice.gen = require('./log_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.mservice.gen.CatLogClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.mservice.gen.CatLogPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.com.mservice.gen.Command,
 *   !proto.com.mservice.gen.Log>}
 */
const methodDescriptor_CatLog_Command148 = new grpc.web.MethodDescriptor(
  '/com.mservice.gen.CatLog/Command148',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.com.mservice.gen.Command,
  proto.com.mservice.gen.Log,
  /**
   * @param {!proto.com.mservice.gen.Command} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.mservice.gen.Log.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.mservice.gen.Command,
 *   !proto.com.mservice.gen.Log>}
 */
const methodInfo_CatLog_Command148 = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.mservice.gen.Log,
  /**
   * @param {!proto.com.mservice.gen.Command} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.mservice.gen.Log.deserializeBinary
);


/**
 * @param {!proto.com.mservice.gen.Command} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.mservice.gen.Log>}
 *     The XHR Node Readable Stream
 */
proto.com.mservice.gen.CatLogClient.prototype.command148 =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.mservice.gen.CatLog/Command148',
      request,
      metadata || {},
      methodDescriptor_CatLog_Command148);
};


/**
 * @param {!proto.com.mservice.gen.Command} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.mservice.gen.Log>}
 *     The XHR Node Readable Stream
 */
proto.com.mservice.gen.CatLogPromiseClient.prototype.command148 =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.mservice.gen.CatLog/Command148',
      request,
      metadata || {},
      methodDescriptor_CatLog_Command148);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.com.mservice.gen.Command,
 *   !proto.com.mservice.gen.Log>}
 */
const methodDescriptor_CatLog_Command218 = new grpc.web.MethodDescriptor(
  '/com.mservice.gen.CatLog/Command218',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.com.mservice.gen.Command,
  proto.com.mservice.gen.Log,
  /**
   * @param {!proto.com.mservice.gen.Command} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.mservice.gen.Log.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.mservice.gen.Command,
 *   !proto.com.mservice.gen.Log>}
 */
const methodInfo_CatLog_Command218 = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.mservice.gen.Log,
  /**
   * @param {!proto.com.mservice.gen.Command} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.mservice.gen.Log.deserializeBinary
);


/**
 * @param {!proto.com.mservice.gen.Command} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.mservice.gen.Log>}
 *     The XHR Node Readable Stream
 */
proto.com.mservice.gen.CatLogClient.prototype.command218 =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.mservice.gen.CatLog/Command218',
      request,
      metadata || {},
      methodDescriptor_CatLog_Command218);
};


/**
 * @param {!proto.com.mservice.gen.Command} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.mservice.gen.Log>}
 *     The XHR Node Readable Stream
 */
proto.com.mservice.gen.CatLogPromiseClient.prototype.command218 =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.mservice.gen.CatLog/Command218',
      request,
      metadata || {},
      methodDescriptor_CatLog_Command218);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.com.mservice.gen.Command,
 *   !proto.com.mservice.gen.Log>}
 */
const methodDescriptor_CatLog_Command232 = new grpc.web.MethodDescriptor(
  '/com.mservice.gen.CatLog/Command232',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.com.mservice.gen.Command,
  proto.com.mservice.gen.Log,
  /**
   * @param {!proto.com.mservice.gen.Command} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.mservice.gen.Log.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.mservice.gen.Command,
 *   !proto.com.mservice.gen.Log>}
 */
const methodInfo_CatLog_Command232 = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.mservice.gen.Log,
  /**
   * @param {!proto.com.mservice.gen.Command} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.mservice.gen.Log.deserializeBinary
);


/**
 * @param {!proto.com.mservice.gen.Command} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.mservice.gen.Log>}
 *     The XHR Node Readable Stream
 */
proto.com.mservice.gen.CatLogClient.prototype.command232 =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.mservice.gen.CatLog/Command232',
      request,
      metadata || {},
      methodDescriptor_CatLog_Command232);
};


/**
 * @param {!proto.com.mservice.gen.Command} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.mservice.gen.Log>}
 *     The XHR Node Readable Stream
 */
proto.com.mservice.gen.CatLogPromiseClient.prototype.command232 =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.mservice.gen.CatLog/Command232',
      request,
      metadata || {},
      methodDescriptor_CatLog_Command232);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.com.mservice.gen.Command,
 *   !proto.com.mservice.gen.Log>}
 */
const methodDescriptor_CatLog_Command108 = new grpc.web.MethodDescriptor(
  '/com.mservice.gen.CatLog/Command108',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.com.mservice.gen.Command,
  proto.com.mservice.gen.Log,
  /**
   * @param {!proto.com.mservice.gen.Command} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.mservice.gen.Log.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.mservice.gen.Command,
 *   !proto.com.mservice.gen.Log>}
 */
const methodInfo_CatLog_Command108 = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.mservice.gen.Log,
  /**
   * @param {!proto.com.mservice.gen.Command} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.mservice.gen.Log.deserializeBinary
);


/**
 * @param {!proto.com.mservice.gen.Command} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.mservice.gen.Log>}
 *     The XHR Node Readable Stream
 */
proto.com.mservice.gen.CatLogClient.prototype.command108 =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.mservice.gen.CatLog/Command108',
      request,
      metadata || {},
      methodDescriptor_CatLog_Command108);
};


/**
 * @param {!proto.com.mservice.gen.Command} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.mservice.gen.Log>}
 *     The XHR Node Readable Stream
 */
proto.com.mservice.gen.CatLogPromiseClient.prototype.command108 =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.mservice.gen.CatLog/Command108',
      request,
      metadata || {},
      methodDescriptor_CatLog_Command108);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.com.mservice.gen.Command,
 *   !proto.com.mservice.gen.Log>}
 */
const methodDescriptor_CatLog_Command102 = new grpc.web.MethodDescriptor(
  '/com.mservice.gen.CatLog/Command102',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.com.mservice.gen.Command,
  proto.com.mservice.gen.Log,
  /**
   * @param {!proto.com.mservice.gen.Command} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.mservice.gen.Log.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.mservice.gen.Command,
 *   !proto.com.mservice.gen.Log>}
 */
const methodInfo_CatLog_Command102 = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.mservice.gen.Log,
  /**
   * @param {!proto.com.mservice.gen.Command} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.mservice.gen.Log.deserializeBinary
);


/**
 * @param {!proto.com.mservice.gen.Command} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.mservice.gen.Log>}
 *     The XHR Node Readable Stream
 */
proto.com.mservice.gen.CatLogClient.prototype.command102 =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.mservice.gen.CatLog/Command102',
      request,
      metadata || {},
      methodDescriptor_CatLog_Command102);
};


/**
 * @param {!proto.com.mservice.gen.Command} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.mservice.gen.Log>}
 *     The XHR Node Readable Stream
 */
proto.com.mservice.gen.CatLogPromiseClient.prototype.command102 =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.mservice.gen.CatLog/Command102',
      request,
      metadata || {},
      methodDescriptor_CatLog_Command102);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.com.mservice.gen.Command,
 *   !proto.com.mservice.gen.Log>}
 */
const methodDescriptor_CatLog_Command12 = new grpc.web.MethodDescriptor(
  '/com.mservice.gen.CatLog/Command12',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.com.mservice.gen.Command,
  proto.com.mservice.gen.Log,
  /**
   * @param {!proto.com.mservice.gen.Command} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.mservice.gen.Log.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.mservice.gen.Command,
 *   !proto.com.mservice.gen.Log>}
 */
const methodInfo_CatLog_Command12 = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.mservice.gen.Log,
  /**
   * @param {!proto.com.mservice.gen.Command} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.mservice.gen.Log.deserializeBinary
);


/**
 * @param {!proto.com.mservice.gen.Command} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.mservice.gen.Log>}
 *     The XHR Node Readable Stream
 */
proto.com.mservice.gen.CatLogClient.prototype.command12 =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.mservice.gen.CatLog/Command12',
      request,
      metadata || {},
      methodDescriptor_CatLog_Command12);
};


/**
 * @param {!proto.com.mservice.gen.Command} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.mservice.gen.Log>}
 *     The XHR Node Readable Stream
 */
proto.com.mservice.gen.CatLogPromiseClient.prototype.command12 =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.mservice.gen.CatLog/Command12',
      request,
      metadata || {},
      methodDescriptor_CatLog_Command12);
};


module.exports = proto.com.mservice.gen;

