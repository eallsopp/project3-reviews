import React, { useState } from "react";
import Review from "./Review";
import people from "./data";

function App() {
  const [index, setIndex] = useState(1);

  const checkNum = (currentNumber) => {
    if (currentNumber >= people.length - 1) {
      return 0;
    }
    if (currentNumber < 0) {
      return people.length - 1;
    }
    return currentNumber;
  };

  const prevPerson = () => {
    setIndex((currentIdx) => {
      let newIdx = currentIdx - 1;
      return checkNum(newIdx);
    });
  };

  const nextPerson = () => {
    setIndex((currentIdx) => {
      let newIdx = currentIdx + 1;
      return checkNum(newIdx);
    });
  };

  const randomPerson = () => {
    setIndex(() => {
      let randomNumber = Math.floor(Math.random() * people.length);
      return randomNumber;
    });
  };

  const person = people[index];

  return (
    <>
      <Review
        {...person}
        prevPerson={prevPerson}
        nextPerson={nextPerson}
        randomPerson={randomPerson}
      />
      ;
    </>
  );
}

export default App;
