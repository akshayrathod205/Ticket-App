import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const DeleteBlock = () => {
  return (
    <FontAwesomeIcon
      icon={faTrash}
      className="text-default-text hover:cursor-pointer"
    />
  );
};

export default DeleteBlock;
