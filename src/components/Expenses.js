import React from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ data }) => {
  return (
    <Card className="expenses">
      {data.map((data) => {
        return <ExpenseItem key={data.id} data={data} />;
      })}
    </Card>
  );
};

export default Expenses;
