import { useState } from "react";

const Cards = [
  {
    id: 3457,
    question: "What language is React Based on ?",
    answer: "javascript",
  },
  {
    id: 7336,
    question: "What are the building blocks of react apps ?",
    answer: "Components",
  },
  {
    id: 8832,
    question:
      "What's the name of the syntaxe we use to describe a ui in React ?",
    answer: "JSX",
  },

  {
    id: 1297,
    question: "How to pass data from parent to child components ?",
    answer: "Props",
  },

  {
    id: 9103,
    question: "How to give components memory ?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completly synchronised with state ?",
    answer: "Controlled element",
  },
];
export default function FlashCards() {
  return (
    <div className="cards">
      {Cards.map((ele) => (
        <Card obj={ele} key={ele.id} />
      ))}
    </div>
  );
}

function Card({ obj }) {
  const [selectId, setSelectId] = useState(null);
  function handleClick(id) {
    setSelectId(id !== selectId ? id : null);
  }
  return (
    <div
      onClick={() => handleClick(obj.id)}
      className={`${obj.id === selectId ? "answer" : "question"}`}
    >
      {obj.id === selectId ? obj.answer : obj.question}
    </div>
  );
}
