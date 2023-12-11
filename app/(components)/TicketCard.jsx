import DeleteBlock from "./DeleteBlock";
import Field from "./Field";
import { useState } from "react";
import { useRouter } from "next/navigation";

const TicketCard = (props) => {
  const router = useRouter();
  const [ticket, setTicket] = useState(props.ticket);

  const handleClick = () => {
    router.push(`/ticket/${ticket._id}`);
  };
  
  return (
    <div className="flex flex-col w-[400px] h-auto space-y-4 p-5 border rounded-md shadow-md">
      <div className="flex justify-between px-4">
        <div className="cursor-pointer" onClick={handleClick}>
          <Field label={ticket.title} />
        </div>
        <DeleteBlock id={ticket._id} />
      </div>
      <div className="flex flex-col px-4 py-2">
        <div className="grid grid-cols-2">
          <Field label="Deadline" value={ticket.deadline} />
          <Field label="Status" value={ticket.status} />
          <Field label="Priority" value={ticket.priority} />
          <Field label="Created By" value={ticket.createdBy} />
          <Field label="Assigned To" value={ticket.assignedTo} />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
