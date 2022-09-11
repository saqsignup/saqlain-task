import { Route, Routes } from "react-router-dom";
import ErrorPage from "./modules/Errors/ErrorPage";
import Home from "./pages/Homes/Home";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Routing;
