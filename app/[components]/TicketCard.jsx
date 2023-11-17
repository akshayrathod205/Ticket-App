import DeleteBlock from "./DeleteBlock";
import Field from "./Field";

const TicketCard = () => {
  return (
    <div className="flex flex-col w-[400px] h-auto space-y-4 p-5 border rounded-md shadow-md">
      <div className="place-self-end">
        <DeleteBlock />
      </div>
      <div className="flex flex-col px-4 py-2">
        <div className="grid grid-cols-2">
          <Field label="Title" value="Lorem, ipsum dolor." />
          <Field label="Deadline" value="Lorem, ipsum dolor." />
          <Field label="Status" value="Completed" />
          <Field label="Priority" value="Urgent" />
          <Field label="Created By" value="Akshay" />
          <Field label="Assigned To" value="Deep" />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
