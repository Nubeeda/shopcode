import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebaseAppConfig from "../util/Firebase-config";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
const auth = getAuth(firebaseAppConfig);
const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [session, setSession] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(false);
      }
    });
  }, []);
  const menu = [
    {
      lable: "Home",
      href: "/",
    },
    {
      lable: "Products",
      href: "/product",
    },
    {
      lable: "Category",
      href: "/category",
    },
    {
      lable: "Contact-Us",
      href: "/contacts",
    },
  ];
  const Mobilelink = (href) => {
    setOpen(false);
    navigate(href);
  };
  if (session === null)
    return (
      <div className="bg-slate-100 w-full h-full fixed left-0 top-0 flex justify-center items-center">
        <span className="relative flex size-6">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex size-6 rounded-full bg-sky-500"></span>
        </span>
      </div>
    );
  return (
    <div>
      <nav className="shadow-lg sticky top-0 left-0 w-full bg-white z-[1000]">
        <div className="max-w-7xl w-full mx-auto px-4 md:px-8 flex justify-between items-center">
          <img src="images/logo.jpg" className="w-24 h-24" />
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <i className="ri-menu-3-fill text-2xl"></i>
          </button>

          <ul className="md:flex gap-6 hidden">
            {menu.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className="block text-center w-[90px] py-6 hover:bg-blue-600 hover:text-white"
                >
                  {item.lable}
                </Link>
              </li>
            ))}
            {!session && (
              <>
                <Link
                  to="/login"
                  className="block text-center py-6 w-[90px] hover:bg-blue-600 hover:text-white"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-blue-600 mx-auto my-4 px-8 text-md font-semibold block text-center text-white hover:bg-red-600"
                >
                  SignUp
                </Link>
              </>
            )}

            {session && 
            <button className="mt-4 relative" onClick={()=>setOpenMenu(!openMenu)}>
              <img src="./images/ava.png" className="w-10 h-10 "/>
              {
                openMenu &&
                <div className="animate__animated animate__fadeIn bg-white py-2 w-[140px] top-16 right-0 shadow-xl absolute flex flex-col">
              <Link to={"/profile"} className="p-3 text-left hover:bg-gray-100 cursor-pointer w-full">
              <i className="ri-user-line mr-2"></i>
              Profile</Link>
              <Link to={"/cart"} className="p-3 text-left hover:bg-gray-100 cursor-pointer w-full">
              <i className="ri-shopping-cart-line mr-2"></i>
              Cart</Link>
              <button to={"/Logout"} className="p-3 text-left hover:bg-gray-100 cursor-pointer w-full"
              onClick={()=>signOut(auth)}
              >
              <i className="ri-logout-circle-r-line mr-2"></i>
              Logout</button>
              </div>
              }
              
            </button>
            }
          </ul>
        </div>
      </nav>
      {children}
      {/* footer */}
      <footer className="bg-orange-600 md:py-16 py-8">
        <div className="md:w-7xl mx-auto md:grid grid-cols-4">
          <div>
            <h1 className="text-2xl font-semibold text-white mb-2">
              Website Links
            </h1>
            <ul className="space-y-2 text-slate-100 md:mb-0 mb-8">
              {menu.map((item, index) => (
                <li key={index}>
                  <Link to={item.href}>{item.lable}</Link>
                </li>
              ))}
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">SignUp</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-white md:mb-2 mb-8">
              Follow Us
            </h1>
            <ul className="space-y-3 text-slate-100">
              <li>
                <Link to="/facebook">Facebook</Link>
              </li>
              <li>
                <Link to="/Youtube">Youtube</Link>
              </li>
              <li>
                <Link to="/linkedin">Linkedin</Link>
              </li>
              <li>
                <Link to="/twitter">Twitter</Link>
              </li>
            </ul>
          </div>
          <div className="mr-8">
            <h1 className="text-2xl font-semibold text-white mb-2">
              Brand details
            </h1>
            <p className="text-slate-100 mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              eveniet asperiores ea non itaque cum illo necessitatibus nobis
            </p>
            <img src="images/logo.jpg" className="w-28" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-white md:mb-2 mb-8">
              Contact-Us
            </h1>
            <form className="space-y-4">
              <input
                className="bg-white w-90 p-2 rounded"
                type="text"
                placeholder="Enter Fullname"
              />
              <input
                className="bg-white w-90 p-2 rounded"
                type="email"
                placeholder="Enter email Id"
              />
              <textarea
                className="bg-white w-90 p-2 rounded"
                name="message"
                placeholder="Message"
                rows={3}
              ></textarea>
              <button className="bg-black text-white py-3 px-4 rounded text-lg ">
                Submit
              </button>
            </form>
          </div>
        </div>
      </footer>

      <aside
        className="overflow-hidden md:hidden bg-slate-900 h-full fixed top-0 left-0 z-50"
        style={{
          width: open ? 250 : 0,
          transition: "0.6s",
        }}
      >
        <div className="flex flex-col items-start p-4 gap-6">
          {menu.map((item, index) => (
            <button
              key={index}
              onClick={() => Mobilelink(item.href)}
              className="text-white"
            >
              {item.lable}
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
};
export default Layout;
