import ls from '../assets/ls.png'
import dv from '../assets/doctorvector.png'
import plus from '../assets/plus.png'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const Login = () => {

    const { setUser, login } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value;

        const userInfo = { email, password }
        console.log(userInfo)
        login(email, password)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
                navigate('/')

            })
            .catch(error => {
                const errorMessage = error.message.split('/')[1].split(')')[0];
                Swal.fire({
                    icon: "error",
                    title: `<h2 class="uppercase">${errorMessage}</h2>`,
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            });
    }
    return (
        <div className='flex md:flex-row flex-col'>
            <Helmet>
                <title>Login | Doc House</title>
            </Helmet>
            {/* Left Side */}
            <div className='md:w-1/2 w-full'>
                <img className='h-screen w-full' src={ls} alt="" />
                <img className='absolute top-20 left-28 md:w-96 w-80' src={dv} alt="" />
                <img className='absolute top-0 left-80 md:w-80 w-40' src={plus} alt="" />
            </div>
            {/* Right side */}
            <form onSubmit={handleLogin} className='flex flex-col justify-center mx-auto space-y-3 text-black w-full md:w-96 md:shadow-md md:border m-20 px-12'>
                <h1 className='text-center text-2xl font-bold'>Login</h1>
                <label htmlFor="">Email</label>
                <input name="email" type="text" placeholder="Type here" className="input input-bordered w-full md:max-w-xs text-white" />
                <label htmlFor="">Password</label>
                <input name="password" type="text" placeholder="Type here" className="text-white input input-bordered w-full md:max-w-xs" />
                <span className='text-[#F7A582] text-xs hover:underline'><a href="">Forgot Password</a></span>
                <button className='btn btn-outline w-full text-white bg-[#F7A582] border-0 hover:bg-[#ff9e7a]'>Login</button>
                <span>Do Not Have an Account? <Link to="/signup" className='font-bold text-[#F7A582]'>Sign Up</Link></span>
            </form>
        </div>
    );
};

export default Login;