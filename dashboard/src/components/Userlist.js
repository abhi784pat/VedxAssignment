import Orderid from "./Orderid";
import Address from "./Address";
import Status from "./Status";
import Date from "./Date";
import { Fragment } from "react";
import Producttit from "./Producttit";
import Customer from "./Customer";

const UserList = (props) => {
  const getSearchTerm = (event) => {
    props.searchKeyword(event.target.value);
  };
  const getFilterItem = (event) => {
    // console.log(event.target.value);
    props.filterKeyword(event.target.value);
  };
  return (
    <Fragment>
      <section className="home-section">
        <nav className="nav-container">
          <div className="search-box">
            <input
              className="search-box"
              type="text"
              placeholder="Search..."
              value={props.term}
              onChange={getSearchTerm}
            />
          </div>
          <div>
            <select
              name="cars"
              id="cars"
              onChange={getFilterItem}
              className="profile-details"
              placeholder="Filter"
            >
              <option value="" disabled selected>
                Filter..
              </option>
              <option value="">All</option>
              <option value="Completed">Completed</option>
              <option value="Prepared">Prepared</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        </nav>
      </section>

      <div className="sales-box">
        <ul className="details">
          <li className="topic">Order_id</li>
          {props.users.map((user) => (
            <Orderid order_id={user.order_id} />
          ))}
        </ul>
        <ul className="details">
          <li className="topic">Customer</li>
          {props.users.map((user) => (
            <Customer customer={user.customer} />
          ))}
        </ul>
        <ul className="details">
          <li className="topic">Address</li>
          {props.users.map((user) => (
            <Address address={user.address} country={user.country} />
          ))}
        </ul>

        <ul className="details">
          <li className="topic">Product</li>
          {props.users.map((user) => (
            <Producttit
              product_title={user.product_title}
              product_description={user.product_description}
            />
          ))}
        </ul>
        <ul className="details">
          <li className="topic">Date</li>
          {props.users.map((user) => (
            <Date date={user.date} />
          ))}
        </ul>
        <ul className="details">
          <li className="topic">Status</li>
          {props.users.map((user) => (
            <Status status={user.status} />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default UserList;
