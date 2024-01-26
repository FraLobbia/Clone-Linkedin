import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/dist/css/style.min.css";
import MyNavbar from "./components/MyNavbar";
import Profile from "./components/profilePage/Profile";
import HomePage from "./components/HomePage/Homepage";
import JobsPage from "./components/JobsPage/JobsPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MyNavbar>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile/me" element={<Profile />} />
            <Route path="/JobsPage/" element={<JobsPage />} />
          </Routes>
        </MyNavbar>
      </BrowserRouter>
    </div>
  );
}

export default App;
