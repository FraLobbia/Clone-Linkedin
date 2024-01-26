import { GET_PROFILI } from "../actions";

const InitialState = {
	profili: [],
};

export const multiProfiliReducers = (state = InitialState, action) => {
	switch (action.type) {
		case GET_PROFILI:
			console.log(action.payload);
			return {
				...state,
				profili: action.payload,
			};
		default:
			return state;
	}
};
