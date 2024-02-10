
import React from "react";

const GifList = ({ gifs }) => {
  return (
    <div>
      {gifs.map((gif) => (
        <img
          key={gif.id}
          src={gif.images.original.url}
          alt={gif.title}
          style={{ width: "200px", margin: "10px" }}
        />
      ))}
    </div>
  );
};

export default GifList;