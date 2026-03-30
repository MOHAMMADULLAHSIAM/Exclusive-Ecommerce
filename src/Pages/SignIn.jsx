import React, { useState } from 'react'
import singUpimg from '../assets/singUpimg.png'
import Button from '../Components/Button'
import { NavLink, useNavigate } from 'react-router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { userReducer } from '../Slices/UserSlice';



const SignIN = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    let dispatch = useDispatch()
    const [error,setError]=useState("")
    const auth = getAuth();

   function handleSingin(e) {
  e.preventDefault();

  if (email === "" || password === "") {
    setError("Please enter email and password");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      const user = userCredential.user;

      dispatch(userReducer({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      }));

      navigate('/');

    })
    .catch((error) => {


      if (error.code === "auth/invalid-credential") {
  setError("Invalid email or password");
} else if (error.code === "auth/network-request-failed") {
  setError("Network error");
} else {
  setError("Something went wrong");
}

    });
}

    return (
        <div>
            <div className='flex items-center gap-32 mt-15'>
                <div>
                    <img src={singUpimg} alt="" />
                </div>
                <div className='w-[371px]'>
                    <h2 className='text-4xl font-medium'>Log in to Exclusive</h2>
                    <h6 className='mt-6 mb-12'>Enter your details below</h6>
                    <form action="">
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email or Phone Number' className='pb-2 border-b-2  border-[#7D8184] w-full outline-none my-10' />
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className='pb-2 border-b-2  border-[#7D8184] w-full outline-none ' />
                    </form>
                    <p className='text-[#FF0000] '>{error}</p>
                    <div className='flex items-center justify-between mt-10'>
                        <Button title='Log In' onClick={handleSingin} />
                        <NavLink to='#' className='group hover:text-[#DB4444] duration-100 '>
                            Forget Password?
                        </NavLink>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default SignIN
