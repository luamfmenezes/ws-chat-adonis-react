const INITIAL_STATE = {
    profile: null,
};

export default function auth(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@auth/SIGN_IN_SUCESS':
            return { profile: action.payload.user };
        case '@user/UPDATE_PROFILE_SUCESS':
            return { profile: action.payload.user };
        default:
            return state;
    }
}
