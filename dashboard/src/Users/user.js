import { useState, useEffect } from "react";

import Userlist from "../components/Userlist";
const Users = (props) => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setsearchResult] = useState([]);
  const [filterTerm, setFilterTerm] = useState("");
  const [filterResult, setFilterResult] = useState([]);

  async function GetUser() {
    setIsLoading(true);
    try {
      const res = await fetch(
        "https://my-json-server.typicode.com/Ved-X/assignment/orders"
      );
      if (!res.ok) {
        throw new Error("Something Went Wrong");
      }
      const data = await res.json();
      const loadedUser = [];
      for (const key in data) {
        loadedUser.push({
          order_id: data[key].order_id,
          customer: data[key].customer,
          country: data[key].country,
          address: data[key].address,
          product_title: data[key].product_title,
          product_description: data[key].product_description,
          date: data[key].date,
          status: data[key].status,
        });
      }

      setUser(loadedUser);
      console.log(user);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    let foundUser;
    if (searchTerm !== "") {
      if (filterResult.length > 0 && filterTerm !== "") {
        // console.log("hi");
        // console.log(filterResult);
        foundUser = filterResult.filter((val) => {
          return val.customer.toLowerCase().includes(searchTerm.toLowerCase());
        });
      } else {
        foundUser = user.filter((val) => {
          return val.customer.toLowerCase().includes(searchTerm.toLowerCase());
        });
      }
      //console.log(foundUser);
      setsearchResult(foundUser);
    } else {
      setsearchResult(user);
    }
  };
  const filterHandler = (filterTerm) => {
    setFilterTerm(filterTerm);
    if (filterTerm !== "") {
      const foundUser = user.filter((val) => {
        return val.status.toLowerCase().includes(filterTerm.toLowerCase());
      });
      setFilterResult(foundUser);
    } else {
      setFilterResult(user);
    }
  };

  useEffect(() => {
    GetUser();
  }, []);
  let content = <p>Found no movies.</p>;

  if (user.length > 0) {
    let newarr = [];
    if (filterResult.length > 0 && searchTerm.length > 1) {
      //console.log(searchResult);
      newarr = searchResult;
    } else if (filterResult.length > 0) {
      //console.log(filterResult);
      newarr = filterResult;
    } else if (searchResult.length > 0) {
      newarr = searchResult;
    } else {
      newarr = user;
    }
    let newarr1 = newarr.sort(function (a, b) {
      //Sorted according to date
      let part1 = a.date.split("/");
      let part2 = b.date.split("/");
      let a1 = part1[2] + "-" + part1[1] + "-" + part1[0];

      let a2 = part2[2] + "-" + part2[1] + "-" + part2[0];
      return new Date(a2) - new Date(a1);
    });
    content = (
      <Userlist
        users={newarr1}
        term={searchTerm}
        searchKeyword={searchHandler}
        filterKeyword={filterHandler}
      />
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    <p>...loading</p>;
  }
  return <div>{content}</div>;
};

export default Users;
