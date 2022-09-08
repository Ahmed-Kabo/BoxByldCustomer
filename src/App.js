import { Route, Routes } from "react-router-dom";
import ContactOfficer from "./Pages/ContactOfficer/ContarctOfficer";
import Contract from "./Pages/Contract/Contract";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import ProjectStatus from "./Pages/ProjectStatus/ProjectStatus";
import SiteSurvey from "./Pages/SiteSurvey/SiteSurvey";
import Solution from "./Pages/Solutions/Solution";
import Tracking from "./Pages/Tracking/Tracking";
import UtilityBill from "./Pages/UtilityBill/UtilityBill";
import { GlobalStyled } from "./styles/GlopleStyled";

function App() {
  return (
    <>
      <GlobalStyled />
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Home />}>
          <Route path="site-survey" element={<SiteSurvey />} />
          <Route path="utility-bill" element={<UtilityBill />} />
          <Route path="solution" element={<Solution />} />
          <Route path="contract" element={<Contract />} />
          <Route path="project-status" element={<ProjectStatus />} />
          <Route path="contact-officer" element={<ContactOfficer />} />
          <Route path="tracking" element={<Tracking />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
