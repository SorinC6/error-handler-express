const responseStatus = {
  successful: 200,
  created: 201,
  badRequest: 400,
  badCredentials: 401,
  forbiddenAccess: 403,
  notFound: 404,
  requestTimeout: 408,
  gone: 410,
  typeError: 422,
  serverError: 500,
  notImplemented: 501,
  badGateway: 502,
  serviceTemporarilyUnavaible: 503,
  gatewayTimeout: 504
};

module.exports = responseStatus;
