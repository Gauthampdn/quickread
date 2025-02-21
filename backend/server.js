require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')

const articleRoutes = require("./routes/articleRoutes")
const userRoutes = require("./routes/userRoutes")

const app = express()

// middleware
app.use(express.json())
app.use(cors({
  origin: ['http://localhost:8081'],
  credentials: true
}))

app.use((req, res, next) => {
  console.log(req.method, req.path)
  next()
})

// routes
app.use("/api/articles", articleRoutes)
app.use("/api/users", userRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to DB and listening on port " + process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 