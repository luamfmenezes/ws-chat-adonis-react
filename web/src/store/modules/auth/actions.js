export const SignInRequest = ({ email, password }) => {
    return {
        type: '@auth/SIGN_IN_REQUEST',
        payload: { email, password },
    };
};

export const SignInSucess = ({token, user}) => {
    return {
        type: '@auth/SIGN_IN_SUCESS',
        payload: { token, user },
    };
};

export const SignUpRequest = ({name, email, password}) => {
    return {
        type: '@auth/SIGN_UP_REQUEST',
        payload: { name, email, password },
    };
};

export const signFailure = () => {
    return {
        type: '@auth/SIGN_FAILURE',
    };
};

export const signOut = () => {
    return {
        type: '@auth/SIGN_OUT',
    };
};
