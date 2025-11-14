const express = require('express')
const cors = require('cors')

//user defined modules
const authorization = require('./routes/authorization')
// const bookingRouter = require('./routes/booking')
// const categoryRouter = require('./routes/category')
<<<<<<< HEAD
const movieRouter = require('./routes/movies')
=======
 const movieRouter = require('./routes/movies')
>>>>>>> 562cf409b7df4a5815eca07a1de20d4bdb721270
// const reviewRouter = require('./routes/review')
const userRouter = require('./routes/user')

//creating the express object
const app = express()

//add the middlewares
app.use(cors())
app.use(express.static('images'))
app.use(express.json())
app.use(authorization)

// app.use('/booking', bookingRouter)
// app.use('/category', categoryRouter)
<<<<<<< HEAD
//app.use('/movies', movieRouter)
=======
 app.use('/movies', movieRouter)
>>>>>>> 562cf409b7df4a5815eca07a1de20d4bdb721270
// app.use('/review', reviewRouter)
app.use('/user', userRouter)

//startig the server at port 4000
app.listen(4000, 'localhost', () => {
  console.log('server started at port 4000')
})
