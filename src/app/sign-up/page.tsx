"use client";

import { useState, useEffect } from "react";
import { auth } from "@/firebase/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signUpError, setSignUpError] = useState<string | null>(null);
  const router = useRouter();

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // If user is already logged in, redirect to the homepage
  //       router.push("/");
  //     }
  //   });

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate password confirmation
    if (password !== confirmPassword) {
      setSignUpError("Passwords do not match.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/"); // Navigate to the home page
    } catch (error) {
      console.error("Error signing up:", error);

      if (error instanceof Error) {
        setSignUpError(error.message); // Now TypeScript knows error has a message
      } else {
        setSignUpError("An unexpected error occurred."); // Fallback message
      }
    }
  };

  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('images/signup.jpg')" }}
    >
      <div>
        <h2 className="text-white text-center text-5xl font-bold py-12">
          Sign Up
        </h2>
        <form
          onSubmit={handleSignUp}
          className="flex flex-col justify-center items-center"
        >
          <label>
            <div className="text-white text-sm ml-2">Email</div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="focus:outline-none border rounded-lg h-10 w-96 mb-4 shadow-lg p-3"
            ></input>
          </label>
          <label>
            <div className="text-white text-sm ml-2">Password</div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="focus:outline-none border rounded-lg h-10 w-96 mb-4 shadow-lg p-3"
            ></input>
          </label>
          <label>
            <div className="text-white text-sm ml-2">Confirm Password</div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="focus:outline-none border rounded-lg h-10 w-96 mb-4 shadow-lg p-3"
            ></input>
          </label>
          {signUpError && <p className="text-red-500">{signUpError}</p>}l
          <button
            type="submit"
            className="bg-red-700 text-white rounded-lg px-6 py-1 hover:bg-yellow-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
