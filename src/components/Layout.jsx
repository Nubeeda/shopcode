import { Link } from "react-router-dom";
const Layout = ({children}) => {
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
  return (
    <div>
      <nav className="shadow-lg sticky top-0 left-0 bg-white">
        <div className="w-7xl mx-auto flex justify-between items-center">
          <img src="images/logo.jpg" className="w-24 h-24" />
          <ul className="flex gap-6">
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
            className="bg-white w-96 p-2 rounded" 
            type="text" 
            placeholder="Enter Fullname" 
            />
            <input
            className="bg-white w-96 p-2 rounded" 
            type="email" 
            placeholder="Enter email Id" 
            />
            <textarea 
            className="bg-white w-96 p-2 rounded" 
            name="message"
            placeholder="Message"
            rows={3} 
            >
            </textarea>
            <button className="bg-black text-white py-3 px-4 rounded text-lg ">Submit</button>
           </form>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Layout;
