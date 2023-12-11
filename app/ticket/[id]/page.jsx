"use client"; 
import TicketForm from "@/app/(components)/TicketForm";
import { useRouter } from "next/navigation";

const getTicket = async (id) => {
  const res = await fetch(`http://localhost:3000/api/Tickets/${id}`);

  if (res.status === 200) {
    return res.json();
  } else {
    console.error("Error");
  }
};

const Ticket = ({ params }) => {
  const router = useRouter();
  const editMode = params.id === "new" ? false : true;
  let updateTicketData = {};

  const fetchTicket = async () => {
    if (editMode) {
      updateTicketData = await getTicket(params.id);
      updateTicketData = updateTicketData.ticket;
    } else {
      updateTicketData = {
        _id: "new",
      };
    }
    router.refresh();
  };

  fetchTicket();

  return (
    <div className="flex justify-center">
      <div className="w-[650px] py-10">
        <TicketForm ticket={updateTicketData} />
      </div>
    </div>
  );
};

export default Ticket;
