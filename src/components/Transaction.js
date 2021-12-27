import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { motion, AnimatePresence } from "framer-motion";

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext(GlobalContext);

  const listVariant = {
    hidden: {
      scale: 0,
      width: 0,
    },
    visible: {
      scale: 1,
      width: "100%",
      transition: {
        type: "tween",
        ease: "easeOut",
      },    
    },
  };

  return (
    <AnimatePresence>
      <motion.li
        variants={listVariant}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className={transaction.amount < 0 ? "minus" : "plus"}
      >
        {transaction.text}{" "}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(transaction.id)}
        >
          -
        </button>
      </motion.li>
    </AnimatePresence>
  );
};
