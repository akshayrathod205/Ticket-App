const Field = (props) => {
  return (
    <>
      <p className="text-default-text">{props.label}</p>
      <p className="text-default-text">{props.value}</p>
    </>
  );
};

export default Field;
