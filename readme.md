## A Central error handler for express app
## Eeasy Express error handler with the most commun errors

Error-Express-Handler is a easy middleware with build in errors messages for the most commun http errors in an express application. Using this packeges the user no longer have to put the code status and the message for the error 

## Getting started

- npm install `npm i error-express-handler`
- In your express server file, require `bouncer`

```javascript
const { bouncer } = require('express-error-bouncer');

const express = require('express')

const app = express()

app.use(express.json())
const PORT = process.env.PORT || 300
  //...
  //...
  //...
app.use(bouncer);
app.listen(PORT, () => console.log(`server listening at port ${PORT}`))

```

- Notice that the bouncer is last in the pipeline, that is, it should be the last before app.listen() call.

Now anywhere in the app that you want to catch error, you can use the `ErrorHandler constructor as shown below:

```js
const { ErrorHandler } = require('express-error-bouncer')

const testBouncer = (req, res, next) => {
  try {
    //
    throw new ErrorHandler(404, 'Resource not found')
  } catch(err){
    next(err)
  }
}
```

The above would return:
```json
{
    "status": "error",
    "code": 404,
    "message": "Resource not found"
}

```

# Contribution
- Got an idea on how to make this package better, feel free to contribute
  
Follow me on twitter [@iam_nedsoft](https://twitter.com/iam_nedsoft) for more updates
