import { NAVBAR_INFO } from "../actions";

const InitialState = {
	info: {
		_id: "",
		name: "",
		surname: "",
		email: "",
		username: "",
		title: "",
		bio: "",
		area: "",
		image: "",
	},
};

export const profileReducers = (state = InitialState, action) => {
	switch (action.type) {
		case NAVBAR_INFO:
			return {
				...state,
				info: action.payload,
			};
		default:
			return state;
	}
};
