import React from "react";
import { NavLink } from "react-router-dom";

const PostPreview = ({ element }) => {
  return (
    <div className="post-preview">
      <h2 className="post-title">
        <NavLink to={"post/" + element.id}>{element.title}</NavLink>
      </h2>
    </div>
  );
};

export default PostPreview;
