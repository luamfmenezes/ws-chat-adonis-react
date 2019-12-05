import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '../../../services/api';
import { toast } from 'react-toastify';

import { updateProfileSucess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
    try {
        const { name, email, avatar_id, ...rest } = payload;

        const profile = Object.assign(
            { name, email, avatar_id },
            rest.oldPassword ? rest : {}
        );

        const response = yield call(api.put, 'users', profile);

        toast.success('Profile saved with sucess !');

        yield put(updateProfileSucess({ user: response.data }));
    } catch (err) {
        toast.error('Error when try update profile !');
        yield put(updateProfileFailure());
    }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
