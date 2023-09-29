const mongoose = require('mongoose')
const { mongodbUri, mongodbUriProd } = require(".")

const connection = async function(){
    const conn = await mongoose.connect(`${mongodbUri}`)
    console.log("Mongo DB connected:",conn.connection.host)
    return connection;
}

module.exports = {connection, mongoose}