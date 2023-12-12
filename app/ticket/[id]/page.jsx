// "use client";
// import TicketForm from "@/app/(components)/TicketForm";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// const getTicket = async (id) => {
//   const res = await fetch(`http://localhost:3000/api/Tickets/${id}`);

//   if (res.status === 200) {
//     return res.json();
//   } else {
//     console.error("Error");
//   }
// };

// const Ticket = ({ params }) => {
//   const router = useRouter();
//   const editMode = params.id === "new" ? false : true;
//   let updateTicketData = {};

//   const fetchTicket = async () => {
//     if (editMode) {
//       updateTicketData = await getTicket(params.id);
//       updateTicketData = updateTicketData.ticket;
//     } else {
//       updateTicketData = {
//         id: "new",
//       };
//     }
//   };

//   useEffect(() => {
//     fetchTicket();
//   }, [params.id, editMode]);

//   return (
//     <div className="flex justify-center">
//       <div className="w-[650px] py-10">
//         <TicketForm ticket={updateTicketData} />
//       </div>
//     </div>
//   );
// };

// export default Ticket;

"use client";
import TicketForm from "@/app/(components)/TicketForm";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Ticket = ({ params }) => {
  const router = useRouter();

  const [updateTicketData, setUpdateTicketData] = useState({});

  // const fetchTicket = async () => {
  //   let ticketData = {};
  //   if (editMode) {
  //     ticketData = await getTicket(params.id);
  //     ticketData = ticketData.ticket;
  //   } else {
  //     ticketData = {
  //       id: "new",
  //     };
  //   }
  //   setUpdateTicketData(ticketData);
  // };

  useEffect(() => {
    const editMode = params.id === "new" ? false : true;
    let ticketData = {};
    console.log(params.id);
    if (editMode) {
      fetch(`http://localhost:3000/api/Tickets/${params.id}`).then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            ticketData = data.ticket;
            console.log(ticketData);
            setUpdateTicketData(ticketData);
          });
        } else {
          console.error("Error");
        }
      });
    } else {
      ticketData = {
        id: "new",
      };
    }
    setUpdateTicketData(ticketData);
  }, [params.id]);

  return (
    <div className="flex justify-center">
      <div className="w-[650px] py-10">
        <TicketForm ticket={updateTicketData} />
      </div>
    </div>
  );
};

export default Ticket;
