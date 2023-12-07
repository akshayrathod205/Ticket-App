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
    createdBy: "",
    createdAt: "",
    updatedAt: "",
  });

  const handleCjange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return <div>TicketForm</div>;
};

export default TicketForm;
