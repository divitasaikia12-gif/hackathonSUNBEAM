const express = require('express')
const pool = require('../db/db')
const result = require('../utils/result')
const router = express.Router()
<<<<<<< HEAD
const multer = require('multer')
const upload = multer({ dest: 'images' })

router.post('/', upload.single('photo'), (req, res) => {
  const {
    categoryId,
    title,
    details,
    address,
    contactNo,
    ownerName,
    isLakeView,
    isTV,
    isAC,
    isWifi,
    isMiniBar,
    isBreakfast,
    isParking,
    guests,
    bedrooms,
    beds,
    bathrooms,
    rent,
  } = req.body

  console.log(req.body)

  const sql = `
    INSERT INTO property (
        categoryId, title,details, address, contactNo, ownerName, isLakeView,
        isTV, isAC, isWifi, isMiniBar, isBreakfast, isParking, guests,
        bedrooms, beds, bathrooms, rent, profileImage, userId
    ) VALUES (
        ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, ?
    )`

  pool.query(
    sql,
    [
      categoryId,
      title,
      details,
      address,
      contactNo,
      ownerName,
      isLakeView,
      isTV,
      isAC,
      isWifi,
      isMiniBar,
      isBreakfast,
      isParking,
      guests,
      bedrooms,
      beds,
      bathrooms,
      rent,
      req.file.filename,
      req.userId,
    ],
    (error, data) => {
      console.log(error)
      res.send(result.createResult(error, data))
    }
  )
})

router.get('/', (req, res) => {
  const sql = `SELECT id,title,details,rent,profileImage, beds, bathrooms FROM property`
=======
//const multer = require('multer')
//const upload = multer({ dest: 'images' })

// router.post('/', (req, res) => {
//   const {
//     categoryId,
//     title,
//     details,
//     address,
//     contactNo,
//     ownerName,
//     isLakeView,
//     isTV,
//     isAC,
//     isWifi,
//     isMiniBar,
//     isBreakfast,
//     isParking,
//     guests,
//     bedrooms,
//     beds,
//     bathrooms,
//     rent,
//   } = req.body

//   console.log(req.body)

//   const sql = `
//     INSERT INTO property (
//         categoryId, title,details, address, contactNo, ownerName, isLakeView,
//         isTV, isAC, isWifi, isMiniBar, isBreakfast, isParking, guests,
//         bedrooms, beds, bathrooms, rent, profileImage, userId
//     ) VALUES (
//         ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, ?
//     )`

//   pool.query(
//     sql,
//     [
//       categoryId,
//       title,
//       details,
//       address,
//       contactNo,
//       ownerName,
//       isLakeView,
//       isTV,
//       isAC,
//       isWifi,
//       isMiniBar,
//       isBreakfast,
//       isParking,
//       guests,
//       bedrooms,
//       beds,
//       bathrooms,
//       rent,
//       req.file.filename,
//       req.userId,
//     ],
//     (error, data) => {
//       console.log(error)
//       res.send(result.createResult(error, data))
//     }
//   )
// })

router.get('/movies', (req, res) => {
  const sql = `SELECT title,release_date FROM movies`
>>>>>>> 562cf409b7df4a5815eca07a1de20d4bdb721270
  pool.query(sql, (error, data) => {
    res.send(result.createResult(error, data))
  })
})

<<<<<<< HEAD
router.get('/details/:id', (request, res) => {
  const { id } = request.params

  const sql = `SELECT * FROM property where id = ?`
  pool.query(sql, [id], (error, data) => {
    res.send(result.createResult(error, data))
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  console.log(`id = ${id}`)

  const sql = `DELETE FROM property where id = ?`
  pool.query(sql, [id], (error, data) => {
    res.send(result.createResult(error, data))
  })
})
=======
// router.get('/details/:id', (request, res) => {
//   const { id } = request.params

//   const sql = `SELECT * FROM property where id = ?`
//   pool.query(sql, [id], (error, data) => {
//     res.send(result.createResult(error, data))
//   })
// })

// router.delete('/:id', (req, res) => {
//   const { id } = req.params
//   console.log(`id = ${id}`)

//   const sql = `DELETE FROM property where id = ?`
//   pool.query(sql, [id], (error, data) => {
//     res.send(result.createResult(error, data))
//   })
// })
>>>>>>> 562cf409b7df4a5815eca07a1de20d4bdb721270

module.exports = router
