import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { useAuth } from "@/firebase/authContext";

const SignOut = () => {
  const { user } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (!user) {
    return null; // Don't display the sign out button if the user is not logged in
  }

  return (
    <button
      onClick={handleSignOut}
      className="p-2 rounded-sm bg-red-500 font-semibold text-white"
    >
      Sign Out
    </button>
  );
};

export default SignOut;
