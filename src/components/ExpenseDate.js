import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = ({ data }) => {
  console.log("date : ", data.getMonth());
  return (
    <div className="expense-date">
      <div className="expense-date__month">{data.getMonth()}</div>
      <div className="expense-date__year">{data.getFullYear()}</div>
      <div className="expense-date__day">{data.getDate()}</div>
    </div>
  );
};

export default ExpenseDate;
