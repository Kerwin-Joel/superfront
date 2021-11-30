import { types } from '../types/types';

const initialState = {
    client: {
        name:'',
        lastName:'',
        age:'',
        bornDate:'',
    }
}

export const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.setClient:
            return {
                ...state,
                client: action.payload
            }
        default:
            return state;
    }
}
