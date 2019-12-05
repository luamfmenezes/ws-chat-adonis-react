const INITIAL_STATE = {
    token: null,
    signed: false,
    loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@auth/SIGN_IN_REQUEST':
            return { signed: false, token: null, loading: true };
        case '@auth/SIGN_IN_SUCESS':
            return {
                signed: true,
                token: action.payload.token,
                loading: false,
            };
        case '@auth/SIGN_FAILURE':
            return { signed: false, token: null, loading: false };
        case '@auth/SIGN_OUT':
            return { signed: false, token: null, loading: false };
        default:
            return state;
    }
}
