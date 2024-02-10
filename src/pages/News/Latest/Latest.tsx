
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { News } from '../../../components/News/News';
import { fetchLatestNews } from '../../../redux/reducers/news/actions';
import styles from './Latest.module.scss';

export const Latest = () => {
  const dispatch = useAppDispatch();
  const { latestNews } = useAppSelector(state => state.news);

  useEffect(() => {
    dispatch(fetchLatestNews);
  }, [])
  
  return (
    <section>
      <h1>Latest news</h1>
      <News news={latestNews}/>
    </section>
  );
};
