import { useState } from "react";
import Layout from "./Layout";
const Orders = () => {
  const [order, setOrder] = useState([
    {
      OrderId: "#edne34",
      CustomerName: "nubeeda",
      Email: "nubii@gmail.com",
      Mobile: "+92 3045678987",
      Product: "infinix",
      Amount: "30,000",
      Date: "18/2/2025 10:14:12",
      Status: "pending",
    },
    {
      OrderId: "#edne34",
      CustomerName: "nubeeda",
      Email: "nubii@gmail.com",
      Mobile: "+92 3045678987",
      Product: "infinix",
      Amount: "30,000",
      Date: "18/2/2025 10:14:12",
      Status: "pending",
    },
    {
      OrderId: "#edne34",
      CustomerName: "nubeeda",
      Email: "nubii@gmail.com",
      Mobile: "+92 3045678987",
      Product: "infinix",
      Amount: "30,000",
      Date: "18/2/2025 10:14:12",
      Status: "pending",
    },
    {
      OrderId: "#edne34",
      CustomerName: "nubeeda",
      Email: "nubii@gmail.com",
      Mobile: "+92 3045678987",
      Product: "infinix",
      Amount: "30,000",
      Date: "18/2/2025 10:14:12",
      Status: "pending",
    },
  ]);

  return (
    <Layout>
      <div>
        <h1 className="text-lg font-semibold">Orders</h1>
        <div className="mt-4">
          <table className="w-full">
            <thead>
              <tr className="bg-rose-600 text-white">
                <th className="p-4">Order Id</th>
                <th>Customer's Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {order.map((item, index) => (
                <tr
                  key={index}
                  className="text-center"
                  style={{
                    background: (index + 1) % 2 === 0 ? "#f3f4f6" : "white",
                  }}
                >
                  <td className="py-4">{item.OrderId}</td>
                  <td className="capitalize">{item.CustomerName}</td>
                  <td>{item.Email}</td>
                  <td>{item.Mobile}</td>
                  <td className="capitalize">{item.Product}</td>
                  <td className="">PKR{item.Amount.toLocaleString()}</td>
                  <td>{item.Date}</td>
                  <td className="capitalize">
                    <select className="border border-gray-200 p-1">
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                      <option value="dispatched">Dispatched</option>
                      <option value="returned">Returned</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};
export default Orders;
