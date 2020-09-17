import {GET_PLANETS_REQUEST} from "../constants/action-types";
import {GET_PLANETS_SUCCESS} from "../constants/action-types";
import {GET_PLANETS_ERROR} from "../constants/action-types";
import api from '../api/api';

export const getPlanets = () => async (dispatch) => {
    dispatch({
        type: GET_PLANETS_REQUEST
    });

    try {
        const {data} = await api.get(`/planets`);

        dispatch({
            type: GET_PLANETS_SUCCESS,
            planets: data.results
        });

    } catch (err) {
        dispatch({
            type: GET_PLANETS_ERROR,
            payload: err
        });
    }
};
