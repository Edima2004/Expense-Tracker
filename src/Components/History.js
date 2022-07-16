import React from "react";
import { useGlobalContext } from "../context";
import Transaction from "./Transaction";

const History = () => {
  const { transactions, delTransaction } = useGlobalContext();

  console.log(transactions);
  
  return (
    <div className="history">
       <h3>{transactions ? 'History' : 'No transactions to show!'}</h3>
      <ul className="list">
        {transactions.map((transact) => {
          return (
            <div key={transact.id}>
              <Transaction {...transact} delTransaction={delTransaction} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default History;
