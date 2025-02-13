"use client";

import { useState, useEffect } from "react";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setloginError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/"); // Navigate to the home page
    } catch (error) {
      console.error("Error logging in:", error);
      // setloginError(error.message);
    }
  };

  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('images/signup.jpg')" }}
    >
      <div>
        <h2 className="text-white text-center text-5xl font-bold py-12">
          Login
        </h2>
        <form
          onSubmit={handleLogin}
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
          {loginError && <p className="text-red-500">{loginError}</p>}
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
