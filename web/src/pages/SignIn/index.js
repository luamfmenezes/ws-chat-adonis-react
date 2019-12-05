import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { SignInRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid Email')
        .required('Email is necessary'),
    password: Yup.string().required('Password is necessary'),
});

export default function SignIn() {
    const dispatch = useDispatch();

    const loading = useSelector(state => state.auth.loading);

    const handleSubmit = ({ email, password }) => {
        dispatch(SignInRequest({ email, password }));
    };

    return (
        <>
            {/* <img src={require('../../assets/logo.svg')} alt="logo" /> */}
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="email" type="email" placeholder="Your e-mail" />
                <Input
                    name="password"
                    type="password"
                    placeholder="Your secret key"
                />
                <button type="submit">
                    {loading ? 'Loading...' : 'Login'}
                </button>
                <Link to="/register">Create free acount</Link>
            </Form>
        </>
    );
}
