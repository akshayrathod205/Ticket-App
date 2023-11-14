import DeleteBlock from "./DeleteBlock";

const TicketCard = () => {
  return (
    <div className="flex flex-col w-[250px] h-[250px] space-y-4">
      <div className="place-self-end">
        <DeleteBlock />
      </div>
      <div className="flex flex-col px-4">
        <p className="text-default-text">Title</p>
        <p className="text-default-text">Description</p>
        <p className="text-default-text">Status</p>
        <p className="text-default-text">Priority</p>
      </div>
      <div className="flex flex-col px-4">
        <p className="text-default-text">Created By</p>
        <p className="text-default-text">Assigned To</p>
      </div>
    </div>
  );
};

export default TicketCard;
