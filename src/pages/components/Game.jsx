import React, { useEffect, useState } from "react";
import { useGetProductsQuery } from "../../store/gameSlice";

const Game = () => {
  const { data, isLoading, error } = useGetProductsQuery();
  const [arr, setArr] = useState(null);

  console.log(data);
  return (
    <div>
      {isLoading
        ? "Loading..."
        : error
        ? "Error!"
        : data?.slice(0, 20).map((item) => (
            <div className="block">
              <div>{item.category.title}</div>
              <div>{item.question}</div>
              <div>{item.answer}</div>
            </div>
          ))}
    </div>
  );
};

export default Game;
