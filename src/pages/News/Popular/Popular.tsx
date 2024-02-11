
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { News } from '../../../components/News/News';
import { fetchPopularNews } from '../../../redux/reducers/news/actions';
import { useEffect } from 'react';
import { Error } from '../../../components/Error/Error';
import { Loader } from '../../../components/Loader/Loader';
import styles from './Popular.module.scss';

export const Popular = () => {
  const dispatch = useAppDispatch();
  const { popularNews, loading } = useAppSelector(state => state.news);
  const { errorPopularNews } = useAppSelector(state => state.error);

  useEffect(() => {
    dispatch(fetchPopularNews)
  }, []);

  if (loading) {
    return <Loader />;
  };

  if (errorPopularNews) {
    return <Error error={errorPopularNews}/>
  };
  
  return (
    <section className={styles.popular}>
      <h1>Popular news</h1>
      <News news={popularNews}/>
    </section>
  );
};
