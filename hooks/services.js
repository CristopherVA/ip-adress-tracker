import axios from 'axios'

const fetchData = async (url) => {
   const resp = await fetch(url)
   const data =  resp.json()
   console.log(data)
   return data
}  

export default fetchData;