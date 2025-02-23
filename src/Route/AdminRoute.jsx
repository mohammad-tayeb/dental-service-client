import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import useAdmin from "../Components/Hooks/useAdmin";

const AdminRoute = ({ children }) => {
const { user, loading } = useContext(AuthContext)
const [isAdmin, isAdminLoading] = useAdmin()
const location = useLocation();
if (loading || isAdminLoading) {
return <div className="flex justify-center items-center hscreen"><span className="loading loading-spinner text-warning"></span></div>
}
if (user && isAdmin) {
return children
}
return <Navigate state={location.pathname} to="/"></Navigate>
};
export default AdminRoute;
