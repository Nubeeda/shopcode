import { useState } from "react";
import Layout from "./Layout";
const Payments = () => {
  const [payments, setPayments] = useState([
    {
      CustomerName: "nubeeda",
      Email: "nubii@gmail.com",
      Mobile: "+92 3045678987",
      amount: 5000,
      Date: "18/2/2025 10:14:12 Am",
    },
    {
        CustomerName: "nubeeda",
        Email: "nubii@gmail.com",
        Mobile: "+92 3045678987",
        amount: 5000,
        Date: "18/2/2025 10:14:12 Am",
      },
      {
        CustomerName: "nubeeda",
        Email: "nubii@gmail.com",
        Mobile: "+92 3045678987",
        amount: 5000,
        Date: "18/2/2025 10:14:12 Am",
      },
      {
        CustomerName: "nubeeda",
        Email: "nubii@gmail.com",
        Mobile: "+92 3045678987",
        amount: 5000,
        Date: "18/2/2025 10:14:12 Am",
      },
      {
        CustomerName: "nubeeda",
        Email: "nubii@gmail.com",
        Mobile: "+92 3045678987",
        amount: 5000,
        Date: "18/2/2025 10:14:12 Am",
      },
      {
        CustomerName: "nubeeda",
        Email: "nubii@gmail.com",
        Mobile: "+92 3045678987",
        amount: 5000,
        Date: "18/2/2025 10:14:12 Am",
      },
      {
        CustomerName: "nubeeda",
        Email: "nubii@gmail.com",
        Mobile: "+92 3045678987",
        amount: 5000,
        Date: "18/2/2025 10:14:12 Am",
      },
      
  ]);

  return (
    <Layout>
      <div>
        <h1 className="text-lg font-semibold">Payments</h1>
        <div className="mt-4">
          <table className="w-full">
            <thead>
              <tr className="bg-rose-600 text-white text-left">
                <th className="p-4">Customer's Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((item, index) => (
                <tr
                  key={index}
                  style={{
                    background: (index + 1) % 2 === 0 ? "#f3f4f6" : "white",
                  }}
                >
                  <td className="capitalize px-4 py-3">
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
                  <td>PKR{item.amount.toLocaleString()}</td>
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
export default Payments;
