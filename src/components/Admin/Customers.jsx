import { useState } from "react";
import Layout from "./Layout";
const Customer = () => {
  const [customers, setCustomers] = useState([
    {
      CustomerName: "nubeeda",
      Email: "nubii@gmail.com",
      Mobile: "+92 3045678987",
      Date: "18/2/2025 10:14:12 Am",
    },
    {
        CustomerName: "nubeeda",
        Email: "nubii@gmail.com",
        Mobile: "+92 3045678987",
        Date: "18/2/2025 10:14:12 Am",
      },
      {
        CustomerName: "nubeeda",
        Email: "nubii@gmail.com",
        Mobile: "+92 3045678987",
        Date: "18/2/2025 10:14:12 Am",
      },
      {
        CustomerName: "nubeeda",
        Email: "nubii@gmail.com",
        Mobile: "+92 3045678987",
        Date: "18/2/2025 10:14:12 Am",
      },
      {
        CustomerName: "nubeeda",
        Email: "nubii@gmail.com",
        Mobile: "+92 3045678987",
        Date: "18/2/2025 10:14:12 Am",
      },
      {
        CustomerName: "nubeeda",
        Email: "nubii@gmail.com",
        Mobile: "+92 3045678987",
        Date: "18/2/2025 10:14:12 Am",
      },
  ]);

  return (
    <Layout>
      <div>
        <h1 className="text-lg font-semibold">Customers</h1>
        <div className="mt-4">
          <table className="w-full">
            <thead>
              <tr className="bg-rose-600 text-white text-left">
                <th className="p-4">Customer's Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((item, index) => (
                <tr
                  key={index}
                  style={{
                    background: (index + 1) % 2 === 0 ? "#f3f4f6" : "white",
                  }}
                >
                  <td className="capitalize py-3 px-4">
                    <div className="flex gap-3 items-center">
                      <img src="/images/ava.png" className="w-10 h-10" />
                      <div>
                        <span className="font-semibold">
                        {item.CustomerName}
                        </span>
                        <td className="text-gray-400">{item.Date}</td>
                      </div>
                    </div>
                  </td>
                  <td>{item.Email}</td>
                  <td>{item.Mobile}</td>
                  <td>{item.Date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};
export default Customer;
