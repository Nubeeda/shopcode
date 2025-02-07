import { useState } from "react";
import {Link, useLocation} from "react-router-dom"
const Layout = ({children}) => {
  const [size, setSize] = useState(280);
  const [mobilesize, setMobileSize] = useState(0);
  const [accountMenu, setAccountMenu] = useState(false);
  
  const location = useLocation()
  const menu = [
    {
      label: 'Dashboard',
      icon: <i className="ri-dashboard-3-line mr-2"></i>,
      link:'/admin/dashboard'
    },
    {
      label: 'Customers',
      icon: <i className="ri-user-line mr-2"></i>,
      link:'/admin/customers'
    },
    {
      label: 'Products',
      icon: <i className="ri-shopping-cart-line mr-2"></i>,
      link:'/admin/products'
    },
    {
      label: 'Orders',
      icon: <i className="ri-shape-2-line mr-2"></i>,
      link:'/admin/order'
    },
    {
      label: 'Payments',
      icon: <i className="ri-refund-2-line mr-2"></i>,
      link:'/admin/payments'
    },
    {
      label: 'Settings',
      icon: <i className="ri-settings-3-line mr-2"></i>,
      link:'/admin/settings'
    },
  ]
  return (
   <>
   {/* Desktop */}
    <div className="md:block hidden">
      <aside
        className="w-70 h-full fixed bg-indigo-700 top-0 left-0 overflow-hidden"
        style={{
          width: size,
          transition: "0.3s",
        }}
      >
        <div className="flex flex-col">
         {
          menu.map((items,index)=>(
            <Link 
            key={index}
            to={items.link}
            className="px-4 py-3 text-gray-50 text-[17.5px] hover:bg-rose-600 w-full hover:text-white"
            style={{
              background:(location.pathname ===items.link) ? '#EC003F' : 'transparent'
            }}
            >
          {items.icon}
          {items.label}
          </Link>
          ))
         }
        </div>
      </aside>
      <section
        className="bg-slate-100 min-h-screen"
        style={{
          marginLeft: size,
          transition: "0.3s",
        }}
      >
        <div>
          <nav className="bg-white p-6 shadow flex justify-between sticky top-0 left-0">
            <div className="flex gap-2">
              <button
                onClick={() => setSize(size === 280 ? 0 : 280)}
                className="bg-gray-50 hover:bg-indigo-600 hover:text-white w-8 h-8 rounded"
              >
                <i className="ri-menu-2-line text-2xl"></i>
              </button>
              <h1 className="text-xl font-semibold text-center">ShopCode</h1>
            </div>
            <div>
              <button>
                <img
                  onClick={() => setAccountMenu(!accountMenu)}
                  src="/images/ava.png"
                  className="h-12 w-12 text-center"
                />
                {accountMenu && (
                  <div className="absolute bg-white top-22 right-6 shadow-lg w-50 p-6">
                    <div>
                      <h1 className="text-lg font-semibold">Nubeeda</h1>
                      <p className="text-gray-400">nubii@gmail.com</p>
                      <div className="bg-gray-200 my-4 h-px" />
                      <button>
                        <i class="ri-logout-circle-r-line mr-2"></i>
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </button>
            </div>
          </nav>
          <div className="p-6">
            {children}
            </div>
        </div>
      </section>
    </div>

    {/* Mobile */}

    <div className="block md:hidden">
      <aside
        className="w-70 h-full fixed bg-indigo-700 top-0 left-0 z-50 overflow-hidden"
        style={{
          width: mobilesize,
          transition: "0.3s",
        }}
      >
        <div className="flex flex-col">
        <button
                className="text-left mx-4 mt-4"
                onClick={() => setMobileSize(mobilesize === 0 ? 280 : 0)}
              >
                <i className="ri-menu-2-line text-xl text-white"></i>
              </button>
         {
          menu.map((items,index)=>(
            <Link 
            key={index}
            to={items.link}
            className="px-4 py-3 text-gray-50 text-[17.5px] hover:bg-rose-600 w-full hover:text-white"
            style={{
              background:(location.pathname ===items.link) ? '#EC003F' : 'transparent'
            }}
            >
          {items.icon}
          {items.label}
          </Link>
          ))
         }
        </div>
      </aside>
      <section
        className="bg-slate-100 min-h-screen"
      >
        <div>
          <nav className="bg-white p-6 shadow flex justify-between sticky top-0 left-0">
            <div className="flex gap-2">
              <button
                onClick={() => setMobileSize(mobilesize === 0 ? 280 : 0)}
                className="bg-gray-50 hover:bg-indigo-600 hover:text-white w-8 h-8 rounded"
              >
                <i className="ri-menu-2-line text-2xl"></i>
              </button>
              <h1 className="text-xl font-semibold text-center">ShopCode</h1>
            </div>
            <div>
              <button>
                <img
                  onClick={() => setAccountMenu(!accountMenu)}
                  src="/images/ava.png"
                  className="h-12 w-12 text-center"
                />
                {accountMenu && (
                  <div className="absolute bg-white top-22 right-6 shadow- w-50 p-6">
                    <div>
                      <h1 className="text-lg font-semibold">Nubeeda</h1>
                      <p className="text-gray-400">nubii@gmail.com</p>
                      <div className="bg-gray-200 my-4 h-px" />
                      <button>
                        <i class="ri-logout-circle-r-line mr-2"></i>
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </button>
            </div>
          </nav>
          <div className="p-6">
            {children}
            </div>
        </div>
      </section>
    </div>
   </>
  );
};
export default Layout;
