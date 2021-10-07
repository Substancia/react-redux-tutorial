import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded, postUpdated } from "./postsSlice";
import { useHistory } from "react-router";

const AddPostForm = props => {
  const post = useSelector(state => props.edit ?
    state.posts.find(post => post.id === props.match.params.postId) :
    null
  );

  const [title, setTitle] = useState((post && post.title) ? post.title : '');
  const [content, setContent] = useState((post && post.content) ? post.content : '');
  const [userId, setUserId] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const users = useSelector(state => state.users);

  const onSavePostClicked = () => {
    if(props.edit) {
      dispatch(
        postUpdated({ id: props.match.params.postId, title, content })
      );
      history.push(`/posts/${props.match.params.postId}`)
    } else {
      dispatch(postAdded(title, content, userId));
    }

    setTitle('');
    setContent('');
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map(user =>
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  );

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
        <label htmlFor='postAuthor'>Author:</label>
        <select
          id='postAuthor'
          value={userId}
          onChange={e => setUserId(Number(e.target.value))}
        >
          <option value=''></option>
          {usersOptions}
        </select>
        <label htmlFor='postContent'>Content:</label>
        <input
          type='text'
          id='postContent'
          name='postContent'
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <button type='button' onClick={onSavePostClicked} disabled={!canSave}>Save Post</button>
      </form>
    </section>
  );
}

export default AddPostForm;