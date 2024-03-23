import React from "react";
import Banner from "../HomePageBanner/Banner";
import JobsCategory from "../JobsCategory/JobsCategory";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <div className="mb-16">
      <Banner></Banner>
      <JobsCategory></JobsCategory>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
