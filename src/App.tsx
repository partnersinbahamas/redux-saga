import { useAppDispatch } from "./redux/hooks";
import { useAppSelector } from "./redux/hooks";
import { increase, decrease } from "./redux/reducers/counter/actions";

const App = () => {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector(state => state.counter);

  const handleIncrease = () => {
    dispatch(increase)
  }

  const handleDecrease = () => {
    dispatch(decrease)
  }

  return (
    <section>
      <h1>Redux saga App</h1>

      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
      <span>{count}</span>
    </section>
  );
};

export default App;