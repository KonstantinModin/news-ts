export interface Article {
    source: {
        id: string;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface FormDataType {
    country: string;
    category: string;
    q: string;
    pageSize: number;
}

export interface GlobalState {
    loading: boolean;
    data: Article[] | [];
    error: object | null;
    formData: FormDataType;
}

export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAIL = "GET_DATA_FAIL";

interface GetDataRequestAction {
    type: typeof GET_DATA_REQUEST;
}

interface GetDataSuccessAction {
    type: typeof GET_DATA_SUCCESS;
    payload: Article[];
}

interface GetDataFailAction {
    type: typeof GET_DATA_FAIL;
    payload: object;
}

export const SUBMIT_FORM = "SUBMIT_FORM";

interface SubmitFormAction {
    type: typeof SUBMIT_FORM;
    payload: FormDataType;
}

export type ActionTypes =
    | GetDataRequestAction
    | GetDataSuccessAction
    | GetDataFailAction
    | SubmitFormAction;
