// Connect to Postgres using the node-postgres package

const POOL = require('pg').Pool

const pool = new POOL({
  user: 'me',
  host: 'localhost',
  database: 'favlinks',
  password: '54321',
  port: 5432,
})



const createLink = (reqest, response) => {
  
  const name = request.body.name
  const URL = request.body.url

  if(name && url){
  pool.query(
    'INSERT INTO links (name, url) VALUES ($1, $2)', 
    [name, URL], (error, results)=>{
      if(error){
        throw error
    }
    console.log(results)
    response.status(201).send(`Link added with ID: ${results.insertId}
    `)
  })
}
  else {
    response.status(403).send("Server is expecting data object with name and url parameter")
  }

}

const getLinks = (req, res) => {
  pool.query('SELECT * FROM links ORDER BY id ASC', (error, result) => {
    if (error) {
      throw error
    }
    res.status(200).json(result.rows)
  })
}



module.exports = {
  getLinks, createLink
}
