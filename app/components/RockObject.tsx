"use client";

import Link from "next/link";
import { useState } from "react";
import CloseApproachData from "./CloseApproachData";
import { set } from "date-fns";
import { Viewport } from "next/dist/lib/metadata/types/extra-types";

// export const viewport: Viewport = {
//   viewportFit: 'auto'
// }

//these components are slightly different cause the api sends different data

export default function RockObject({
  rock,
  id,
  is_potentially_hazardous_asteroid,
  name_limited,
  nasa_jpl_url,
  close_approach_data,
  links,
  orbital_data,
  estimated_diameter,
}: {
  rock: object;
  id: number;
  is_potentially_hazardous_asteroid: boolean;
  name_limited: string;
  nasa_jpl_url: string;
  close_approach_data: any;
  links: object;
  orbital_data: any;
  estimated_diameter: any;
}) {
  // console.log(estimated_diameter)
  //console.log(destructCloseApproach)
  const [showApproach, setShowApproach] = useState(false);

  const [showInfo, setShowInfo] = useState(false);

  // const [showMore, setShowMore]

  const approachDate = showApproach
    ? close_approach_data.slice(5, 11).map((close: any, i: number) => (
        <div key={i} className="min-w-[23rem]">
          <CloseApproachData {...close} key={close.close_approach_date_full} />
        </div>
      ))
    : close_approach_data.slice(5, 7).map((close: any) => (
        // <div className="min-w-[23rem]">

        <CloseApproachData {...close} key={close.close_approach_date_full} />
        //  </div>
      ));

  const detailsJsx = (
    <>
      <p className=" text-xl sm:text-2xl font-bold mb-2">Details: </p>

      <div className="md:grid grid-rows-2 mb-2  w-full  gap-2 pb-2  ">
        <div className="md:grid grid-cols-2 w-full">
          <p className="sm:text-xl font-semibold">
            First observation: {orbital_data.first_observation_date}
          </p>

          <p className="sm:text-xl font-semibold">
            Last observation: {orbital_data.last_observation_date}
          </p>
        </div>

        <p className="sm:text-xl font-semibold">
          orbit uncertainty: {orbital_data.orbit_uncertainty}
        </p>
      </div>
    </>
  );

  const estJsx = (
    <>
      <p className="text-xl sm:text-2xl  mb-2 font-bold">
        Estimated Diameter:{" "}
      </p>

      <div className="md:grid grid-cols-2">
        <div className=" pb-4 ">
          <h1 className="text-xl sm:text-2xl  font-semibold ">Miles:</h1>
          <p className="sm:text-xl font-semibold">
            min size:{" "}
            {estimated_diameter.miles.estimated_diameter_min.toFixed(3)}
          </p>

          <p className="sm:text-xl font-semibold">
            max size:{" "}
            {estimated_diameter.miles.estimated_diameter_max.toFixed(3)}
          </p>
        </div>

        <div className="pb-4  ">
          <h1 className="text-xl sm:text-2xl  font-semibold">Kilometers:</h1>

          <p className="sm:text-xl font-semibold">
            min size:{" "}
            {estimated_diameter.kilometers.estimated_diameter_min.toFixed(3)}
          </p>

          <p className="sm:text-xl font-semibold">
            max size:{" "}
            {estimated_diameter.kilometers.estimated_diameter_max.toFixed(3)}
          </p>
        </div>
      </div>
    </>
  );

  return (
    <div className=" mx-auto mb-2 p-5 text-center w-full text-lg bg-gray-200  border border-red-500 border-x-2 border-y-2 rounded-2xl  max-w-4xl ">
      <div className="inline-flex ">
        <h2 className=" underline text-purple-800 text-2xl sm:text-3xl p-3">
          Name: {name_limited}
        </h2>

        <Link
          className=" text-lg sm:text-2xl  text-end hover:text-orange-400"
          href={`/rocktheone/${id}`}
        >
          ID: {id}
        </Link>
      </div>

      {is_potentially_hazardous_asteroid ? (
        <p className=" text-xl sm:text-2xl mb-2 font-semibold">
          This asteroid is Potentially Dangerous
        </p>
      ) : (
        <p className="text-xl sm:text-2xl mb-2 font-semibold ">
          This asteroid is not dangerous
        </p>
      )}

      <div className={` transition-all ${showInfo ? "block" : "hidden"}`}>
        <div className="outline outline-1 rounded-sm mb-4 mr-3 ml-3 p-1">
          {detailsJsx}
        </div>

        <div className="outline outline-1 rounded-sm mx-3 p-1">{estJsx}</div>

        <div className="">
          {/* <ul className="grid grid-cols-1 md:grid-cols-2   rounded-lg mb-3 mt-3 p-1 gap-2">
          {approachDate}
        </ul> */}
          <div className=" ">
            <ul className=" rounded-lg mb-3 mt-3 p-1 gap-2  grid  grid-flow-col overflow-auto ">
              {approachDate}
            </ul>
          </div>

          <button
            className=" hover:text-gray-400"
            type="button"
            onClick={() => setShowApproach(!showApproach)}
          >
            {!showApproach ? "Show more" : "Show less"}
          </button>
        </div>
      </div>

      {/* <div className={` transition-all flex ${showInfo ? " justify-end" : "justify-center"}`}>
        <button
          className={` transition-all ${showInfo ? " justify-center   " : " justify-end"}`}
          onClick={() => setShowInfo(!showInfo)}
        >
          V
        </button>

        
      </div> */}
      <div className="h-full w-full">
        <div className={` transition-all relative  ${showInfo ? "" : ""} `}>
          <button
            className={` transition-all duration-500 text-xl font-bold  absolute ${
              showInfo ? " right-0 -top-3 hover:text-slate-400 " : "-top-3 right-0 hover:text-white"
            }`}
            onClick={() => setShowInfo(!showInfo)}
          >
            V
          </button>
        </div>
      </div>
    </div>
  );
}

{
  /* <button data-dropdown-toggle='dropdown' className='text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' type='button'>Show when asteroid</button> */
}
