import React from "react";

import StarsRating from "stars-rating";

import "./stylesheets/Post.scss";

const Post = props => {
  return (
    <div className="post">
      <div className="avatar">
        <img src={props.data.images[0]} alt={props.data.name} />
      </div>
      <div className="name">
        {props.data.name}
        <span className="price">${props.data.price}</span>
      </div>
      <div className="rating">
        <StarsRating
          edit={false}
          count={5}
          value={props.data.rating}
          size={24}
          color2={"#ffd700"}
        />
      </div>
      <div className="author">{props.data.author}</div>
      <div className="desc">{props.data.description}</div>
    </div>
  );
};

export default Post;
