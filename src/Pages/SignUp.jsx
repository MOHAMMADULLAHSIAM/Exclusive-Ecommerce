import React, { useState } from 'react'
import singUpimg from '../assets/singUpimg.png'
import Button from '../Components/Button'
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from 'react-router';
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, sendEmailVerification, updateProfile, GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { userReducer } from '../Slices/UserSlice';



const SignUp = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassWord] = useState("")
  const auth = getAuth();
  const navigate = useNavigate()
  const provider = new GoogleAuthProvider();
  const [error,setError]=useState("")
  const dispatch=useDispatch()


 function handleSignUp(e) {
  e.preventDefault();

  // Check empty fields
  if (!name || !email || !password) {
    setError("Please fill all fields");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      // Update profile
      updateProfile(auth.currentUser, {
        displayName: name,
      })
        .then(() => {

          // Send email verification
          sendEmailVerification(auth.currentUser)
            .then(() => {
              const user = userCredential.user;
              navigate("/SignIN");
            });

        })
        .catch((error) => {
        });

    })
    .catch((error) => {

      // Firebase already checks if email exists
      if (error.code === "auth/email-already-in-use") {
        setError("This email already exists");
      } else {
   
      }

    });
}


  function handleGoogleSingup() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
       
        const user = result.user;
         navigate('/')
        dispatch(userReducer({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        }))

      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        console.log(error)

        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  return (
    <div>
      <div className='flex items-center gap-32 mt-15'>
        <div>
          <img src={singUpimg} alt="img" />
        </div>
        <div className='w-[371px]'>
          <h2 className='text-4xl font-medium'>Create an account</h2>
          <h6 className='mt-6 mb-12'>Enter your details below</h6>

          <form action="">
            <input
              onChange={(e) => setName(e.target.value)}
              type="name"
              placeholder='Name'
              className='pb-2 border-b-2 border-[#7D8184] w-full outline-none  ' />

            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder='Email or Phone Number'
              className='pb-2 border-b-2  border-[#7D8184] w-full outline-none my-10' />

            <input
              onChange={(e) => setPassWord(e.target.value)}
              type="password"
              placeholder='Password'
              className='pb-2 border-b-2  border-[#7D8184] w-full outline-none ' />
          </form>
          <p className='text-[#FF0000] '>{error}</p>

          <button onClick={handleSignUp} className=' cursor-pointer w-full mt-10 text-[#FAFAFA]  font-medium  md:py-4 py-2 md:px-12 px-8 md:text-[16px] text-sm bg-[#DB4444] rounded-sm text-center'>
            Create Account
          </button>
          <button onClick={handleGoogleSingup} className='mt-4 mb-8 flex items-center gap-3 border-2 cursor-pointer border-[#0000003d] rounded-sm py-4 w-full justify-center'>
            <FcGoogle className='text-lg ' /> Sign up with Google
          </button>
          <div className='w-full text-center'>

            <NavLink to='/SignIN' className='group  w-full text-center'>
              Already have account? <span className='group-hover:underline duration-75 decoration-[#7D8184] 7D8184 underline-offset-[4px]'>Log in</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
