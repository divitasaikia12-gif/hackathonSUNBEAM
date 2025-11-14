const express = require('express')
const cryptoJs = require('crypto-js')
const jwt = require('jsonwebtoken')

const pool = require('../db/db')
const result = require('../utils/result')
const config = require('../utils/config')

const router = express.Router()

router.post('/register', (req, res) => {
  const { first_name, last_name, email, pass, mobile, birth } = req.body
  const encryptedPassword = String(cryptoJs.SHA256(pass))
  const sql = `INSERT INTO users(first_name, last_name, email, pass, mobile, birth) VALUES(?,?,?,?,?,?)`
  pool.query(
    sql,
    [first_name, last_name, email, encryptedPassword, mobile, birth],
    (error, data) => {
      res.send(result.createResult(error, data))
    }
  )
})

router.post('/login', (req, res) => {
  const { email, pass } = req.body
  const encryptedPassword = String(cryptoJs.SHA256(pass))
  const sql = `SELECT * FROM users WHERE email = ? AND pass = ?`
  pool.query(sql, [email, encryptedPassword], (error, data) => {
    if (data) {
      if (data.length != 0) {
        const payload = {
          user_id: data[0].user_id,
        }
        const token = jwt.sign(payload, config.secret)
        const body = {
          token: token,
          first_name: data[0].first_name,
          last_name: data[0].last_name,
        }
        res.send(result.createSuccessResult(body))
      } else res.send(result.createErrorResult('Invalid email or password'))
    } else res.send(result.createErrorResult(error))
  })
})

router.get('/profile', (req, res) => {
  const sql = `SELECT first_name, last_name, mobile, email, birth FROM users WHERE user_id = ?`
  pool.query(sql, [req.headers.user_id], (error, data) => {
    res.send(result.createResult(error, data))
  })
})

router.put('/profile', (req, res) => {
  const { first_name, last_name, email, mobile, birth } = req.body
  const sql = `UPDATE users SET first_name=?, last_name=?, email=?, mobile=?, birth=? WHERE id = ?`
  pool.query(
    sql,
    [first_name, last_name, email, mobile, birth, req.headers.user_id],
    (error, data) => {
      res.send(result.createResult(error, data))
    }
  )
})
module.exports = router
