// import { useEffect, useState } from "react";
// import API from "../services/api";

// export default function MyGigs() {

//   const [gigs, setGigs] = useState([]);
//   const [editGig,setEditGig] = useState(null);
//   const [applicants,setApplicants] = useState([]);

//   const fetchGigs = async () => {
//     const res = await API.get("/gigs"); // or /my-gigs if filtered
//     setGigs(res.data);
//   };

//   useEffect(() => {
//     fetchGigs();
//   }, []);

//   const deleteGig = async (id) => {
//     await API.delete(`/gigs/${id}`);
//     fetchGigs();
//   };
//   const fetchApplicants = async (gigId) => {
//   const res = await API.get(`/gig/${gigId}/applicants`);
//   setApplicants(res.data);
// };

//   return (
//     <div className="grid grid-cols-2 gap-6">
//         {editGig && (
//   <div className="fixed inset-0 bg-black/50 flex justify-center items-center">

//     <div className="bg-white p-6 rounded-xl w-96">

//       <input
//         value={editGig.title}
//         onChange={(e) =>
//           setEditGig({ ...editGig, title: e.target.value })
//         }
//         className="w-full mb-2 p-2 border"
//       />

//       <textarea
//         value={editGig.description}
//         onChange={(e) =>
//           setEditGig({ ...editGig, description: e.target.value })
//         }
//         className="w-full mb-2 p-2 border"
//       />

//       <button
//         onClick={async () => {
//           await API.put(`/gigs/${editGig._id}`, editGig);
//           setEditGig(null);
//           fetchGigs();
//         }}
//         className="bg-green-500 px-3 py-1"
//       >
//         Save
//       </button>

//     </div>

//   </div>
// )}

//       {gigs.map(gig => (
//         <div key={gig._id} className="bg-white/20 p-5 rounded-xl">

//           <h2 className="text-xl font-bold">{gig.title}</h2>
//           <p>{gig.description}</p>
//           <p className="text-green-400">₹ {gig.budget}</p>

//           <button
//             onClick={() => deleteGig(gig._id)}
//             className="bg-red-500 px-3 py-1 mt-2 rounded"
//           >
//             Delete
//           </button>
//           <button 
//              onClick={() => setEditGig(gig)}
//              className="bg-yellow-500 px-3 py-1 mt-2 rounded"
//            >
//             Edit
//            </button>
//            <button
//   onClick={() => fetchApplicants(gig._id)}
//   className="bg-blue-500 px-3 py-1 mt-2 rounded"
// >
//   View Applicants
// </button>
//         </div>
//       ))}

//     </div>
//   );
// }

import { useEffect, useState } from "react";
import API from "../services/api";

export default function MyGigs() {

  const [gigs, setGigs] = useState([]);
  const [selectedGig, setSelectedGig] = useState(null);
  const [applicants, setApplicants] = useState([]);
  const [editGig, setEditGig] = useState(null);

  // 🔥 FETCH GIGS
  const fetchGigs = async () => {
    try {
      const res = await API.get("/gigs");
      setGigs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchGigs();
  }, []);

  // ❌ DELETE
  const deleteGig = async (id) => {
    await API.delete(`/gigs/${id}`);
    fetchGigs();
  };

  // 👥 FETCH APPLICANTS
  const fetchApplicants = async (gigId) => {
    try {
      const res = await API.get(`/gig/${gigId}/applicants`);
      setApplicants(res.data);
      setSelectedGig(gigId);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-6">

      {gigs.length === 0 ? (
        <p className="text-gray-400">No gigs posted yet 🚀</p>
      ) : (
        gigs.map((gig) => (
          <div
            key={gig._id}
            className="bg-white/20 backdrop-blur-lg p-5 rounded-xl shadow-lg"
          >

            {/* TITLE */}
            <h2 className="text-xl font-bold">{gig.title}</h2>

            {/* DESC */}
            <p className="text-gray-200 mt-2">{gig.description}</p>

            {/* BUDGET */}
            <p className="text-green-400 mt-2 font-semibold">
              ₹ {gig.budget}
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex gap-2 mt-3 flex-wrap">

              <button
                onClick={() => setEditGig(gig)}
                className="bg-yellow-500 px-3 py-1 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => deleteGig(gig._id)}
                className="bg-red-500 px-3 py-1 rounded"
              >
                Delete
              </button>

              <button
                onClick={() => fetchApplicants(gig._id)}
                className="bg-blue-500 px-3 py-1 rounded"
              >
                View Applicants
              </button>

            </div>

            {/* 👥 APPLICANTS LIST */}
            {selectedGig === gig._id && (
              <div className="mt-4">

                {applicants.length === 0 ? (
                  <p className="text-gray-300">No applicants yet</p>
                ) : (
                  applicants.map((a) => (
                    <div
                      key={a._id}
                      className="bg-black/30 p-3 mt-2 rounded"
                    >

                      <p>{a.userName}</p>

                      <div className="flex gap-2 mt-2">

                        <button
                          onClick={async () => {
                            await API.put(`/applicant/accept/${a._id}`);
                            alert("Accepted ✅");
                          }}
                          className="bg-green-500 px-2 py-1 rounded"
                        >
                          Accept
                        </button>

                        <button
                          onClick={async () => {
                            await API.put(`/applicant/reject/${a._id}`);
                            alert("Rejected ❌");
                          }}
                          className="bg-red-500 px-2 py-1 rounded"
                        >
                          Reject
                        </button>

                      </div>

                    </div>
                  ))
                )}

              </div>
            )}

          </div>
        ))
      )}

      {/* ✏️ EDIT MODAL */}
      {editGig && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">

          <div className="bg-white p-6 rounded-xl w-96 text-black">

            <h2 className="text-xl mb-3">Edit Gig</h2>

            <input
              value={editGig.title}
              onChange={(e) =>
                setEditGig({ ...editGig, title: e.target.value })
              }
              className="w-full mb-2 p-2 border rounded"
            />

            <textarea
              value={editGig.description}
              onChange={(e) =>
                setEditGig({ ...editGig, description: e.target.value })
              }
              className="w-full mb-2 p-2 border rounded"
            />

            <input
              value={editGig.budget}
              onChange={(e) =>
                setEditGig({ ...editGig, budget: e.target.value })
              }
              className="w-full mb-3 p-2 border rounded"
            />

            <div className="flex justify-between">

              <button
                onClick={async () => {
                  await API.put(`/gigs/${editGig._id}`, editGig);
                  setEditGig(null);
                  fetchGigs();
                }}
                className="bg-green-500 px-3 py-1 rounded text-white"
              >
                Save
              </button>

              <button
                onClick={() => setEditGig(null)}
                className="bg-gray-500 px-3 py-1 rounded text-white"
              >
                Cancel
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}