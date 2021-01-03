const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose
  .connect(
    "mongodb://unihit:wlgnlwk1004@boilerplate-shard-00-00.eaiaz.mongodb.net:27017,boilerplate-shard-00-01.eaiaz.mongodb.net:27017,boilerplate-shard-00-02.eaiaz.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-gd0g3z-shard-0&authSource=admin&retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("mongoDB Connected..."))
  .catch((err) => console.log(err));



app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))