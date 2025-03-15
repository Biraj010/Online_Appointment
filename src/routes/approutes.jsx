import { Routes, Route } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../components/pages/index";
import Book_Appointment from "../components/pages/book_appointment";
import Consultation from "../components/pages/consultation";
import Login from "../components/auth/login";
import Register from "../components/auth/register";
import ProtectedRoute from "./protected_routes";
import Consult from "../components/pages/consult";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/book-appointment" element={<Book_Appointment />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route
          path="/consult"
          element={
            <ProtectedRoute>
              <Consult />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
