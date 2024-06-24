"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export default function SignupPageComponent({ props }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const email = props.email;
  const password = props.password;
  const confirmPassword = props.confirmPassword;

  const handleEmailChange = props.handleEmailChange;
  const handlePasswordChange = props.handlePasswordChange;
  const handleConfirmPasswordChange = props.handleConfirmPasswordChange;
  const handleSubmit = props.handleSubmit;

  const passwordMatch = props.passwordMatch;

  const isLoading = props.isLoading;

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };
  return (

  <div class="h-screen md:flex">
        <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form onSubmit={handleSubmit} class="bg-white">
          <h1 class="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
          <p class="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
              <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input class="pl-2 outline-none border-none" type="email" name="email" required autoComplete="email" value={email} onChange={handleEmailChange} placeholder="Email" />
          </div>
                <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd" />
                  </svg>
                  <input 
                    class="pl-2 outline-none border-none"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    autoComplete="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Password"
                  />
          </div>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd" />
                  </svg>
                  <input class="pl-2 outline-none border-none" 
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmpassword"
                    required
                    autoComplete="confirmpassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    placeholder=" Confirm Password" />
          </div>
          <button type="submit" disabled={isLoading} class="block w-full bg-[#C24914] mt-4 py-2 rounded-2xl text-white font-semibold mb-2">{isLoading ? "Sign Up..." : "Sign Up"}</button>
        </form>
      </div>
      <div
        class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-[#F9E0AE] to-[#DBB261] i justify-around items-center hidden">
        <div>
        <img src="/sidepict.png" alt="Logo" style={{ width: '300px', height: 'auto' }} />
        </div>
      </div>
    </div>

    // <div className="flex justify-center md:py-32 lg:py-0">
    //   <div className="flex flex-row gap-24">
    //     <div className="flex flex-col items-center justify-center">
    //       <div className="text-center bg-varians-vr06 py-10 px-[12%] md:px-16 rounded-3xl">
    //         <p className="font-bold text-4xl">Sign Up</p>
    //         <p className="w-[270px] py-3 text-md">Hey, Enter your details to sign up to your account</p>
    //         <form onSubmit={handleSubmit} className="flex flex-col">
    //           <input className="p-2 mt-3 rounded-lg border border-black text-xs" type="email" name="email" required autoComplete="email" value={email} onChange={handleEmailChange} placeholder="Email" />
    //           <div className="relative mt-3">
    //             <input
    //               className="p-2 pr-10 rounded-lg border w-full border-black text-xs"
    //               type={showPassword ? "text" : "password"}
    //               name="password"
    //               required
    //               autoComplete="password"
    //               value={password}
    //               onChange={handlePasswordChange}
    //               placeholder="Password"
    //             />
    //             <div className="absolute inset-y-0 right-0 flex items-center pr-3">
    //               {showPassword ? (
    //                 <div onClick={togglePasswordVisibility} className="text-xs cursor-pointer">
    //                   Hide
    //                 </div>
    //               ) : (
    //                 <div onClick={togglePasswordVisibility} className="text-xs cursor-pointer">
    //                   Show
    //                 </div>
    //               )}
    //             </div>
    //           </div>
    //           <div className="relative mt-3">
    //             <input
    //               className="p-2 pr-10 rounded-lg border w-full border-black text-xs"
    //               type={showConfirmPassword ? "text" : "password"}
    //               name="confirmpassword"
    //               required
    //               autoComplete="confirmpassword"
    //               value={confirmPassword}
    //               onChange={handleConfirmPasswordChange}
    //               placeholder=" Confirm Password"
    //             />
    //             <div className="absolute inset-y-0 right-0 flex items-center pr-3">
    //               {showConfirmPassword ? (
    //                 <div onClick={toggleConfirmPasswordVisibility} className="text-xs cursor-pointer">
    //                   Hide
    //                 </div>
    //               ) : (
    //                 <div onClick={toggleConfirmPasswordVisibility} className="text-xs cursor-pointer">
    //                   Show
    //                 </div>
    //               )}
    //             </div>
    //           </div>
    //           {!passwordMatch && <p className="text-red-500 text-xs mt-1">Password and confirm password must match.</p>}
    //           <div className="py-3 flex justify-start">
    //             <p className="text-[10px]">
    //               Already have an account?
    //               <Link href="/auth" className="font-bold">
    //                 Login Now!
    //               </Link>
    //             </p>
    //           </div>
    //           <div className="pt-4">
    //             <button type="submit" disabled={isLoading} className="py-2 bg-[#C24914] text-varians-vr06 font-bold w-full rounded-md hover:scale-105">
    //               {isLoading ? "Sign Up..." : "Sign Up"}
    //             </button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //     <Image src="/header_pict2.png" width={500} height={400} alt="Background" className="w-auto hidden lg:block" priority />
    //   </div>
    // </div>
  );
}
