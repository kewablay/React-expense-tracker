import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useId } from "react-id-generator";
import addImg from "../images/add.png";
import {motion} from "framer-motion"

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);
  const [htmlId] = useId();
  const [addClicked, setAddClicked] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: { htmlId },
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      {addClicked && (
        <motion.div className="addTransaction">
          <h3>Add new transaction</h3>
          <form onSubmit={onSubmit}>
            <div className="form-control">
              <input
                type="text"
                placeholder="Enter text..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                placeholder="Enter amount (add negative for expense)..."
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <button className="btn">Add transaction</button>
          </form>
        </motion.div>
      )}
      <div className="add-image-container">
        <img
          src={addImg}
          alt="add"
          onClick={() => setAddClicked(!addClicked)}
        />
      </div>
    </>
  );
};
