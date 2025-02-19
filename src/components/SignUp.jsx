import { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import "animate.css";
import firebaseAppConfig from "../util/Firebase-config";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const auth = getAuth(firebaseAppConfig);

const SignUp = () => {
  const navigate = useNavigate()
  const [passwordType, setPasswordType] = useState("password");
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false)
  const [formValue, setFormValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const handleOnChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    setFormValue({
      ...formValue,
      [name]: value,
    });
    setError(null)
  };
  const signup = async (e) => {
    try {
      e.preventDefault();
      setLoader(true)
       await createUserWithEmailAndPassword(
        auth,
        formValue.email,
        formValue.password
      )
      await updateProfile(auth.currentUser,{displayName:formValue.firstname})
      navigate("/")
    } catch (err) {
      setError("Invalid credentials provided");
    }
    finally{
      setLoader(false)
    }
  };
  return (
    <div className="grid md:grid-cols-2 overflow-hidden md:h-screen animate__animated animate__fadeIn">
      <img
        src="./images/signup.jpg"
        className="md:h-full h-48 object-cover w-full"
      />
      <div className="flex flex-col md:p-16 p-8">
        <h1 className="text-2xl font-semibold">New User</h1>
        <p className="text-gray-500 mt-1">
          Create your account to start shopping
        </p>
        <form className="md:mt-8 space-y-6" onSubmit={signup}>
          <div className="flex flex-col mb-3">
            <label className="font-semibold pb-2">FirstName</label>
            <input
              onChange={handleOnChange}
              required
              name="firstname"
              type="text"
              placeholder="Enter your firstname"
              className="border p-2 border-slate-300 rounded"
            />
          </div>

          <div className="flex flex-col mb-3">
            <label className="font-semibold pb-2">LastName</label>
            <input
              onChange={handleOnChange}
              required
              name="lastname"
              type="text"
              placeholder="Enter your lastname"
              className="border p-2 border-slate-300 rounded"
            />
          </div>

          <div className="flex flex-col mb-2">
            <label className="font-semibold pb-2">Email</label>
            <input
              onChange={handleOnChange}
              required
              name="email"
              type="email"
              placeholder="example@gmail.com"
              className="border p-2 border-slate-300 rounded"
            />
          </div>

          <div className="flex flex-col mb-2 relative">
            <label className="font-semibold pb-2">Password</label>
            <input
              onChange={handleOnChange}
              required
              name="password"
              type={passwordType}
              placeholder="*******"
              className="border p-2 border-slate-300 rounded"
            />
            <button
              onClick={() =>
                setPasswordType(
                  passwordType === "password" ? "text" : "password"
                )
              }
              type="button"
              className="top-10 right-4 absolute hover:bg-blue-50 hover:text-blue-700 h-8 w-8 rounded-full"
            >
              {passwordType === "password" ? (
                <i className="ri-eye-line"></i>
              ) : (
                <i className="ri-eye-off-line"></i>
              )}
            </button>
          </div>
          {
            loader ?
            <h1 className="font-semibold text-xl text-gray-600">Loading...</h1>
            :
            <button className="bg-blue-600 text-white font-semibold w-26 py-3 mb-2 rounded mt-4 hover:bg-rose-600">
            Signup
          </button>
          }
            
        </form>
        <div className="flex">
          <p>Already have an account?</p>
          <Link to="/login" className="text-blue-500 ml-1">
            Login now
          </Link>
        </div>
        {error && (
          <div className="flex justify-between items-center mt-2 p-3 bg-rose-600 text-white font-semibold rounded animate__animated animate__pulse">
            <p>{error}</p>
            <button onClick={()=>setError(null)}>
            <i className="ri-close-line"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default SignUp;
