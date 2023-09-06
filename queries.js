require('dotenv').config()

const Pool = require('pg').Pool
const pool = new Pool({
  user: `${process.env.DB_USER}`,
  host: `${process.env.DB_HOST}`,
  database: `${process.env.DB_DATABASE}`,
  password: `${process.env.DB_PASSWORD}`,
  port: `${process.env.DB_PORT}`,
})

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const userLogin = (request, response) => {
  const { email, password } = request.body
  pool.query('SELECT * FROM users WHERE email = $1 and password = $2 limit 1',
    [email, password], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows[0])
  })
}

const createUser = (request, response) => {
  const { name, email, password } = request.body

  pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',
    [name, email, password], (error, result) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with email: ${email}`);
  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

const getCoins = (request, response) => {
  pool.query('SELECT name, id FROM coins ORDER BY name ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const searchCoins = (request, response) => {
  const { from, to } = request.body

  pool.query(
    'SELECT * FROM coins WHERE price >= $1 AND price <= $2 ORDER BY name',
    [from, to],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    }
  )
}

module.exports = {
  getUsers,
  userLogin,
  createUser,
  updateUser,
  deleteUser,
  getCoins,
  searchCoins,
}
