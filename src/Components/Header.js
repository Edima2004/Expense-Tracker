import React from "react";
import { useGlobalContext } from "../context";

const Header = () => {
  const { transactions } = useGlobalContext();
  const total =
    parseFloat(transactions
      .reduce((total, transact) => total + transact.amount, 0)
      .toFixed(2))
  ;
  const filteredIncome = parseFloat(transactions
    .filter((transact) => transact.amount > 0)
    .reduce((total, num) => total + num.amount, 0));

  const expense = Math.abs(parseFloat(transactions
    .filter((transact) => transact.amount < 0)
    .reduce((total, num) => total + num.amount, 0)));
    console.log(transactions.amount);
   

//  console.log((filteredIncome));
  return (
    <section className="head">
      <div>
        <h2>Expense Tracker</h2>
        <p>YOUR BALANCE</p>
        <h2 className="balance">${total}.00</h2>
      </div>
      <div>
        <div>
          <p>INCOME</p>
         
          <h3 className="income">${filteredIncome}.00</h3>
        </div>
        <div>
          <p>EXPENSE(S)</p>
         
          <h3 className="expense">${expense}.00</h3>
        </div>
      </div>
    </section>
  );
};

export default Header;
