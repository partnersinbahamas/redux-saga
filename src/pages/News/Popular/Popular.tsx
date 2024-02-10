
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { News } from '../../../components/News/News';
import { fetchPopularNews } from '../../../redux/reducers/news/actions';
import { useEffect } from 'react';
import styles from './Popular.module.scss';

export const Popular = () => {
  const dispatch = useAppDispatch();
  const { popularNews } = useAppSelector(state => state.news);

  useEffect(() => {
    dispatch(fetchPopularNews)
  }, [])
  
  return (
    <section className={styles.popular}>
      <h1>Popular news</h1>
      <News news={popularNews}/>
    </section>
  );
};
