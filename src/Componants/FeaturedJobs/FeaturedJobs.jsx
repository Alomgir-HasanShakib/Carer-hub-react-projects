import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch("./data/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div className="text-center mb-24">
        <h2 className="text-5xl font-extrabold text-[#1A1919] mb-4">
          Featured Jobs
        </h2>
        <p className="text-[16px] font-medium text-[#757575]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>

      <div
        className={
          dataLength === jobs.length ? "hidden" : "flex justify-center"
        }
      >
        <button
          className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-extrabold text-xl"
          onClick={() => setDataLength(jobs.length)}
        >
          Show All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
