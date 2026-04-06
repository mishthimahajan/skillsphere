import { useEffect, useState } from "react";
import API from "../services/api";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await API.get("/admin/users");
      setUsers(res.data); // ✅ no append
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers(); // ✅ only once
  }, []);

  return (
    <div className="bg-white/10 p-6 rounded-xl">

      <h2 className="text-xl mb-4">All Users 👥</h2>

      {users.length === 0 ? (
        <p>No users found 🚫</p>
      ) : (
        users.map((u) => (
          <div
            key={u._id}
            className="flex justify-between border-b py-3"
          >
            <div>
              <p>{u.name}</p>
              <p className="text-gray-400">{u.email}</p>
              <p className="text-blue-400">{u.role}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}