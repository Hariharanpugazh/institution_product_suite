import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormPage from "./staff/pages/FormPage";
import PreviewPage from "./pages/user/PreviewPage";
import ProjectDetailPage from "./pages/user/ProjectDetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/user/RegisterPage";
import StaffDashboard from "../src/staff/pages/staffdashboard";
import StaffViewProject from "../src/staff/pages/StaffViewProject";
import FormingPage from "./pages/superadmin/formingpage";
import SuperadminDashboard from "./pages/superadmin/SuperadminDashboard";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
 

function App() {
    return (
        <Router>
            <Routes>
                {/* User Flow */}
                <Route path="/" element={<PreviewPage />} />
                <Route path="/project/:product_id" element={<ProjectDetailPage />} />

                <Route path="/login" element={<LoginPage />} /> {/* New login route */}
                <Route path="/newuser" element={<RegisterPage />} /> {/* New register route */}

                {/* Staff Flow */}
                <Route path="/:staff_id/staffdashboard" element={<StaffDashboard />} />
                <Route path="/:staff_id/staffviewproject/:product_id" element={<StaffViewProject />} />
                <Route path="/:staff_id/formpage" element={<FormPage />} />

                {/* Super Adminflow*/}
                <Route path="/:staff_id/SuperAdmin" element={<SuperadminDashboard />} />
                {/* <Route path="/SuperAdmin/formpage" element={<FormPage />} /> */}
                <Route path="/formpage" element={<FormingPage />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/ProjectsPage" element={<ProjectsPage /> } />
            </Routes>
        </Router>
    );
}

export default App;
