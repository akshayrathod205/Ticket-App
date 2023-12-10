import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const DeleteBlock = ({ id }) => {
  const handleDelete = async () => {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      method: "DELETE",
    });
    if (res.status === 200) {
      window.location.reload();
    }
  };

  return (
    <FontAwesomeIcon
      icon={faTrash}
      className="text-default-text hover:cursor-pointer"
      onClick={handleDelete}
    />
  );
};

export default DeleteBlock;
