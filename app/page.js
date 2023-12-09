"use client";
import TicketCard from "./(components)/TicketCard";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/Tickets")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTickets(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 p-5">
      {tickets.map((ticket) => (
        <TicketCard key={ticket._id} ticket={ticket} />
      ))}
    </div>
  );
};

export default Dashboard;
