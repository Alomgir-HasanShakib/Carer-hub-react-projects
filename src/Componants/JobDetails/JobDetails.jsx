import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../Utilities/Utilities";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));
  const {
    experiences,
    educational_requirements,
    job_responsibility,
    job_description,
    salary,
    job_title,
    contact_information,
  } = job;

  const handleApplybtn = () => {
    saveJobApplication(parseInt(id));
    toast("Your Application Submit Succesfully");
  };

  return (
    <div className="mt-36 mb-36">
      <div className="mb-36">
        <h2 className="text-5xl font-extrabold text-center">Job Details</h2>
      </div>
      <div className=" grid md:grid-cols-4 gap-4">
        <div className="col-span-3 border p-4">
          <h2 className="text-[#757575] mb-6">
            <span className="text-2xl font-extrabold text-[#1A1919]">
              Job Description:
            </span>{" "}
            {job_description}
          </h2>
          <h2 className="text-[#757575] mb-6">
            <span className="text-2xl font-extrabold text-[#1A1919]">
              Job Responsibility:
            </span>{" "}
            {job_responsibility}
          </h2>
          <h2 className="text-2xl font-extrabold text-[#1A1919] mb-6">
            Educational Qualifications:
          </h2>
          <h2 className="text-[#757575] mb-6"> {educational_requirements}</h2>
          <h2 className="text-2xl font-extrabold text-[#1A1919] mb-2">
            Experience:
          </h2>
          <h2 className="text-[#757575]">{experiences}</h2>
        </div>
        <div className="col-span-1 border bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] p-5 space-y-2">
          <h2 className="text-xl font-extrabold text-[#1A1919]">Job Details</h2>
          <hr />
          <p className="font-medium  text-[#757575] flex items-center">
            <span className="text-[#474747] font-extrabold">Salary :</span>{" "}
            {salary}
          </p>
          <p className="font-medium  text-[#757575]">
            <span className="text-[#474747] font-extrabold">Job Title :</span>{" "}
            {job_title}
          </p>
          <h2 className="text-xl font-extrabold text-[#1A1919]">
            Contact Information
          </h2>
          <hr />
          <p className="font-medium  text-[#757575]">
            <span className="text-[#474747] font-extrabold">Phone : </span>{" "}
            {contact_information.phone}
          </p>
          <p className="font-medium  text-[#757575]">
            <span className="text-[#474747] font-extrabold">Email :</span>{" "}
            {contact_information.email}
          </p>
          <p className="pb-3 font-medium  text-[#757575] flex text-[14px]">
            <span className="text-[#474747] font-extrabold ">Address:</span>
            {contact_information.address}
          </p>
          {/* <Link> */}
          <button
            onClick={handleApplybtn}
            className="btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] w-full"
          >
            Apply
          </button>
          {/* </Link> */}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
