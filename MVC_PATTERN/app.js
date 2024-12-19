const express = require('express')
const connectDB = require('./config/connect');
const dotenv=require('dotenv')
const app = express()
const ProductRoute = require('./routes/productRoute')

//load env
dotenv.config();

const port=process.env.PORT

//body parser built-in middleware
app.use(express.json());

//connecting to Database
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//mount
app.use('/api',ProductRoute);

app.listen(port, () => {
  console.log(`E Commerce app listening on port ${port}`)
})