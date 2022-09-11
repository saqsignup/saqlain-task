import { Link } from "react-router-dom";
import { errorDiv, errorMainDiv, main } from "../../Styles/Error/error";

const ErrorPage = () => {
  return (
    <main className={main}>
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-5">
        <div className={errorMainDiv}>
          <span className={errorDiv}></span>

          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            <Link to="/">Go Home</Link>
          </span>
        </div>
      </button>
    </main>
  );
};

export default ErrorPage;
