import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckMail from "./components/CheckMail/CheckMail";
import ContactOfficer from "./Pages/ContactOfficer/ContarctOfficer";
import Contract from "./Pages/Contract/Contract";
import Home from "./Pages/Home/Home";
import ForgotPassword from "./Pages/Login/ForgetPassword";
import Login from "./Pages/Login/Login";
import ResetPassword from "./Pages/Login/ResetPassword";
import ProjectStatus from "./Pages/ProjectStatus/ProjectStatus";
import SiteSurvey from "./Pages/SiteSurvey/SiteSurvey";
import Solution from "./Pages/Solutions/Solution";
import Tracking from "./Pages/Tracking/Tracking";
import UtilityBill from "./Pages/UtilityBill/UtilityBill";
import { GlobalStyled } from "./styles/GlopleStyled";

function App() {
  const { mainUser } = useSelector((state) => state.auth);
  return (
    <>
      <GlobalStyled />
      <ToastContainer />
      <Routes>
        {!mainUser ? (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/*" element={<Navigate to="/" />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/check-email" element={<CheckMail />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />}>
              <Route path="site-survey" element={<SiteSurvey />} />
              <Route path="utility-bill" element={<UtilityBill />} />
              <Route path="solution" element={<Solution />} />
              <Route path="contract" element={<Contract />} />
              <Route path="project-status" element={<ProjectStatus />} />
              <Route path="contact-officer" element={<ContactOfficer />} />
              <Route path="tracking" element={<Tracking />} />
            </Route>
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
