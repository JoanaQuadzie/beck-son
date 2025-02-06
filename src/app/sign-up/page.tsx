"use client";

import { useState, useEffect } from "react";
import { auth } from "@/firebase/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signUpError, setSignUpError] = useState<string | null>(null);
  const router = useRouter();

  // Redirect user if already signed in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/"); // Redirect to home page if user is logged in
      }
    });

    return () => unsubscribe(); // Cleanup function
  }, [router]);

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
    } catch (error: any) {
      console.error("Error signing up:", error);

      if (error.code === "auth/email-already-in-use") {
        setSignUpError("Email already in use. Redirecting to home...");
        setTimeout(() => router.push("/"), 2000); // Redirect to login page after 2 seconds
      } else {
        setSignUpError(error.message || "An unexpected error occurred.");
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
            />
          </label>
          <label>
            <div className="text-white text-sm ml-2">Password</div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="focus:outline-none border rounded-lg h-10 w-96 mb-4 shadow-lg p-3"
            />
          </label>
          <label>
            <div className="text-white text-sm ml-2">Confirm Password</div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="focus:outline-none border rounded-lg h-10 w-96 mb-4 shadow-lg p-3"
            />
          </label>
          {signUpError && <p className="text-red-500">{signUpError}</p>}
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
