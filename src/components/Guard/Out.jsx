import { useEffect, useState } from "react";
import firebaseAppConfig from "../../util/Firebase-config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Outlet, Navigate } from "react-router-dom";

const Out = () => {
  const [session, setSession] = useState(null);
  const auth = getAuth(firebaseAppConfig); // Initialize inside component

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(false);
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  if (session === null)
    return (
      <div className="bg-slate-100 w-full h-full fixed left-0 top-0 flex justify-center items-center">
        <span className="relative flex size-6">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex size-6 rounded-full bg-sky-500"></span>
        </span>
      </div>
    );

  if (session) return <Navigate to={"/"} replace />;

  return <Outlet />;
};

export default Out;
