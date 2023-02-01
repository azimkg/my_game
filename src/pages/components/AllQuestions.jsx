import React from "react";
import { useLocation } from "react-router-dom";
import { useGetProductsQuery } from "../../store/gameSlice";
import Navbar from "./Navbar";

const AllQuestions = () => {
  const { data, isLoading, error } = useGetProductsQuery();
  const { pathname } = useLocation();

  console.log(pathname);
  return (
    <div className="container">
      <Navbar />
      {isLoading
        ? "Loading..."
        : error
        ? "Error!"
        : data?.slice(0, 20).map((item) => (
            <div className="block">
              <div>{item.question}</div>
            </div>
          ))}
    </div>
  );
};

export default AllQuestions;
