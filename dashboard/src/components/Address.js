const Address = (props) => {
  return (
    <div className="list-container">
      <li>{props.country}</li>
      <li className="addr">{props.address}</li>
    </div>
  );
};

export default Address;
