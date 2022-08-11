
const useFetch = async (uri) => {
   const resp = await fetch(uri)
   const data = await resp.json()



   return { data }
}

export default useFetch;