import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '../../../services/api';
import { SignInSucess, signFailure } from './actions';
import history from '../../../services/history';
import { toast } from 'react-toastify';

export function* signIn({ payload }) {
    try {
        const { email, password } = payload;

        const response = yield call(api.post, 'sessions', { email, password });
        
        
        const { token, user } = response.data;
        console.log(token);
        
        api.defaults.headers['Authorization'] = `bearer ${token}`;
        
        yield put(SignInSucess({ token, user }));
        
        // history.push('/');
    } catch (err) {
        toast.error('Login Failure');
        yield put(signFailure());
    }
}

export function* signUp({ payload }) {
    try {
        const { email, name, password } = payload;

        yield call(api.post, 'users', {
            email,
            name,
            password,
            provider: true,
        });

        history.push('/');
        toast.success(`Wellcome ${name}, Acount created`);
    } catch (err) {
        toast.error('Subscrived Failure');
        yield put(signFailure());
    }
}

export function setToken({ payload }) {
    if (!payload) return;

    const { token } = payload.auth;
    console.log(token);

    if (token) {
        api.defaults.headers['Authorization'] = `bearer ${token}`;
    }
}

export function signOut() {
    api.defaults.headers['Authorization'] = '';
    history.push('/');
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
    takeLatest('@auth/SIGN_OUT', signOut),
]);
