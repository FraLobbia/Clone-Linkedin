import { GET_POST, SET_VALUE_POST } from "../actions";

const InitialState = {
	create: "",
	posts: [],
};

export const postReducer = (state = InitialState, action) => {
	switch (action.type) {
		case SET_VALUE_POST:
			return {
				...state,
				createValue: action.payload,
			};
		case GET_POST:
			return {
				...state,
				posts: action.payload,
			};
		default:
			return state;
	}
};
