
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { News } from '../../../components/News/News';
import { fetchLatestNews } from '../../../redux/reducers/news/actions';
import { Favorite } from '@mui/icons-material';
import styles from './Latest.module.scss';
import { Loader } from '../../../components/Loader/Loader';

export const Latest = () => {
  const dispatch = useAppDispatch();
  const { latestNews, loading } = useAppSelector(state => state.news);

  useEffect(() => {
    dispatch(fetchLatestNews);
  }, []);

  if (loading) {
    return <Loader/>
  };
  
  return (
    <section>
      <h1>Latest news</h1>
      <News news={latestNews}/>
    </section>
  );
};
