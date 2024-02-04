import { useAppDispatch } from "./redux/hooks";
import { useAppSelector } from "./redux/hooks";
import { increase, decrease } from "./redux/reducers/counter/actions";
import { fetchNewsData } from "./redux/reducers/news/actions";
import { Button, IconButton } from "@mui/material";
import { GetApp } from "@mui/icons-material";

const App = () => {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector(state => state.counter);
  const { latestNews } = useAppSelector(state => state.news)

  const handleIncrease = () => {
    dispatch(increase)
  }

  const handleDecrease = () => {
    dispatch(decrease)
  }

  const onGetData = () => {
    dispatch(fetchNewsData)
  }

  console.log('news', latestNews);

  return (
    <section>
      <h1>Redux saga App</h1>

      <div>
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>

        <span>{count}</span>
      </div>

      <Button variant="contained" onClick={onGetData}>
        <GetApp />
      </Button>

      <ul>
        {latestNews.map((n) => (
          <p key={n.author}>{n.author}</p>
        ))}
      </ul>
    </section>
  );
};

export default App;