import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../Form/Input';
import SubmitButton from '../Form/SubmitButton';
import TextArea from '../Form/TextArea';
import CancelModal from './CancelModal';
import styles from './ScreenEdit.module.css';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import { POST_UPDATE } from '../../api';
import Message from '../Message';
import Loading from '../Loading';
import { setPost, updatePost } from '../../store/post';

const ScreenEdit = () => {
  const dispatch = useDispatch();
  const { request, loading } = useFetch();
  const postTitle = useForm();
  const postComment = useForm();
  const { _id, name } = useSelector((state) => state.loginUser.data.user);
  const { idModal } = useSelector((state) => state.modalEdit);
  const [message, setMessage] = React.useState('');

  async function editPost(e) {
    e.preventDefault();
    document.getElementById('sendForm').reset();
    if (postTitle.value && postComment.value) {
      const token = window.localStorage.getItem('token');
      const { url, options } = POST_UPDATE(
        token,
        postTitle.value,
        postComment.value,
        name,
        _id,
        idModal,
      );
      const { response, json } = await request(url, options);

      if (response.status === 404) {
        setMessage(`${response.status} | ${response.statusText}`);
      } else if (response.status === 200) {
        setMessage(json.msg);
        dispatch(setPost(json.allPosts));
        dispatch(updatePost());
      } else {
        setMessage(`${response.status} | ${response.statusText}`);
      }
    }
  }

  if (loading)
    return (
      <div className={styles.modal}>
        <div className={styles.container}>
          <Loading />{' '}
        </div>
      </div>
    );

  if (message)
    return (
      <div className={styles.modal}>
        <div className={styles.container}>
          <Message msg={message} />
          <CancelModal text="OK" />
        </div>
      </div>
    );

  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <form className={styles.form} id="sendForm" onSubmit={editPost}>
          <Input type="text" placeholder="Hello World" {...postTitle} />
          <TextArea placeholder="Comment here" rows="6" {...postComment} />
          <div className={styles.actions}>
            {' '}
            <SubmitButton
              postTitle={postTitle.value}
              postComment={postComment.value}
              loading={loading}
            />
            <CancelModal text="Cancel" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScreenEdit;
