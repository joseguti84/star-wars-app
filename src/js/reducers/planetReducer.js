import {GET_PLANETS_ERROR, GET_PLANETS_REQUEST, GET_PLANETS_SUCCESS} from "../constants/action-types";

const INITIAL_STATE = {
    isFetching: false,
    items: [],
    error: false,
    errorMessage: ''
};

export const planets = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PLANETS_REQUEST:
            return {
                ...state,
                isFetching: true,
                items: [],
                error: false,
                errorMessage: ''
            };

        case GET_PLANETS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                items: action.planets,
                error: false,
                errorMessage: ''
            };

        case GET_PLANETS_ERROR:
            return {
                ...state,
                isFetching: false,
                items: [],
                error: true,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};
