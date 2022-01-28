const Status = (props) => {
  return (
    <div className="list-container">
      <li
        className={
          props.status === "Delivered"
            ? "st1"
            : props.status === "Prepared"
            ? "st2"
            : "st3"
        }
      >
        {props.status}
      </li>
    </div>
  );
};

export default Status;
