import API from "../services/api";
import { useEffect, useState } from "react";

export default function UsersTable() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
  try {
    const res = await API.get("/admin/users"); // correct
    console.log(res.data); // 👈 ADD THIS
    setUsers(res.data);
  } catch (err) {
    console.log(err);
  }
};

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    await API.delete(`/admin/user/${id}`);
    fetchUsers();
  };

  const blockUser = async (id) => {
    await API.put(`/admin/user/block/${id}`);
    fetchUsers();
  };

  return (
    <div className="bg-white/10 p-6 rounded-xl">

      <h2 className="text-xl mb-4">Users</h2>

      {users.map(u => (
        <div key={u._id} className="flex justify-between items-center border-b py-3">

          <div>
            <p>{u.name}</p>
            <p className="text-gray-400 text-sm">{u.email}</p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => blockUser(u._id)}
              className="bg-yellow-500 px-3 py-1 rounded"
            >
              {u.isBlocked ? "Unblock" : "Block"}
            </button>

            <button
              onClick={() => deleteUser(u._id)}
              className="bg-red-500 px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>

        </div>
      ))}
    </div>
  );
}