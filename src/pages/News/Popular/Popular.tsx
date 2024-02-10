
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { News } from '../../../components/News/News';
import { fetchPopularNews } from '../../../redux/reducers/news/actions';
import { useEffect } from 'react';
import styles from './Popular.module.scss';
import { Loader } from '../../../components/Loader/Loader';

export const Popular = () => {
  const dispatch = useAppDispatch();
  const { popularNews, loading } = useAppSelector(state => state.news);

  useEffect(() => {
    dispatch(fetchPopularNews)
  }, [])

  if (loading) {
    return <Loader />
  };
  
  return (
    <section className={styles.popular}>
      <h1>Popular news</h1>
      <News news={popularNews}/>
    </section>
  );
};
