const Producttit = (props) => {
  return (
    <div className="list-container">
      <li>{props.product_title}</li>
      <li className="addr">{props.product_description}</li>
    </div>
  );
};

export default Producttit;
