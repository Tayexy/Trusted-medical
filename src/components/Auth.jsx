import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const navigate = useNavigate();

  // SIGN UP
const signUp = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    toast.success("Account created!", {
      style:{
        backgroundColor: "#101828", 
        color: "#ffffff",

      },

    });
    navigate("/");
  } catch (error) {
    let customMessage;

    switch (error.code) {
      case "auth/email-already-in-use":
        customMessage = "This email is already registered. Try signing in instead.";
        break;
      case "auth/invalid-email":
        customMessage = "Please enter a valid email address.";
        break;
      case "auth/weak-password":
        customMessage = "Your password is too weak. Try at least 6 characters.";
        break;
      default:
        customMessage = "Something went wrong. Please try again.";
    }

    toast.error(customMessage);
  }
};

  // sign in with google
  const signInWithGoogle = async () => { 
    const provider = new GoogleAuthProvider(); try 
    { await signInWithPopup(auth, provider);
       toast.success("Signed in with Google!", {
        style:{
        backgroundColor: "#101828",
        color: "#ffffff",

      },

       }); 
       navigate("/"); } 
       catch (error) 
       { toast.error(error.message); } };

  // SIGN IN
  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Signed in!", {
        style:{
        backgroundColor: "#101828",
        color: "#ffffff",

      },  

      });
        navigate("/");
    } catch (error) {
      let customMessage;

      switch (error.code) {
        case "auth/user-not-found":
          customMessage = "No account found with this email.";
          break;
        case "auth/wrong-password":
          customMessage = "Incorrect password. Please try again.";
          break;
        case "auth/invalid-email":
          customMessage = "Please enter a valid email address.";
          break;
        default:
          customMessage = "Something went wrong. Please try again.";
      }
      toast.error(customMessage);
    }
  };

  

  // PASSWORD RESET
  const resetPassword = async () => {
    if (!email) {
      toast.error("Enter your email first");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent!", {
        style:{
        backgroundColor: "#101828",
        color: "#ffffff",

      },

      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
    <div className="signin-container">
    <div className="bg-white rounded-xl p-10 shadow-2xl hover:shadow-lg transition overflow-hidden">
      <h2 className="text-black text-center text-lg font-bold ">Sign Up / Sign In To Your Account</h2>

 <div className="email-input">
                <label htmlFor="email">Email:</label>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>

 <div  className="password-input">
                <label htmlFor="password">Password:</label>
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
        </div>

      <br /><br />

      <div className="button-group">
      <button className="signout-button"onClick={signUp}>Sign Up</button>
      <button className="signin-button"onClick={signIn}>Sign In</button>
      <button  className="google-signin-button"onClick={resetPassword}>Reset Password</button>
      <button className="google-signin-button" onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
    
    </div>
    
    </div>
    </>
  );
}
