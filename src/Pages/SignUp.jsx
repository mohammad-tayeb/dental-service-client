import ls from '../assets/ls.png'
import dv from '../assets/doctorvector.png'
import plus from '../assets/plus.png'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from '../Components/Hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';
const SignUp = () => {

    const { createUser, setUser, updateUserProfile } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const userName = form.userName.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL?.value;
        const userInfo = { name, userName, email, password }
        console.log(userInfo)
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                //update profile
                updateUserProfile({ name, photo: photoURL })
                    .then(() => { console.log('User profile updated'); })
                    .catch((error) => { console.log(error); });
                //update profile

                // send to backend
                axiosSecure.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                    })
                    .then(error => {
                        console.log(error)
                    })
                // send to backend

                setUser(result.user)
                navigate('/')
            })
            .catch(error => {
                console.log(error)
                alert(error)
            })
    }
    return (
        <div className='flex md:flex-row flex-col'>
            <Helmet>
                <title>Sign Up | Doc House</title>
            </Helmet>
            {/* Left Side */}
            <div className='md:w-1/2 w-full'>
                <img className='h-screen w-full' src={ls} alt="" />
                <img className='absolute top-20 left-28 md:w-96 w-80' src={dv} alt="" />
                <img className='absolute top-0 left-80 md:w-80 w-40' src={plus} alt="" />
            </div>
            {/* Right side */}
            <form onSubmit={handleSignUp} className='flex flex-col justify-center mx-auto space-y-1 my-8 text-black w-full md:w-96 md:shadow-md md:border px-12'>
                <h1 className='text-center text-2xl font-bold'>Sign Up</h1>
                <label htmlFor="">Name</label>
                <input required type="text" placeholder="name" name="name" className="input input-bordered w-full md:max-w-xs text-white" />
                <label htmlFor="">User Name</label>
                <input required type="text" placeholder="username" name="userName" className="input input-bordered w-full md:max-w-xs text-white" />
                <label htmlFor="">Email</label>
                <input required type="text" placeholder="email" name="email" className="input input-bordered w-full md:max-w-xs text-white" />
                <label htmlFor="">Password</label>
                <input required type="text" placeholder="password" name="password" className="text-white input input-bordered w-full md:max-w-xs" />
                <span className='text-[#F7A582] text-xs hover:underline'><a href="">Forgot Password</a></span>
                <button className='btn btn-outline w-full text-white bg-[#F7A582] border-0 hover:bg-[#ff9e7a]'>Sign In</button>
                <span className='pb-4'>Already Have an Account? <Link to="/login" className='font-bold text-[#F7A582]'>Login</Link></span>
            </form>
        </div>
    );
};

export default SignUp;