import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { purchase_book } from "./BookAction";

const BookContainerB = () => {
  const noOfBooks = useSelector((state) => state.NumberOfBooks);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Book Container B</h2>
      <h3>No of Books:{noOfBooks}</h3>
      <button
        onClick={() => {
          dispatch(purchase_book());
        }}
      >
        Buy Book
      </button>
    </div>
  );
};

export default BookContainerB;
