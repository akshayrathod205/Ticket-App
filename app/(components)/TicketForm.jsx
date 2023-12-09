"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const TicketForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    deadline: "",
    priority: "",
    status: "",
    assignedTo: "",
    createdBy: "Akshay",
  });

  const handleCjange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className="border border-gray-400 rounded-md p-2"
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
          ></textarea>
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="deadline">Deadline</label>
          <input
            type="date"
            name="deadline"
            id="deadline"
            className="border border-gray-400 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            className="border border-gray-400 rounded-md p-2"
          >
            <option value="new">New</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="priority">Priority</label>
          <select
            name="priority"
            id="priority"
            className="border border-gray-400 rounded-md p-2"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="urgent">Urgent</option>
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
            name="assigned-to"
            id="assigned-to"
            className="border border-gray-400 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <button
            type="submit"
            className="bg-default-text text-white rounded-md p-2"
          >
            Create
          </button>
        </div>
      </div>
    </form>
  );
};

export default TicketForm;
