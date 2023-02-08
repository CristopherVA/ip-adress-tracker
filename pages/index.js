import { useState, useEffect } from "react";
import Header from "../components/Header";
import Layout from "../components/layout/Layout";
import Map from "../components/Map";
import useFetch from "../hooks/services";
import { useRouter } from "next/router";

export default function Home({ data }) {
  const [inputValue, setInputValue] = useState({
    tracker: "",
  });

  console.log(data);

  const { tracker } = inputValue;

  const handleInputChange = ({ target }) => {
    setInputValue({
      ...inputValue.tracker,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <Layout>
        <Header
          tracker={tracker}
          handleInputChange={handleInputChange}
          data={data}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <Map pickupCoordinates={[18.500994, -69.860448]} />
      </Layout>
    </>
  );
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async (ctx) => {
  // const  data  = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_qmP74fYJs39tqPmmdxqtJVXYbEzSv&ipAddress=8.8.8.8`) // your fetch function here
  // const resp =  await data.json()
  // console.log(resp)
  return {
    props: {
      // data: resp || null
    },
  };
};
