import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = ({
  id,
  name,
  job,
  image,
  text,
  prevPerson,
  nextPerson,
  randomPerson,
}) => {
  return (
    <main>
      <article className="review">
        <div className="img-container" key={id}>
          <img src={image} alt={name} className="person-img"></img>
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>

        <div className="btn-container">
          <button
            className="prev-btn"
            onClick={() => {
              prevPerson();
            }}
          >
            <FaChevronLeft />
          </button>

          <button
            className="next-btn"
            onClick={() => {
              nextPerson();
            }}
          >
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          Surprise Me
        </button>
      </article>
    </main>
  );
};

export default Review;
