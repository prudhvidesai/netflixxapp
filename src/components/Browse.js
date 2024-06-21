import React from "react";
import Header from "./Header";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../utils/firebase";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { addUser, removeUser } from "../utils/userSlice";
// import { useEffect } from "react";
import {signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSignout = ()=>{
    


signOut(auth).then(() => {
  // Sign-out successful.
  dispatch(removeUser())
  navigate('/')
}).catch((error) => {
  // An error happened.
  navigate('/error')
});
  }
  
  return (
    <div className="z-30 flex justify-between">
        
      <Header/>
      
       
    
    
    
    <button className="z-30 p-2 w-[90px] bg-red-500 text-white rounded-lg ml-[1300px] mt-[25px]" onClick={handleSignout}>Sign Out</button>
    
    </div>
    
   
  );
};

export default Browse;
