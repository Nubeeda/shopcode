import { useEffect, useState } from "react";
import firebaseAppConfig from "../util/Firebase-config";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import axios from "axios";

const auth = getAuth(firebaseAppConfig);
const Profile = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState(null);
  const [formValue,setFormValue] = useState({
    fullname:"",
    email:"",
    mobile:"",
    address:"",
    city:"",
    state:"",
    country:"",
    postalcode:""
  });
  const [profileImage, setProfileImage] = useState("/images/ava.png");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(false);
        navigate("/login");
      }
    });
  }, []);

  const OnchangeFormvalue=(e)=>{
    const input= e.target;
    const name = input.name;
    const value = input.value;
    setFormValue({
      ...formValue,
      [name] : value
    });
  };

  const setProfilePicture = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "my_project"); // Replace with your Cloudinary upload preset

    try {
      const res = await axios.post("https://api.cloudinary.com/v1_1/dgc6hy3zm/image/upload", formData);
    setProfileImage(res.data.secure_url);
    console.log("Image Uploaded:", res.data.secure_url);

    } catch (error) {
      console.error("Cloudinary upload error:", error.response?.data || error.message);
    }
  };

  return (
    <Layout>
      <div>
        <div className="mx-auto md:py-16 w-5xl shadow-2xl p-8 rounded-md">
          <div className="flex p-6 gap-2 ">
            <i className="ri-user-line text-4xl"></i>
            <h1 className="text-4xl font-semibold">Profile </h1>
          </div>
          <hr className="text-gray-300 my-6 " />
          <div className="mx-auto w-24 h-24 relative mb-6">
            <img src={profileImage} className="w-24 h-24 rounded-full" />
            <input
              type="file"
              accept="image/*"
              className="h-full w-full absolute left-0 top-0 opacity-0"
              onChange={setProfilePicture}
            />
          </div>
          <form className="grid grid-cols-2">
            <div className="flex flex-col">
              <label className="font-semibold mb-2">FullName</label>
              <input
                onChange={OnchangeFormvalue} 
                type="text"
                value={session?.displayName || ""}
                className="border border-gray-300 w-96 rounded p-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold mb-2">Email</label>
              <input
                onChange={OnchangeFormvalue} 
                type="text"
                value="Nubeeda@gmail.com"
                className="border border-gray-300 w-96 rounded p-2"
              />
            </div>
            <div className="flex flex-col my-3">
              <label className="font-semibold mb-2">Mobile</label>
              <input
                onChange={OnchangeFormvalue} 
                name="mobile"
                type="number"
                value={formValue.mobile}
                className="border border-gray-300 w-96 rounded p-2"
              />
            </div>
            <div />
            <div className="flex flex-col my-3 col-span-2">
              <label className="font-semibold mb-2">Area/street/vill</label>
              <input
                onChange={OnchangeFormvalue} 
                name="address"
                type="text"
                value={formValue.address}
                className="border border-gray-300 w-96 rounded p-2"
              />
            </div>
            <div className="flex flex-col my-3">
              <label className="font-semibold mb-2">City</label>
              <input
                onChange={OnchangeFormvalue} 
                name="city"
                type="text"
                value={formValue.city}
                className="border border-gray-300 w-96 rounded p-2"
              />
            </div>
            <div className="flex flex-col my-3">
              <label className="font-semibold mb-2">State</label>
              <input
                onChange={OnchangeFormvalue} 
                name="state"
                type="text"
                value={formValue.state}
                className="border border-gray-300 w-96 rounded p-2"
              />
            </div>
            <div className="flex flex-col my-3">
              <label className="font-semibold mb-2">Country</label>
              <input
                onChange={OnchangeFormvalue} 
                name="country"
                type="text"
                value="Pakistan"
                className="border border-gray-300 w-96 rounded p-2"
              />
            </div>
            <div className="flex flex-col my-3">
              <label className="font-semibold mb-2">PostalCode</label>
              <input
                onChange={OnchangeFormvalue} 
                name="postalcode"
                type="number"
                value={formValue.postalcode}
                className="border border-gray-300 w-96 rounded p-2"
              />
            </div>
            <button className="px-4 py-2 rounded bg-rose-600 text-white w-fit hover:bg-green-600">
              <i className="ri-save-line mr-2"></i>
              Save
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default Profile;
