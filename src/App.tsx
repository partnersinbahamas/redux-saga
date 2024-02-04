import { useAppDispatch } from "./redux/hooks";
import { useAppSelector } from "./redux/hooks";
import { increase, decrease } from "./redux/reducers/counter/actions";
import { fetchNews } from "./redux/reducers/news/actions";
import { Button } from "@mui/material";
import { GetApp, Newspaper } from "@mui/icons-material";
import styles from './App.module.scss';
import { Logo } from "./components/Logo/Logo";
import { News } from "./components/News/News";
import { useState } from "react";

const App = () => {
  const dispatch = useAppDispatch();
  const { latestNews, popularNews } = useAppSelector(state => state.news);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleIncrease = () => {
    dispatch(increase)
  }

  const handleDecrease = () => {
    dispatch(decrease)
  }

  const onGetData = async() => {
    try {
      setIsLoading(true);
      await dispatch(fetchNews)
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  console.log(isLoading)

  return (
    <section className={styles.app}>
      <div className={styles.appLogo}>
        <Logo/>
      </div>
      <div className={styles.container}>
        <Button
          variant="contained"
          onClick={onGetData}
          className={styles.loadButton}
        >
          <GetApp />
          <Newspaper/>
        </Button>

        <main className={styles.main}>
          <p className={styles.title}>News</p>
          {!!latestNews.length && (
            <News news={latestNews} title='Latest news' />
          )}

          {!!popularNews.length && (
            <News news={popularNews} title='Popular news' />
          )}
        </main>
      </div>
    </section>
  );
};

export default App;