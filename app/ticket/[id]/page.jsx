import TicketForm from "@/app/(components)/TicketForm";

const Ticket = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col py-5 space-y-2">
        <div className="self-center">
          <h1 className="text-3xl font-bold">Create your Ticket</h1>
        </div>
        <div className="w-[600px] py-10">
          <TicketForm />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
