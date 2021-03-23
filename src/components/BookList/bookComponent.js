import React from "react";

const bookComponent = ({ image, title, author }) => {
  //attribute, eventHandler
  //onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello World");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  const mouseOver = () => {
    console.log(title);
  };

  return (
    <article className="book" onMouseOver={mouseOver}>
      <img src={image} alt="" />
      <h1
        onClick={() => {
          console.log(title);
        }}
      >
        {title}
      </h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Click Here
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        Hi There
      </button>
    </article>
  );
};

export default bookComponent;
