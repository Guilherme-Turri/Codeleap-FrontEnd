import React from 'react';
import styles from './SeeProfile.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ContentPost from '../Posts/ContentPost';
import Head from '../../Helper/Head';
import NotFound from '../NotFound/NotFound';

const SeeProfile = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.post.data).find(
    (item) => item.authorId === id,
  );
  const { data } = useSelector((state) => state.post);

  return !user ? (
    <NotFound />
  ) : (
    <section className={styles.wrapper}>
      <Head title={`${user.author}'s Profile`} />
      <h2> {user.author} Posts</h2>
      {data
        .map((item, index) => {
          if (item.authorId === id) {
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

export default SeeProfile;
