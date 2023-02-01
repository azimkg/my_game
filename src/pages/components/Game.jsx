import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigation } from "react-router-dom";
import { getAllCategories } from "../../store/CategoriesSlice";
import { useGetProductsQuery } from "../../store/gameSlice";
import AllQuestions from "./AllQuestions";

const Game = () => {
  const category = useSelector((state) => state.category.category);
  const { data, isLoading, error } = useGetProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const [arr, setArr] = useState();
  const [cl, setCl] = useState();

  function click(item, elem) {
    setCl(item);
    navigate(`/all/${item}/${elem}`);
  }
  useEffect(() => {
    dispatch(getAllCategories());
    filterData();
  }, []);

  function filterData() {
    let arr = data?.map((item) => item.value);
    let uniqueVal = arr?.filter((element, index) => {
      return arr?.indexOf(element) === index;
    });
    uniqueVal?.sort((a, b) => a - b);
    setArr(uniqueVal);
  }

  return (
    <div className="filters">
      <div>
        {category?.slice(0, 6).map((items) => (
          <Link
            className="game_block"
            onClick={() => setCl(items.id)}
            key={items.id}
            to={`/all/${items.id}/${cl}`}
          >
            <div>{items.title}</div>
          </Link>
        ))}
      </div>
      <div>
        {isLoading
          ? "Loading..."
          : error
          ? "Error!"
          : arr?.map((item, index) => (
              <div>
                <div
                  onClick={() => click()}
                  className="game_block"
                  key={index}
                  // to={}
                >
                  <div>{item}</div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Game;
