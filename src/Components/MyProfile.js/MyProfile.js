import React from 'react';
import { useSelector } from 'react-redux';
import Head from '../../Helper/Head';
import Message from '../../Helper/Message';
import ContentPost from '../Posts/ContentPost';
import styles from './MyProfile.module.css';

const MyProfile = () => {
  const { _id } = useSelector((state) => state.loginUser.data.user);
  const { data } = useSelector((state) => state.post);

  if (!data.some((item) => item.authorId === _id) || !data)
    return (
      <div>
        <div className={styles.wrapper}>
          <Message msg={'You havent published yet!'} />
        </div>
      </div>
    );
  return (
    <section className={styles.wrapper}>
      <Head title="My Profile" />
      <h2>My Posts</h2>
      {data
        .map((item, index) => {
          if (item.authorId === _id) {
            return (
              <div key={index} className={styles.content}>
                <ContentPost data={item} />
              </div>
            );
          }
          return null;
        })
        .reverse()}
    </section>
  );
};
export default MyProfile;
