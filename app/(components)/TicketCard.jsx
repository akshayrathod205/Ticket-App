import DeleteBlock from "./DeleteBlock";
import Field from "./Field";
import { useState } from "react";

const TicketCard = (props) => {
  const [ticket, setTicket] = useState(props.ticket);

  return (
    <div className="flex flex-col w-[400px] h-auto space-y-4 p-5 border rounded-md shadow-md">
      <div className="flex justify-between px-4">
        <Field label={ticket.title} />
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
