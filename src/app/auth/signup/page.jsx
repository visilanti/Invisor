"use client";
import { useState } from "react";
// import NavbarAuth from "@/components/navigation/auth/navbar_auth";
import SignupPageComponent from "@/components/pages/SignupPageComponent";
import { useRouter } from "next/navigation";
import { handleRegister } from "@/helpers/authHelper";

export default function SignUpPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [passwordMatch, setIsPasswordMatch] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (password !== confirmPassword) {
      setIsPasswordMatch(false);
    } else {
      await handleRegister(email, password);
      router.push("/auth");
    }
    setIsLoading(false);
  };

  return (
    <div className="bg-[#A19171] h-screen">
      {/* <NavbarAuth text="Log in" link="/auth" /> */}
      <SignupPageComponent
        props={{
          email: email,
          password: password,
          confirmPassword: confirmPassword,
          passwordMatch: passwordMatch,
          handleEmailChange: handleEmailChange,
          handlePasswordChange: handlePasswordChange,
          handleConfirmPasswordChange: handleConfirmPasswordChange,
          handleSubmit: handleSubmit,
          isLoading: isLoading,
        }}
      />
    </div>
  );
}
