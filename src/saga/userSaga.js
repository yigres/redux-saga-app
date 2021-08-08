import { put, takeEvery, call } from "redux-saga/effects"
import { FETCH_UESERS, setUsers } from "../store/userReduser";

const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')

function* fetchUserWorker() {
  const data = yield call(fetchUsersFromApi);
  const json = yield call(() => new Promise(res => res(data.json())));
  yield put(setUsers(json));
}

export function* userWatcher() {
  yield takeEvery(FETCH_UESERS, fetchUserWorker);
}
