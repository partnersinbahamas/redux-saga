import { useAppDispatch } from "./redux/hooks";
import { useAppSelector } from "./redux/hooks";
import * as testActions from './redux/reducers/text';

const App = () => {
  const dispatch = useAppDispatch();
  const test = useAppSelector(state => state.test);

  return (
    <section>
      <h1>Redux saga App</h1>

      <button onClick={() => dispatch(testActions.increace())}>+</button>
      <button onClick={() => dispatch(testActions.decreace())}>-</button>
      <span>Test: {test}</span>
    </section>
  );
};

export default App;