import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {
  const { signInWithGoogle, signInWithTwitter } = use(AuthContext);

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        Swal.fire({
          title: 'Success!',
          text: 'You have logged in successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      }).catch((error: unknown) => {
        console.log(error);
        Swal.fire({
          title: 'Error!',
          text: `Failed to log in with Google. Please try again. ${error}`,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      })
  }

  const handleTwitterLogin = () => {
    signInWithTwitter()
      .then(() => {
        Swal.fire({
          title: 'Success!',
          text: 'You have logged in successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      }).catch((error: unknown) => {
        console.log(error);
        Swal.fire({
          title: 'Error!',
          text: `Failed to log in with Twitter. Please try again. ${error}`,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      })
  }

  return (
    <div className='flex justify-center items-center h-[80vh]'>
      <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-xs border p-4">
        <button className="btn bg-white text-black border-[#e5e5e5] mb-2" type='button' onClick={handleGoogleLogin}>
          <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
          Login with Google
        </button>
        <button type='button' className="btn bg-black text-white border-black" onClick={handleTwitterLogin}>
          <svg aria-label="X logo" width="16" height="12" viewBox="0 0 300 271" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"/></svg>
          Login with X
        </button>

      </fieldset>
    </div>
  );
};

export default Login;