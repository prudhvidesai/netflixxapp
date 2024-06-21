import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validtion";

const Login = () => {
  const [signinStatus, setSigninStatus] = useState(true);

  const [errMsg, setErrMsg] = useState(null);

  const email = useRef();

  const password = useRef();

  //const dispatch = useDispatch();

  const toggleSignin = () => {
    setSigninStatus(!signinStatus);
  };

  const handleSignInBtn = () => {
    const resMsg = checkValidation(email.current.value, password.current.value);
    console.log(resMsg);
    setErrMsg(resMsg);
    if (resMsg) return;

    // if (!signinStatus) {
    //   createUserWithEmailAndPassword(
    //     auth,
    //     email.current.value,
    //     password.current.value
    //   )
    //     .then((userCredential) => {
    //       // Signed up
    //       const user = userCredential.user;
    //       //console.log(user.userImpl.accessToken);
    //       // ...
    //       console.log(user);
    //       //const { uid, email } = user;
    //       //dispatch(addUser({ uid: uid, email: email }));
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       // ..

    //       setErrMsg(errorCode + "-" + errorMessage);
    //     });
    // } else {
    //   signInWithEmailAndPassword(
    //     auth,
    //     email.current.value,
    //     password.current.value
    //   )
    //     .then((userCredential) => {
    //       // Signed in
    //       const user = userCredential.user;

    //       //console.log(user.accessToken);
    //       console.log(user);
    //       //const { uid, email } = user;
    //       //dispatch(addUser({ uid: uid, email: email }));

    //       // ...
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       setErrMsg(errorCode + "-" + errorMessage);
    //     });
    // }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 bg-black absolute p-12 my-36 mx-auto right-0 left-0 bg-opacity-85 rounded-lg flex flex-col justify-center"
      >
        <h1 className="font-bold text-white m-2">
          {signinStatus ? "Sign In" : "Sign Up"}
        </h1>
        {!signinStatus && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 h-[35px] text-white bg-slate-600  text-md w-60% m-2  border border-gray-500"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Enter Email"
          className="p-2 h-[35px] text-white bg-slate-600 text-sm w-60% m-2   border border-gray-500"
        />
        {/* <p className="text-bold text-red-600 text-lg m-2">{errMsg}</p> */}
        <input
          type="password"
          ref={password}
          placeholder="Enter Password"
          className="p-2 text-white bg-slate-600 text-sm w-60% h-[35px] m-2  border  border-gray-500"
        />
        <p className="text-bold text-red-600 text-lg m-2">{errMsg}</p>
        <button
          onClick={handleSignInBtn}
          className="bg-red-800 w-60% h-[35px] p-2 m-2 text-white text-sm rounded-lg"
        >
          {signinStatus ? "Sign In" : "Sign Up"}
        </button>
        <span className="text-sm m-2 text-gray-500">
          {signinStatus ? "New to Netflix?" : "Already User?"}
          <span
            className="text-sm text-gray-200 cursor-pointer"
            onClick={toggleSignin}
          >
            {signinStatus ? "Sign up now." : "Sign in now."}
          </span>
        </span>
      </form>
    </div>
  );
};

export default Login;
