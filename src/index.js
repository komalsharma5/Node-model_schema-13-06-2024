const express = require("express")
const connectDB = require("./db/DbConnection")
const router = require("./Routes/V1")

const app = express()

app.listen(4000,()=>{
    console.log("Server is running on port 4000")
})

app.use("/V1",router)

connectDB()