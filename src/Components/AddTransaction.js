import React, { useState } from "react";
import { useGlobalContext } from "../context";
import ReactPlayer from "react-player";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();
  const { addTransaction } = useGlobalContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const transact = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    };
    addTransaction(transact);
    setText("");
    setAmount('');
  };

  const disableBtn = !text || !amount;

  return (
    <div>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label className="text" htmlFor="text">
            Text
          </label>
          <input
            className="textbox"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Description..."
          />
        </div>
        <div className="form-control">
          <label className="amount" htmlFor="amount">
            Amount($)
            {/*(negative - expense, positive- income)*/}
          </label>
          <input
            className="textbox"
            type="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button
          className="btn-transact"
          disabled={disableBtn}
          onClick={onSubmit}
        >
          Add Transaction
        </button>
      </form>

      <h3 className="break">
        <span>Video Break</span>
      </h3>
      <ReactPlayer
        url="./musicVideo.mp4"
        controls
        width="400px"
        height="240px"
      />
      <a href="#">up</a>
    </div>
  );
};

export default AddTransaction;
