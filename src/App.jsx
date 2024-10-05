import Navbar from "./components/Navbar"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import JobCard from "./components/JobCard"

import { useEffect, useState } from "react"
import { collection, query, getDocs, orderBy, limit,where } from "firebase/firestore";
import {db} from "./firebase.config"


function App() {

  const [jobs,setJobs] = useState([])
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = async() => {

    setCustomSearch(false)
    const tempjobs = []
    const JobsRef = query(collection(db, "jobs"));
    const q = query(JobsRef, orderBy("postedOn" , "desc"), limit(3));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((job) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());

      tempjobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()

      })
      
      
  });

  setJobs(tempjobs);

  
  }

  const fetchJobsCustom = async(jobCriteria) => {

    setCustomSearch(true)

    const tempjobs = []
    const JobsRef = query(collection(db, "jobs"));
    const q = query(JobsRef, where("title", "==", jobCriteria.title),where("location", "==", jobCriteria.location),orderBy("postedOn" , "desc"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((job) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());

      tempjobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
  });

  setJobs(tempjobs);


  }

  useEffect(() => {
    fetchJobs()}, [])
   

  return (
    <>
    <div className="root gradient-bg"> {/* Apply the background gradient to the entire page */}
      <div className="gradient-container"> {/* Container for the radial gradient */}
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <div>
        <Navbar />
        <Header />
        <SearchBar fetchJobsCustom={fetchJobsCustom} />
        
        {customSearch && (
          <button onClick={fetchJobs} className="flex pl-[1250px] mb-2">
            <p className="bg-[#51B472] px-10 py-2 rounded md text-white">Clear Filters</p>
          </button>
        )}
  
        {jobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
          </div> 
      </div>
  
  </>
  )
}

export default App
