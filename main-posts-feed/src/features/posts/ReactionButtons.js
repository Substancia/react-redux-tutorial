import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionsTypes = {
  like: 'Like',
  dislike: 'Dislike',
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();
  const reactionButtons = Object.entries(reactionsTypes).map(([name, reaction]) =>
    <button key={name} type='button'
      onClick={() => dispatch(reactionAdded({ id: post.id, reaction: name }))}
    >
      {reaction} {post.reactions[name]}
    </button>
  );

  return (
    <div>
      {reactionButtons}
    </div>
  );
}

export { reactionsTypes };

export default ReactionButtons;