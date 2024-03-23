import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container mx-auto">
      <h2>Opps !! This is error page</h2>
      <Link to="/">
        <button className="btn-primary btn">Go Back Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
