import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import SignUp from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/AdminDashboard";
import ProfileView from "./pages/ProfileView";
import ProfileForm from "./pages/ProfileForm";
import Cources from "./pages/Cources";
import Academy from "./pages/Academy";
import Academy1 from "./pages/Academy1";
import Academy2 from "./pages/Academy2";
import Academy3 from "./pages/Academy3";
import UsersAdmin from "./pages/User";
import CreateAcademy from "./pages/CreateAcademy";
import AddCourse from "./pages/AddCourse";

function App() {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (data) => {
    setSubmittedData(data);
  };

  const handleProfileEdit = () => {
    console.log("Editing profile...");
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/admin" element={<Admin />} />
        <Route
          path="/profile"
          element={
            submittedData ? (
              <ProfileView
                profileData={submittedData}
                onEdit={handleProfileEdit}
              />
            ) : (
              <ProfileForm onSubmit={handleFormSubmit} />
            )
          }
        />
        <Route path="/cources" element={<Cources />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/academy1" element={<Academy1 />} />
        <Route path="/academy2" element={<Academy2 />} />
        <Route path="/academy3" element={<Academy3 />} />
        <Route path="/dashboard/admin/users" element={<UsersAdmin />} />
        <Route
          path="/dashboard/admin/create-academy"
          element={<CreateAcademy />}
        />
        <Route path="/dashboard/admin/add-course" element={<AddCourse />} />
      </Routes>
    </Router>
  );
}

export default App;
