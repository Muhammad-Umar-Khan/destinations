import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "../shared/components/Navigations/MainHeader.css";
import NewPlace from "../places/pages/NewPlace";
import MainNavigation from "../shared/components/Navigations/MainNavigation";
// import UsersList from "../users/components/usersList";
import Users from "../users/pages/Users";
import UserPlaces from "../places/pages/UserPlaces";
import UpdatePlace from "../places/pages/UpdatePlace";
import Register from "../users/pages/Register";
import Login from "../users/pages/Login";

const NavigationLogic = () => {
  return (
    <Router>
      <MainNavigation />
      <Routes className="main">
        <Route path="/" element={<Users />} />
        <Route path="/:uid/places" element={<UserPlaces />} />
        <Route path="/places/new" element={<NewPlace />} />
        <Route path="/places/:pid" element={<UpdatePlace />} />
        <Route path="/users/auth" element={<Register />} />
        <Route path="/users/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default NavigationLogic;
