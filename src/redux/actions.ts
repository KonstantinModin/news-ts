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

import axios from "axios";

const getDataRequestAction = (): ActionTypes => ({
    type: GET_DATA_REQUEST,
});

const getDataSuccessAction = (payload: Article[]): ActionTypes => ({
    type: GET_DATA_SUCCESS,
    payload,
});

const getDataFailAction = (payload: object): ActionTypes => ({
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
    Action<string>
> => async (dispatch, getState) => {
    dispatch(getDataRequestAction());
    try {
        const { formData } = getState();

        const params = Object.entries(formData)
            .filter((e) => ("" + e[1]).trim())
            .map((a) => a.join("="))
            .join("&");

        // todo fetch config
        const url = `https://newsapi.org/v2/top-headlines?${params}&apiKey=9c84424f051843108bca2fea4726ae0c`;

        const response = await axios.get(url);
        // console.log(response);
        dispatch(getDataSuccessAction(response.data.articles));
    } catch (error) {
        console.error("Something went wrong");
        dispatch(getDataFailAction(error));
    }
};
