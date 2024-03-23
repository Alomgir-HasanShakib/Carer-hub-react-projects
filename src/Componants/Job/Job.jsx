import { MdOutlineLocationOn, MdOutlineMonetizationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card bg-base-100 shadow-xl border border-[#7E90FE33]">
      <div className="ml-6 mt-6">
        <img src={logo} alt="Shoes" />
      </div>

      <div className="card-body space-y-3">
        <h2 className="card-title font-extrabold text-2xl text-[#474747]">
          {job_title}
        </h2>
        <p className="text-xl font-semibold text-[#757575]">{company_name}</p>
        <div className="flex text-[16px] font-extrabold gap-3 text-[#9873FF]">
          <div className="border border-[#7E90FE]  px-5 p-2 rounded-sm">
            <p>{job_type}</p>
          </div>
          <div className="border border-[#7E90FE]  px-5 p-2 rounded-sm">
            <p>{remote_or_onsite}</p>
          </div>
        </div>
        <div className="flex gap-6">
          <p className="font-semibold text-2xl flex items-center text-[#757575]">
            <MdOutlineLocationOn className="text-2xl mr-2" />
            {location}
          </p>

          <p className="font-semibold text-2xl flex items-center text-[#757575]">
            <MdOutlineMonetizationOn className="text-2xl mr-2"></MdOutlineMonetizationOn>
            {salary}
          </p>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
            <button className="btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
