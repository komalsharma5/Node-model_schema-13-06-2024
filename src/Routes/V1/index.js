const express = require("express")
const userRoute = require("./User_Routes")


const router = express()

router.use("/linking-pharse",userRoute)

module.exports = router