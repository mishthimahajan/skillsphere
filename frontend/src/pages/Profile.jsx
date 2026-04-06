import { useEffect, useState } from "react";
import API from "../services/api";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await API.get("/auth/me");
      setUser(res.data);
    };
    fetchUser();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-600 to-blue-500 flex justify-center items-center">
      
      <div className="bg-white p-8 rounded-2xl shadow-xl w-87.5 text-center">

        <img
          src={user.image}
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />

        <h2 className="text-2xl font-bold">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>

        <p className="mt-2 bg-purple-500 text-white px-3 py-1 rounded-full inline-block">
          {user.role}
        </p>

      </div>
    </div>
  );
}