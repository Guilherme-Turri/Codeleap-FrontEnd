import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFetch from '../../Hooks/useFetch';
import { POST_DELETE } from '../../api';
import styles from './ScreenDelete.module.css';
import Loading from '../Loading';
import Message from '../Message';
import CancelModal from './CancelModal';
import { setPost, updatePost } from '../../store/post';

const ScreenDelete = () => {
  const [message, setMessage] = React.useState('');
  const { idModal } = useSelector((state) => state.modalDelete);
  const { loading, request } = useFetch();
  const dispatch = useDispatch();

  async function handleDelete() {
    const token = localStorage.getItem('token');
    const { url, options } = POST_DELETE(token, idModal);
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

  if (loading)
    return (
      <div className={styles.modal}>
        <div className={styles.container}>
          <Loading />
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
        <Message msg={'Are you sure you want to delete this item?'} />
        <div className={styles.actions}>
          <CancelModal text="Cancel" />
          <button className={styles.button} onClick={handleDelete}>
            {' '}
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScreenDelete;
