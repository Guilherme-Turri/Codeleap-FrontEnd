import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from '../../Helper/Skeleton';
import ContentPost from './ContentPost';
import styles from './UsersPost.module.css';
import LoadMore from '../../Helper/LoadMore';
import Message from '../../Helper/Message';
import useFetch from '../../Hooks/useFetch';
import { POST_GET } from '../../api';
import { setPost } from '../../store/post';

const UsersPost = () => {
  const [visible, setVisible] = React.useState(3);
  const { data, error, loading, request } = useFetch();
  const { change } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  React.useEffect(() => {
    function getPosts() {
      const { url, options } = POST_GET();
      request(url, options);
    }
    getPosts();
  }, [request, change]);

  React.useEffect(() => {
    dispatch(setPost(data));
  }, [dispatch, data]);

  function loadMore() {
    setVisible(visible + 3);
  }

  if (error) return <Message msg={error.message} />;
  if (loading || !data) return <Skeleton />;

  return (
    <section className={styles.container}>
      {data
        .slice(-visible)
        .map((item, index) => (
          <div key={index}>
            <ContentPost data={item} />
          </div>
        ))
        .reverse()}
      {data.length > visible && (
        <div onClick={loadMore}>
          <LoadMore />
        </div>
      )}
    </section>
  );
};

export default UsersPost;
