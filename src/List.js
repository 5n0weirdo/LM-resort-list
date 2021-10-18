import React from "react";

const List = ({ resorts }) => {
  return (
    <>
      {resorts.map((item) => {
        const { id, name, rating, image } = item;
        return (
          <article className="item">
            <img src={image} alt="" />
            <div>
              <h4>{name}</h4>

              <p>{rating}</p>
              <button
                className="btn"
                onClick={() => {
                  alert("Booked");
                }}
              >
                Book now
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
