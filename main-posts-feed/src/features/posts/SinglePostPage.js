import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SinglePostPage = ({ match }) => {
  const post = useSelector(state =>
    state.posts.find(post => post.id === match.params.postId)
  );

  if(!post) return (
    <section>
      <h2>Post not found!</h2>
      <Link to='/'>Back</Link>
    </section>
  );

  return (
    <section>
      <article>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <Link to={`/editPost/${post.id}`}>Edit Post</Link>
        <Link to='/'>Back</Link>
      </article>
    </section>
  );
}

export default SinglePostPage;