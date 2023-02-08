import React from "react";

function CardData({ data }) {
  console.log(data);
  return (
    <div className="relative grid grid-cols-1 py-8 bg-light rounded-xl mt-4 shadow-lg shadow-very-dark-gray md:grid-cols-2 lg:grid-cols-4">
      {data.ip !== "0.0.0.0" ? (
        <>
          <div className="py-4">
            <p className="font-bold text-xs tracking-widest text-dark-gray text-center sm:text-lg lg:text-xl">
              IP ADDRESS
            </p>
            <p className="text-center font-bold mt-1   text-very-dark-gray text-xl sm:text-xl lg:py-6 lg:text-3xl">
              {data.ip}
            </p>
          </div>

          <div className="py-4">
            <p className="font-bold text-xs tracking-widest text-dark-gray text-center sm:text-lg lg:text-xl">
              LOCATION
            </p>
            <p className="text-center font-bold mt-1   text-very-dark-gray text-xl sm:text-xl lg:py-6 lg:text-3xl">
              {data.region}, {data.country} {data.postalCode}
            </p>
          </div>

          <div className="py-4">
            <p className="font-bold text-xs tracking-widest text-dark-gray text-center sm:text-lg lg:text-xl">
              TIMEZONE
            </p>
            <p className="text-center font-bold mt-1   text-very-dark-gray text-xl sm:text-xl lg:py-6 lg:text-3xl">
              {data.timezone}
            </p>
          </div>

          <div className="py-4">
            <p className="font-bold text-xs tracking-widest  text-dark-gray text-center sm:text-lg lg:text-xl">
              ISP
            </p>
            <p className="text-center font-bold mt-1   text-very-dark-gray text-xl  sm:text-xl lg:py-6 lg:text-3xl">
              {data.isp}
            </p>
          </div>
        </>
      ) : (
        <div className="absolute bg-light py-24 rounded-xl w-[100%] h-[100%] grid col-span-1 content-center justify-center ">
          <span className="font-extrabold text-sm md:text-lg  lg:text-4xl">
            Please Enter your IP Address
          </span>
        </div>
      )}
    </div>
  );
}

export default CardData;
