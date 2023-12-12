// "use client";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// const TicketForm = ({ ticket }) => {
//   const editMode = ticket.id === "new" ? false : true;

//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     deadline: "",
//     priority: "Low",
//     status: "Not Started",
//     assignedTo: "",
//     createdBy: "Akshay",
//   });

//   if (editMode) {
//     setFormData({
//       title: ticket.title,
//       description: ticket.description,
//       deadline: ticket.deadline,
//       priority: ticket.priority,
//       status: ticket.status,
//       assignedTo: ticket.assignedTo,
//       createdBy: ticket.createdBy,
//     });

//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     const updatedValue =
//       name === "deadline" ? new Date(value).toISOString().split("T")[0] : value;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: updatedValue,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(formData);
//     const res = await fetch("/api/Tickets", {
//       method: "POST",
//       body: JSON.stringify({ formData }),
//       "Content-type": "application/json",
//     });
//     console.log(res);
//     if (res.ok) {
//       router.refresh();
//       router.push("/");
//     } else {
//       console.error("Error");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="flex flex-col space-y-4">
//         <h3 className="self-center text-2xl font-semibold">Create</h3>
//         <div className="flex flex-col space-y-2">
//           <label htmlFor="title">Title</label>
//           <input
//             type="text"
//             name="title"
//             id="title"
//             className="border border-gray-400 rounded-md p-2"
//             value={formData.title}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="flex flex-col space-y-2">
//           <label htmlFor="description">Description</label>
//           <textarea
//             name="description"
//             id="description"
//             cols="30"
//             rows="10"
//             className="border border-gray-400 rounded-md p-2"
//             value={formData.description}
//             onChange={handleChange}
//           ></textarea>
//         </div>
//         <div className="flex flex-col space-y-2">
//           <label htmlFor="deadline">Deadline</label>
//           <input
//             type="date"
//             name="deadline"
//             id="deadline"
//             className="border border-gray-400 rounded-md p-2"
//             value={formData.deadline}
//             onChange={handleChange}
//           />
//         </div>
//         {/* <div className="flex flex-col space-y-2">
//           <label htmlFor="status">Status</label>
//           <select
//             name="status"
//             id="status"
//             className="border border-gray-400 rounded-md p-2"
//             value={formData.status}
//             onChange={handleChange}
//           >
//             <option value="Not Started">Not Started</option>
//             <option value="In Progress">In Progress</option>
//             <option value="Completed">Completed</option>
//           </select>
//         </div> */}
//         <div className="flex flex-col space-y-2">
//           <label htmlFor="priority">Priority</label>
//           <select
//             name="priority"
//             id="priority"
//             className="border border-gray-400 rounded-md p-2"
//             value={formData.priority}
//             onChange={handleChange}
//           >
//             <option value="Low">Low</option>
//             <option value="Medium">Medium</option>
//             <option value="High">High</option>
//           </select>
//         </div>
//         {/* <div className="flex flex-col space-y-2">
//           <label htmlFor="created-by">Created By</label>
//           <input
//             type="text"
//             name="created-by"
//             id="created-by"
//             className="border border-gray-400 rounded-md p-2"
//           />
//         </div> */}
//         <div className="flex flex-col space-y-2">
//           <label htmlFor="assigned-to">Assigned To</label>
//           <input
//             type="text"
//             name="assignedTo"
//             id="assignedTo"
//             className="border border-gray-400 rounded-md p-2"
//             value={formData.assignedTo}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="flex flex-col space-y-2">
//           <button
//             type="submit"
//             className="bg-default-text text-white rounded-md p-2"
//           >
//             Create
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default TicketForm;

"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const TicketForm = ({ ticket }) => {
  const editMode = ticket.id !== "new";

  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    deadline: "",
    priority: "Low",
    status: "Not Started",
    assignedTo: "",
    createdBy: "Akshay",
  });

  useEffect(() => {
    if (editMode) {
      setFormData({
        title: ticket.title || "",
        description: ticket.description || "",
        deadline: ticket.deadline || "",
        priority: ticket.priority || "Low",
        status: ticket.status || "Not Started",
        assignedTo: ticket.assignedTo || "",
        createdBy: ticket.createdBy || "Akshay",
      });
    }
  }, [editMode, ticket]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValue =
      name === "deadline" ? new Date(value).toISOString().split("T")[0] : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const res = await fetch("/api/Tickets", {
      method: "POST",
      body: JSON.stringify({ formData }),
      headers: {
        "Content-type": "application/json",
      },
    });
    console.log(res);
    if (res.ok) {
      router.refresh();
      router.push("/");
    } else {
      console.error("Error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-4">
        <h3 className="self-center text-2xl font-semibold">
          {editMode ? "Edit" : "Create"}
        </h3>
        <div className="flex flex-col space-y-2">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className="border border-gray-400 rounded-md p-2"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            className="border border-gray-400 rounded-md p-2"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="deadline">Deadline</label>
          <input
            type="date"
            name="deadline"
            id="deadline"
            className="border border-gray-400 rounded-md p-2"
            value={formData.deadline}
            onChange={handleChange}
          />
        </div>
        {/* <div className="flex flex-col space-y-2">
           <label htmlFor="status">Status</label>
           <select
             name="status"
             id="status"
             className="border border-gray-400 rounded-md p-2"
             value={formData.status}
             onChange={handleChange}
           >
             <option value="Not Started">Not Started</option>
             <option value="In Progress">In Progress</option>
             <option value="Completed">Completed</option>
           </select>
         </div> */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="priority">Priority</label>
          <select
            name="priority"
            id="priority"
            className="border border-gray-400 rounded-md p-2"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        {/* <div className="flex flex-col space-y-2">
           <label htmlFor="created-by">Created By</label>
           <input
             type="text"
             name="created-by"
             id="created-by"
             className="border border-gray-400 rounded-md p-2"
           />
         </div> */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="assigned-to">Assigned To</label>
          <input
            type="text"
            name="assignedTo"
            id="assignedTo"
            className="border border-gray-400 rounded-md p-2"
            value={formData.assignedTo}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <button
            type="submit"
            className="bg-default-text text-white rounded-md p-2"
          >
            {editMode ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default TicketForm;
