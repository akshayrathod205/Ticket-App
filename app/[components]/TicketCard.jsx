import DeleteBlock from "./DeleteBlock";

const TicketCard = () => {
  return (
    <div className="flex flex-col w-[400px] h-auto space-y-4 p-5 border rounded-md shadow-md">
      <div className="place-self-end">
        <DeleteBlock />
      </div>
      <div className="flex flex-col px-4 space-y-2">
        <div className="grid grid-cols-2">
          <p className="text-default-text">Title</p>
          <p className="text-default-text">Lorem, ipsum dolor.</p>
        </div>
        <div className="grid grid-cols-2">
          <p className="text-default-text">Description</p>
          <p className="text-default-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, et.
          </p>
        </div>
        <div className="grid grid-cols-2">
          <p className="text-default-text">Status</p>
          <p className="text-default-text">Completed</p>
        </div>
        <div className="grid grid-cols-2">
          <p className="text-default-text">Priority</p>
          <p className="text-default-text">Urgent</p>
        </div>
      </div>
      <div className="flex flex-col px-4">
        <p className="text-default-text">Created By</p>
        <p className="text-default-text">Assigned To</p>
      </div>
    </div>
  );
};

export default TicketCard;
