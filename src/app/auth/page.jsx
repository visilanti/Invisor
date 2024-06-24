"use client";
// import NavbarAuth from "@/components/navigation/auth/navbar_auth";
import LoginPageComponent from "@/components/pages/LoginPageComponent";
import { handleLogin } from "@/helpers/authHelper";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (await handleLogin(email, password)) {
        router.push("/dashboard");
      } else {
        setLoginError("Email or password is incorrect.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoginError("An error occurred during login. Please try again later.");
    }
    setIsLoading(false);
  };

  const handleCloseModal = () => {
    setLoginError("");
  };

  return (
    <div className="bg-[#A19171] h-screen">
      {/* <NavbarAuth text="Sign Up" link="/auth/signup" /> */}
      <LoginPageComponent
        props={{
          email: email,
          password: password,
          handleEmailChange: handleEmailChange,
          handlePasswordChange: handlePasswordChange,
          handleSubmit: handleSubmit,
          isLoading: isLoading,
        }}
      />
      {loginError && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-md">
            <p className="text-center text-red-500">{loginError}</p>
            <button className="block mx-auto mt-4 bg-red-500 text-white px-4 py-2 rounded-md" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
