import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { POST_CREATE } from '../../api';
import Input from '../../Helper/Form/Input';
import SubmitButton from '../../Helper/Form/SubmitButton';
import TextArea from '../../Helper/Form/TextArea';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import { updatePost } from '../../store/post';
import styles from './CreatePost.module.css';

const CreatePost = () => {
  const { request, loading } = useFetch();
  let postTitle = useForm();
  let postComment = useForm();
  const { _id, name } = useSelector((state) => state.loginUser.data.user);
  const dispatch = useDispatch();

  async function setPost(e) {
    e.preventDefault();
    if (postTitle.value && postComment.value) {
      const token = window.localStorage.getItem('token');
      const { url, options } = POST_CREATE(
        token,
        postTitle.value,
        postComment.value,
        name,
        _id,
      );
      postTitle.setValue('');
      postComment.setValue('');
      const { response, json } = await request(url, options);

      if (response.ok && json.status === 'ok') {
        dispatch(updatePost());
      } else {
        alert(`${response.status} | ${response.statusText}`);
      }
    }
  }

  return (
    <section className={styles.container}>
      <h2 className={loading ? styles.titleLoad : styles.title}>
        What's on your mind, {name}?
      </h2>

      <form className={styles.form} id="sendForm" onSubmit={setPost}>
        <Input type="text" placeholder="Hello World" {...postTitle} />
        <TextArea placeholder="Comment here" rows="6" {...postComment} />
        <div>
          {' '}
          <SubmitButton
            postTitle={postTitle.value}
            postComment={postComment.value}
            loading={loading}
          />
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
