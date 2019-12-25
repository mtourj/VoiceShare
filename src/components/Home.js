import React from "react";

import "./stylesheets/Home.scss";

import { connect } from "react-redux";

import SearchFilter from "./SearchFilter";

import Post from "./Post";

const Home = props => {
  return (
    <div className="home">
      <div className="header">
        <h1>Browse Artists</h1>
        {props.isAuthenticated ? <div className="create">+ CREATE</div> : null}
      </div>
      <SearchFilter
        renderClassName="posts"
        array={props.posts}
        Component={props => <Post {...props} />}
      />
    </div>
  );
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, null)(Home);
