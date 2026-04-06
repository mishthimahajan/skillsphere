import { useEffect, useState } from "react";
import API from "../services/api";

export default function RevenueChart() {

  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const res = await API.get("/payments");
      setPayments(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const totalRevenue = payments.reduce(
    (acc, p) => acc + p.amount,
    0
  );

  return (
    <div className="bg-white/10 p-6 rounded-xl">

      <h2 className="text-xl mb-4">Revenue 💰</h2>

      <p className="text-3xl font-bold text-green-400">
        ₹ {totalRevenue}
      </p>

      <p className="text-gray-400 mt-2">
        Total Transactions: {payments.length}
      </p>

    </div>
  );
}