import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input, Scope } from '@rocketseat/unform';
import * as Yup from 'yup';
import {SignUpRequest} from '../../store/modules/auth/actions';

import {FiUserPlus} from 'react-icons/fi';

const schema = Yup.object().shape({
    name: Yup.string().required('Name is necessary'),
    email: Yup.string()
        .email('Invalid Email')
        .required('Email is necessary'),
    password: Yup.string()
        .min(6, 'The password have to contain at least 6 caracters')
        .required('Password is necessary'),
});

export default function SignUp() {
    const dispatch = useDispatch();
    const handleSubmit = ({ email, name, password }) => {
        dispatch(SignUpRequest({ email, name, password }));
    };
    return (
        <>
            <FiUserPlus color="#fff" size={120}/>
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Nome completo" />
                <Input name="email" type="email" placeholder="Seu e-mail" />
                <Input
                    name="password"
                    type="password"
                    placeholder="Sua senha secreta"
                />

                <button type="submit">Create</button>
                <Link to="/">Já possuo uma conta</Link>
            </Form>
        </>
    );
}
