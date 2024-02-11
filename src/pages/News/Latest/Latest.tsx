
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { News } from '../../../components/News/News';
import { fetchLatestNews } from '../../../redux/reducers/news/actions';
import { Error } from '../../../components/Error/Error';
import { Loader } from '../../../components/Loader/Loader';
import styles from './Latest.module.scss';

export const Latest = () => {
  const dispatch = useAppDispatch();
  const { latestNews, loading } = useAppSelector(state => state.news);
  const { errorLatestNews } = useAppSelector(state => state.error)

  useEffect(() => {
    dispatch(fetchLatestNews);
  }, [])

  if (loading) {
    return <Loader />;
  };

  if (errorLatestNews) {
    return <Error error={errorLatestNews} />
  };
  
  return (
    <section className={styles.latest}>
      <h1>Latest news</h1>
      <News news={latestNews}/>
    </section>
  );
};
