import { GET_EXPERIENCE } from "../actions";

const InitialState = {
	experience: [],
};

export const experienceReducer = (state = InitialState, action) => {
	switch (action.type) {
		case GET_EXPERIENCE:
			return {
				...state,
				experience: action.payload,
			};
		default:
			return state;
	}
};
