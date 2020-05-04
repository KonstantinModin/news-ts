import {
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    GET_DATA_FAIL,
    ActionTypes,
    Article,
    SUBMIT_FORM,
    FormDataType,
} from "./types";

import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { GlobalState } from "./types";

export const getDataRequestAction = (): ActionTypes => ({
    type: GET_DATA_REQUEST,
});

export const getDataSuccessAction = (payload: Article[]): ActionTypes => ({
    type: GET_DATA_SUCCESS,
    payload,
});

export const getDataFailAction = (payload: object): ActionTypes => ({
    type: GET_DATA_FAIL,
    payload,
});

export const submitFormAction = (payload: FormDataType): ActionTypes => ({
    type: SUBMIT_FORM,
    payload,
});

export const getData = (): ThunkAction<
    void,
    GlobalState,
    unknown,
    Action<>
> => async (dispatch) => {
    dispatch(getDataRequestAction());
    try {
    } catch (error) {
        console.error("Something went wrong");
        dispatch(getDataFailAction(error));
    }
};
