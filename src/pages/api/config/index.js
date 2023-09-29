require("dotenv").config()

const config = {
    port: process.env.PORT,
    mongodbUriProd: process.env.MONGODB_URI_PROD,
    mongodbUri: process.env.MONGODB_URI,
}

module.exports = config;