import React from 'react';
import Head from '../../Helper/Head';
import CreatePost from '../Posts/CreatePost';
import UsersPost from '../Posts/UsersPost';
import styles from './Feed.module.css';

const Feed = () => {
  return (
    <div className={styles.container}>
      <Head title={'Feed'} />
      <CreatePost />
      <UsersPost />
    </div>
  );
};

export default Feed;
