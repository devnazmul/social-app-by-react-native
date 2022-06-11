import { JWT_CHANGE } from '../constants';

export const changeJwt = (jwt) => {
    return {
        type: JWT_CHANGE,
        payload: jwt
    }
}