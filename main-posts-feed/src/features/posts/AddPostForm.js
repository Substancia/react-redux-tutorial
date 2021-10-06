import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded, postUpdated } from "./postsSlice";
import { useHistory } from "react-router";

const AddPostForm = props => {
  const post = useSelector(state => props.edit ?
    state.posts.find(post => post.id === props.match.params.postId) :
    null
  );

  const [title, setTitle] = useState((post && post.title) ? post.title : '');
  const [content, setContent] = useState((post && post.content) ? post.content : '');
  const dispatch = useDispatch();
  const history = useHistory();

  const onSavePostClicked = () => {
    if(title && content) {
      if(props.edit) {
        dispatch(
          postUpdated({ id: props.match.params.postId, title, content })
        );
      } else {
        dispatch(
          postAdded({ id: nanoid, title, content })
        );
      }

      setTitle('');
      setContent('');
      history.push(`/posts/${props.match.params.postId}`)
    }
  }

  return (
    <section>
      {
        props.edit ?
          <h2>Edit Post</h2> :
          <h2>Add a New Post</h2>
      }
      <form>
        <label htmlFor='postTitle'>Post Title:</label>
        <input
          type='text'
          id='postTitle'
          name='postTitle'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label htmlFor='postContent'>Content:</label>
        <input
          type='text'
          id='postContent'
          name='postContent'
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <button type='button' onClick={onSavePostClicked}>Save Post</button>
      </form>
    </section>
  );
}

export default AddPostForm;