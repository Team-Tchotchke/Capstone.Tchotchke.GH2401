const express = require("express")
const apiRouter = express.Router()

// apiRouter.use('/users', expressJwt({secret:process.env.SECRET||"SHHH", algorithms: ['HS256']}))
// apiRouter.use('/orders', expressJwt({secret:process.env.SECRET||"SHHH", algorithms: ['HS256']}))

apiRouter.use("/products", require("./products"))
module.exports = apiRouter

apiRouter.use("/users", require("./users"))
module.exports = apiRouter

apiRouter.use("/orders", require("./orders"))

module.exports = apiRouter