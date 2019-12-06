import { all } from 'redux-saga/effects';

import chat from './chat/sagas';
import auth from './auth/sagas';
import user from './user/sagas';

export default function* rootSaga() {
    yield all([auth, user, chat]);
}
