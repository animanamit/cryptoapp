import React from "react";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/crypto-api";
import { useGetUsersQuery } from "../services/test-api";
const Navbar = () => {
  const { data, isFetching } = useGetCryptosQuery();
  //   const { data, isFetching } = useGetUsersQuery();
  console.log(data);
  //   console.log(useGetCryptosQuery);

  //   fetch("https://coinranking1.p.rapidapi.com/coins", {
  //     method: "get",
  //     headers: {
  //       "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  //       "x-rapidapi-key": "2d85c265f5mshc430cfd3e4dc2e5p1890ccjsn0870c0f9b5bf",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((json) => console.log(json.data));

  return (
    <div className="nav-container">
      {/* <Link to="/">Navbar</Link> */}
      <h1>NV</h1>
    </div>
  );
};

export default Navbar;
