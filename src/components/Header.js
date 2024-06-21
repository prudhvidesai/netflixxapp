import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser,removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email} = user;
        dispatch(addUser({uid:uid,email:email}))
        //navigate('/browse')
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
      }
    });
  });
    return (
      <div className="bg-gradient-to-b from-black absolute z-30 w-screen">
        <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" className="w-[220px] " alt="logo-img"/>
      </div>
    );
  };
  
  export default Header;