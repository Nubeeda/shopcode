import { useState } from "react";
import Layout from "./Layout";
const Cart = () => {
  const [menu, setMenu] = useState([
    {
      title: "men's shirt",
      amount: 2000,
      discount: 15,
      images: "/products/a.webp",
    },
    {
      title: "men's shirt",
      amount: 2000,
      discount: 15,
      images: "/products/b.webp",
    },
    {
      title: "men's shirt",
      amount: 2000,
      discount: 15,
      images: "/products/c.webp",
    },
    {
      title: "men's shirt",
      amount: 2000,
      discount: 15,
      images: "/products/d.webp",
    },
    {
      title: "men's shirt",
      amount: 2000,
      discount: 15,
      images: "/products/e.webp",
    },
  ]);
  return (
    <Layout>
      <div className="mx-auto md:py-16 bg-white shadow-lg w-4xl p-8">
        <div className="flex gap-2 p-3">
          <i className="ri-shopping-cart-line text-5xl font-semibold "></i>
          <h1 className="text-4xl font-semibold ">Cart</h1>
        </div>
        <hr className="text-gray-300 my-6" />
        <div className="space-y-6">
          {menu.map((item, index) => (
            <div key={index} className="flex gap-3">
              <img
                src={item.images}
                className="w-[100px] border border-gray-200 shadow-2xl"
              />
              <div>
                <h1 className="font-semibold text-lg capitalize">
                  {item.title}
                </h1>
                <div className="flex gap-2">
                  <label className="font-semibold">
                    PKR{item.amount - (item.amount * item.discount) / 100}
                  </label>
                  <del>PKR{item.amount}</del>
                  <label className="text-gray-600">
                    {item.discount}% Discount
                  </label>
                </div>

                <button className="bg-rose-600 text-white rounded w-24 p-1 mt-3 font-semibold">
                  <i className="ri-delete-bin-line mr-2"></i>
                  remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <hr className="text-gray-300 my-6" />
        <div className="flex justify-between">
          <h1 className="font-semibold">Total: PKR50,000</h1>
          <button className="font-semibold py-2 px-6 bg-green-600 text-white hover:bg-rose-600 rounded mr-3">Buy Now</button>
        </div>
      </div>
    </Layout>
  );
};
export default Cart;
