// npm install node-fetch@2.0
const fetch = require('node-fetch')

const fetchApi = (async () => {
  try {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()
    console.log(data)
  } catch (error) {
    console.error(error)
  }
})()
