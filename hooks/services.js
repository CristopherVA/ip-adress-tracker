import axios from 'axios'

const fetchData = (url) => {
   const resp = axios.get(url)
      .then(res => res.data)
      .catch(err => console.log(err))

   return resp
   }

export default fetchData;