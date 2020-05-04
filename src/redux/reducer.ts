import {
    GlobalState,
    ActionTypes,
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    GET_DATA_FAIL,
    SUBMIT_FORM,
} from "./types";

const INITIAL_STATE: GlobalState = {
    loading: false,
    data: [],
    error: null,
    formData: {
        country: "",
        category: "",
        q: "trump",
        pageSize: 20,
    },
};

const reducer = (state = INITIAL_STATE, action: ActionTypes): GlobalState => {
    switch (action.type) {
        case GET_DATA_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null,
                //everything good with formData here?
            };
        case GET_DATA_FAIL:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload,
                //everything good with formData here?
            };
        case SUBMIT_FORM:
            return {
                ...state,
                formData: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
