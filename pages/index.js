import { useState, useEffect } from "react";
import Header from "../components/Header";
import Layout from "../components/layout/Layout";
import Map from "../components/Map";

export default function Home({ data }) {
  const [inputValue, setInputValue] = useState({
    tracker: "",
  });

  const { tracker } = inputValue;
  const handleInputChange = ({ target }) => {
    setInputValue({
      ...inputValue.tracker,
      [target.name]: target.value,
    });
  };

  const newData = {
    country: data?.location?.country,
    region: data?.location?.region,
    isp: data?.isp,
    ip: data?.ip,
    timezone: data?.location?.timezone,
    postalCode: data?.postalCode,
  };

  return (
    <>
      <Layout>
        <Header
          tracker={tracker}
          handleInputChange={handleInputChange}
          data={newData}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <Map
          pickupCoordinates={[
            data?.location?.lng || parseFloat("0.0.0.0"),
            data?.location?.lat || parseFloat("0.0.0.0"),
          ]}
        />
      </Layout>
    </>
  );
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async (ctx) => {
  const data = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${
      process.env.API_GEOLOCATION
    }&ipAddress=${ctx.query.tracker || "0.0.0.0"}`
  ); // your fetch function here
  const resp = await data.json();
  return {
    props: {
      data: resp,
    },
  };
};
