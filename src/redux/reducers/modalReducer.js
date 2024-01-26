import { CLOSE_MODAL, FORMAT_MODAL_TO_DELETE, SHOW_MODAL } from "../actions";

const InitialState = {
	show: false,
	title: "",
	body: "",
	confirmText: "Conferma",
	id: "",
};

export const modalReducer = (state = InitialState, action) => {
	switch (action.type) {
		case SHOW_MODAL:
			return {
				...state,
				show: true,
			};

		case CLOSE_MODAL:
			// qui resetto tutti i valori del mio modale quando viene chiuso per evitare di lasciare dati non voluti
			return {
				...state,
				show: false,
				title: "",
				body: "",
				id: "",
			};
		case FORMAT_MODAL_TO_DELETE:
			// qui setto nello stato dei valori con cui vado a riempire il mio modale ed insieme lo vado a mostrare tramite "show"
			// ogni property viene settata attraverso il payload con una sintassi di questo tipo:  "payload: { title, body, id }", quindi poi qui sotto con la dot notation vado ad ottenerlo
			return {
				...state,
				title: action.payload.title,
				body: action.payload.body,
				id: action.payload.id,
				show: true,
			};
		default:
			return state;
	}
};
