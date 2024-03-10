const mongoose=require("mongoose")
require("dotenv").config()
// { useNewUrlParser: true, useUnifiedTopology: true }
const connection=mongoose.connect(`${process.env.DATABASE_URL}`, { useNewUrlParser: true, useUnifiedTopology: true },)
        .then(() => console.log('MongoDB Connected'))
        .catch(err => console.log(err));

        module.exports={
            connection
        }