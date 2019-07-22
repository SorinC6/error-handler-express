## A graceful error handler for Express applications

## Easy Express error handler with the most commun errors

Error-Express-Handler is a easy middleware with build in errors messages for the most commun http errors in an express application. Using this package the user no longer have to put the code status and the message for the error

## Getting started

- npm install `npm i error-express-handler` or `yarn add error-express-handler`
- In your express server file, require `errorHandler`

```javascript
const { errorHandler } = require("error-express-handler");
const express = require("express");

//server
const server = expresss();
server.use(express.json());

//use errorHandler middleware here
server.use(errorHandler);

server.listen(port, () => {
  console.log(`\n*** Server running on http://localhost:${port}  ***\n`);
});
```

## Whow it works

- Example before using `error-express-handler` your code could look similar to:

```javascript
router.delete("/users/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await dbHelpers.deleteUserById(id);
    if (result === 1) {
      res.status(200).json({
        message: "Delete user Sucesfully"
      });
    } else {
      res
        .status(404)
        .json({ message: "The server can not find requested resource" });
    }
  } catch (error) {
    res.status(500).json({
      error: `The server has encountered a situation it doesn't know how to handle`
    });
  }
});
```

### Now you can require `responseStatus` anywhere in your code and use it like in this example:

```javascript
const { responseStatus } = require("error-express-handler");

router.delete("/users/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await dbHelpers.deleteUserById(id);
    if (result === 1) {
      res.status(responseStatus.successful).json({
        message: "Delete user Sucesfully"
      });
    } else {
      next(responseStatus.notFound);
    }
  } catch (error) {
    next(responseStatus.serverError);
  }
});
```

The above would return:

- in case of `next(responseStatus.notFound)`:

```json
{
  "statusCode": 404,
  "error": "The server can not find requested resource"
}
```

- in case of `next(responseStatus.serverError)`:

```json
{
  "statusCode": 500,
  "error": "The server has encountered a situation it doesn't know how to handle"
}
```

For now this are all HTTP response status codes with detail error messages:

```js
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
```

# Contribution

- Wanna add more HTTP response status codes or got an idea on how to improve this error handler , feel free to contribute

Github repository [@Sorin Chis](https://github.com/SorinC6)
