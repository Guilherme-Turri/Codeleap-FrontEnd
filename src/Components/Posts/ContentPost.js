import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DatePost from '../../Helper/DatePost';
import DeletePost from '../../Helper/Modal/DeletePost';
import EditPost from '../../Helper/Modal/EditPost';
import styles from './ContentPost.module.css';

const ContentPost = ({ data }) => {
  const navigate = useNavigate();
  const { _id } = useSelector((state) => state.loginUser.data.user);

  function goToProfile() {
    const url = window.location.href;
    if (url.indexOf('profile') === -1) {
      navigate(`profile/${data.authorId}`);
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {data.title}
        {data.authorId === _id ? (
          <div className={styles.wrapper}>
            <DeletePost id={data._id} /> <EditPost id={data._id} />
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className={styles.description}>
        <div onClick={goToProfile} className={styles.author}>
          @{data.author}
        </div>
        <div>
          <DatePost date={data.createdAt} />
        </div>
      </div>
      <div className={styles.content}>{data.content}</div>
    </div>
  );
};

export default ContentPost;
