import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utilities/Utilities";
import { MdOutlineLocationOn, MdOutlineMonetizationOn } from "react-icons/md";

const AppliedJobs = () => {
  const [appliedJob, setAppliedJob] = useState([]);
  const [filterjobs, setFilterJobs] = useState([]);

  const jobs = useLoaderData();
  useEffect(() => {
    const storedJobId = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobId.includes(job.id));
      setAppliedJob(jobsApplied);
      setFilterJobs(jobsApplied);
    }
  }, []);

  const handaleFilterJob = (filter) => {
    if (filter === "all") {
      setFilterJobs(appliedJob);
    } else if (filter === "remote") {
      const remoteJob = appliedJob.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setFilterJobs(remoteJob);
    } else if (filter === "onsite") {
      const onsiteJob = appliedJob.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setFilterJobs(onsiteJob);
    }
  };

  return (
    <div className="mt-16">
      <div>
        <details className="dropdown mb-16">
          <summary className="m-1 btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
            Filter By
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handaleFilterJob("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handaleFilterJob("onsite")}>
              <a>On Site</a>
            </li>
            <li onClick={() => handaleFilterJob("remote")}>
              <a>Remote</a>
            </li>
          </ul>
        </details>
      </div>
      {filterjobs.map((job) => (
        <div className="card card-side bg-base-100 shadow-xl p-5 mb-5">
          <figure>
            <img src={job.logo} alt="logo" />
          </figure>
          <div className="card-body space-y-3">
            <h2 className="card-title">{job.job_title}</h2>
            <p>{job.company_name}</p>
            <div className="flex text-[16px] font-extrabold gap-3 text-[#9873FF]">
              <div className="border border-[#7E90FE]  px-5 p-2 rounded-sm">
                <p>{job.job_type}</p>
              </div>
              <div className="border border-[#7E90FE]  px-5 p-2 rounded-sm">
                <p>{job.remote_or_onsite}</p>
              </div>
            </div>
            <div className="flex gap-6">
              <p className="font-semibold text-2xl flex items-center text-[#757575]">
                <MdOutlineLocationOn className="text-2xl mr-2" />
                {job.location}
              </p>

              <p className="font-semibold text-2xl flex items-center text-[#757575]">
                <MdOutlineMonetizationOn className="text-2xl mr-2"></MdOutlineMonetizationOn>
                {job.salary}
              </p>
            </div>
            <div className="card-actions justify-end items-center">
              <button className="btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppliedJobs;
