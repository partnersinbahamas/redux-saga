import { useAppDispatch } from "./redux/hooks";
import { useAppSelector } from "./redux/hooks";
import { increase, decrease } from "./redux/reducers/counter/actions";
import { fetchNews } from "./redux/reducers/news/actions";
import { Button, ButtonGroup } from "@mui/material";
import { Delete, GetApp, Newspaper } from "@mui/icons-material";
import { removeNewsAction } from "./redux/reducers/news/actions";
import styles from './App.module.scss';
import { Logo } from "./components/Logo/Logo";
import { News } from "./components/News/News";
import { useState } from "react";
import { Error } from "./components/Error/Error";

const App = () => {
  const dispatch = useAppDispatch();
  const { latestNews, popularNews } = useAppSelector(state => state.news);
  const { errorLatestNews, errorPopularNews } = useAppSelector(state => state.error)
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onGetData = async() => {
    try {
      setIsLoading(true);
      await dispatch(fetchNews)
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  const handleRemove = () => {
    dispatch(removeNewsAction);
  }

  console.log(isLoading)

  return (
    <section className={styles.app}>
      <div className={styles.appLogo}>
        <Logo/>
      </div>
      <div className={styles.container}>
      <ButtonGroup
        fullWidth
        variant="contained"
      >
        <Button
          onClick={onGetData}
          className={styles.loadButton}
        >
          <GetApp />
          <Newspaper/>
        </Button>

        <Button
          onClick={handleRemove}
          sx={{width: 80}}
          color="error"
        >
          <Delete />
        </Button>
      </ButtonGroup>

        <main className={styles.main}>
          <p className={styles.title}>News</p>
          {errorLatestNews ? (
            <Error error={errorLatestNews}/>
          ) : (
            <>
              {!!latestNews.length && <News news={latestNews} title='Latest news' />}
            </>
          )}

          {errorPopularNews ? (
            <Error error={errorLatestNews}/>
          ) : (
            <>
            {!!popularNews.length && <News news={popularNews} title='Popular news' />}
          </>
          )}
        </main>
      </div>
    </section>
  );
};

export default App;