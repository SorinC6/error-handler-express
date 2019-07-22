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

//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

function errorHandler(error, req, res, next) {
  switch (error) {
    case responseStatus.created: //201
      res.status(responseStatus.created).json({
        statusCode: 201,
        message:
          "The request has succeeded and a new resource has been created as a result of it"
      });
      break;
    case responseStatus.badRequest: // 400
      res.status(responseStatus.badRequest).json({
        statusCode: 400,
        error:
          "That server could not understand the request due to invalid syntax"
      });
      break;
    case responseStatus.badCredentials: //401
      res.status(responseStatus.badCredentials).json({
        statusCode: 401,
        error: "Incorrect credentials. Please try again."
      });
      break;
    case responseStatus.forbiddenAccess: //403
      res.status(responseStatus.forbiddenAccess).json({
        statusCode: 403,
        error: "You are not authorized to view this content."
      });
      break;
    case responseStatus.notFound: //404
      res.status(responseStatus.notFound).json({
        statusCode: 404,
        error: "The server can not find requested resource"
      });
      break;
    case responseStatus.requestTimeout: //408
      res.status(responseStatus.requestTimeout).json({
        statusCode: 408,
        error: "The server would like to shut down this unused connection"
      });
      break;
    case responseStatus.gone: //410
      res.status(responseStatus.gone).json({
        statusCode: 410,
        error:
          "the requested content has been permanently deleted from server, with no forwarding address"
      });
      break;
    case responseStatus.typeError: //422
      res.status(responseStatus.typeError).json({
        statusCode: 422,
        error:
          "The request was well-formed but was unable to be followed due to semantic errors."
      });
      break;

    case responseStatus.serverError: //500
      res.status(responseStatus.serverError).json({
        statusCode: 500,
        error: `The server has encountered a situation it doesn't know how to handle`
      });
      break;
    case responseStatus.badGateway: //502
      res.status(responseStatus.badGateway).json({
        statusCode: 502,
        error: `While working as a gateway to get a response needed to handle the request, got an invalid response.`
      });
      break;

    case responseStatus.serviceTemporarilyUnavaible: //503
      res.status(responseStatus.serviceTemporarilyUnavaible).json({
        statusCode: 503,
        error: `The server is not ready to handle the request`
      });
      break;

    case responseStatus.gatewayTimeout: //504
      res.status(responseStatus.gatewayTimeout).json({
        statusCode: 504,
        error: `The server is acting as a gateway and cannot get a response in time.`
      });
      break;

    default:
      res.json({ message: error.message });
  }
  next();
}

module.exports = {
  responseStatus,
  errorHandler
};
