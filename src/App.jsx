import { useDispatch, useSelector } from 'react-redux';
import './app.css';
import {incrementCreator, decrementCreator, AsyncIncrementCreator, AsyncDecrementCreator} from "./store/countReduser";

function App() {
  const count = useSelector(state => state.countReducer.count);
  const users = useSelector(state => state.userReducer.users);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <div className="count">{count}</div>
      <div className="btns">
        <button className="btn" onClick={() => dispatch(AsyncIncrementCreator())}>ИНКРЕМЕНТ++</button>
        <button className="btn" onClick={() => dispatch(AsyncDecrementCreator())}>ДЕКРЕМЕНТ--</button>
        <button className="btn" onClick={() => {}}>ПОЛУЧИТЬ ЮЗЕРОВ-- </button>
      </div>
      <div className="users">
        {users.map((user) =>
          <div className="user">
            {user.name}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
