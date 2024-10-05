// import React from 'react'

import { GoArrowDownRight } from "react-icons/go";
import { animated } from '@react-spring/web';
import { useState } from "react";


function SearchBar(props) {

  const [jobCriteria, setJobCriteria] = useState({
    title: "",
    location: "",
  });

  const handleChange = (e) => {
    setJobCriteria((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  console.log(jobCriteria);

  const search = async () => {
    await props.fetchJobsCustom(jobCriteria);
  };

  return (
    <div className="flex gap-8 my-20 px-5">

      {/*  <select
        onChange={handleChange}
        name="title"
        value={jobCriteria.title}
        className="w-60 py-2 pl-3 bg-[#f8f1f3] font-semibold hover:bg-[#efaebb90] hover:brightness-20 transition duration-300 ease-in-out rounded-md border-none hover:shadow-lg hover:shadow-[#51B472]"
      >
        <option value="" disabled hidden>
          ROLE
        </option>
        <option value="Web Development">Web Development</option>
        <option value="App Development">App Development</option>
        <option value="Data Science">Data Science</option>
      </select>
 */}
     
      {/* 
      <select
        onChange={handleChange}
        name="location"
        value={jobCriteria.location}
        className="w-60 py-2 pl-3 bg-[#f8f1f3] font-semibold hover:bg-[#efaebb90] hover:brightness-20 transition duration-300 ease-in-out rounded-md border-none hover:shadow-lg hover:shadow-[#51B472]"
      >
        <option value="" disabled hidden>
          LOCATION
        </option>
        <option value="In-Office">In-Office</option>
        <option value="Remote">Remote</option>
        <option value="Hybrid">Hybrid</option>
      </select> */}
      

      {/* Button */}

      <button
        onClick={search}
        className="flex items-center gap-4 px-4 py-2 text-white bg-[#8fb3928a]/30 rounded-3xl hover:shadow-lg hover:shadow-[#948fb9] transition-all duration-300 ease-in-out"
      >
        APPLY NOW <GoArrowDownRight />
      </button>

    </div>
  );
}

export default SearchBar;
