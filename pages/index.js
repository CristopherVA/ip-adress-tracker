/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import Layout from "../components/layout/Layout";
import Map from '../components/Map'
import fetchData from '../hooks/services'
import { setIpadress } from "../redux/slices/trackerSlice";
export default function Home() {


  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState({
    tracker: '186.6.57.98'
  })

  const { tracker } = inputValue;

  const handleInputChange = ({ target }) => {
    setInputValue({
      ...inputValue.tracker,
      [target.name]: target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(e)
  }


  return (
    <>
      <Layout>
        <Header
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
        <Map />
      </Layout>
    </>
  )
}

export const getServerSideProps = async (query) => {

  console.log(query)

  // const resp = await fetchData(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.API_GEOLOCATION}&ipAddress=${tracker}`)


  return {
    props:{
      data:null
    }
  }
}