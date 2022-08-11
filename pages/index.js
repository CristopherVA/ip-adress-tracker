import { useState, useEffect } from "react";
import Header from "../components/Header";
import Layout from "../components/layout/Layout";
import Map from '../components/Map'
import useFetch from "../hooks/useFetch";
export default function Home() {

  const [inputValue, setInputValue] = useState({
    tracker: '8.8.8.8'
  })

  const { tracker } = inputValue;

  const handleInputChange = ({ target }) => {
    setInputValue({
      ...inputValue.tracker,
      [target.name]: target.value
    })
  }


  const data = useFetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.API_GEOLOCATION}&ipAddress=${tracker}`)
    
  useEffect(() => {
    const resp = async () => {
      return await resp()
    }
  }, [])

  return (
    <>
      <Layout>
        <Header
          tracker={tracker}
          handleInputChange={handleInputChange}
          data={data}


        />
        <Map data={data} />
      </Layout>
    </>
  )
}