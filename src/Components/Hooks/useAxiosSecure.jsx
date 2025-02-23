import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { logOut } = useContext(AuthContext)
    //***********************************************************step4:
    //step5: see index.js
    // Axios interceptor ensures that every request includes the token
    // Attach the JWT token to requests before they are sent.
    // Handle 401 (Unauthorized) and 403 (Forbidden) errors by logging out theuser and redirecting them to the login page.
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token') //get the tokenfrom local storage
        config.headers.authorization = `Bearer ${token}` //store the token
        return config
    }, function (error) {
        return Promise.reject(error);
    })
    //intercepts 401 and 403
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status
        // console.log(status)
        // for status 401 and 403 logOut the user and navigate to login page
        if (status === 401 || status === 403) {
            await logOut()
            navigate('/login')
        }
        return Promise.reject(error)
    })
    return axiosSecure
};
//***********************************************************step4:



export default useAxiosSecure;