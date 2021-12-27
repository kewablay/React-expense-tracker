import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useId } from "react-id-generator";
import addImg from "../images/add.png";
import { motion } from "framer-motion";

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
    setAmount("");
    setText("");
  };

  const addTransactionVariant = {
    hidden: {
      scale: 0,
      height: 0,
    },
    visible: {
      scale: 1,
      height: "30%",
      y: -20,
      transition: {
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      {addClicked && (
        <motion.div
          className="addTransaction"
          variants={addTransactionVariant}
          drag
          dragConstraints={{ left: 0, top: 0, right: 400, bottom: 0 }}
          dragElastic={0.2}
          initial="hidden"
          animate="visible"
        >
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
