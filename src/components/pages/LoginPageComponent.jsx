"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export default function LoginPageComponent({ props }) {
  const [showPassword, setShowPassword] = useState(false);

  const email = props.email;
  const password = props.password;

  const handleEmailChange = props.handleEmailChange;
  const handlePasswordChange = props.handlePasswordChange;
  const handleSubmit = props.handleSubmit;

  const isLoading = props.isLoading;

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
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
              <input class="pl-2 outline-none border-none" type="email" name="email" id="" required autoComplete="email" value={email} onChange={handleEmailChange} placeholder="Email Address" />
        </div>
              <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd" />
                </svg>
                <input 
                  class="pl-2 outline-none border-none" type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  autoComplete="password"
                  placeholder="Password" />
        </div>
                <button type="submit" disabled={isLoading} class="block w-full bg-[#C24914] mt-4 py-2 rounded-2xl text-white font-semibold mb-2">{isLoading ? "Log in..." : "Log in"}</button>
      </form>
    </div>
    <div
      class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-[#F9E0AE] to-[#DBB261] i justify-around items-center hidden">
      <div>
      <img src="/sidepict.png" alt="Logo" style={{ width: '300px', height: 'auto' }} />
      </div>
    </div>
  </div>
  );
}
