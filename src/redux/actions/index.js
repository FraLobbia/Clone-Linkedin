import { token } from "../../token";
import { endLoading, startLoading } from "../reducers/loadingReducer";

export const NAVBAR_INFO = "NAVBAR_INFO";
export const GET_PROFILI = "GET_PROFILI";
export const GET_EXPERIENCE = "GET_EXPERIENCE";
export const SET_VALUE_POST = "SET_VALUE_POST";
export const GET_POST = "GET_POST";
export const SET_ERROR = "SET_ERROR";
export const SHOW_MODAL = "SHOW_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const FORMAT_MODAL_TO_DELETE = "FORMAT_MODAL_TO_DELETE";

export const setNavbarInfo = (payload) => ({
  type: NAVBAR_INFO,
  payload,
});

export const setProfili = (payload) => ({
  type: GET_PROFILI,
  payload,
});

export const setExperience = (payload) => ({
  type: GET_EXPERIENCE,
  payload,
});

export const setValuePost = (payload) => ({
  type: SET_VALUE_POST,
  payload,
});

export const getPosts = (payload) => ({
  type: GET_POST,
  payload,
});

export const getPostsData = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(startLoading());
      // const query = getState().music.query;
      const endpoint = "https://striveschool-api.herokuapp.com/api/posts/";
      const resp = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      if (!resp.ok) {
        throw "Errore nella fetch";
      }
      const response = await resp.json();
      dispatch(getPosts(response));
      dispatch(endLoading());
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error,
      });
    }
  };
};

export const createPostsData = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(startLoading());
      const payload = getState().postData.createValue;
      const endpoint = "https://striveschool-api.herokuapp.com/api/posts/";
      const resp = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          text: payload,
        }),
      });
      if (!resp.ok) {
        throw "Errore nella fetch";
      }
      const response = await resp.json();
      console.log(response);
      // dispatch(getPosts(response));
      dispatch(endLoading());
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error,
      });
    }
  };
};

export const deletePostsData = (postId) => {
  return async (dispatch, getState) => {
    try {
      dispatch(startLoading());
      const endpoint = `https://striveschool-api.herokuapp.com/api/posts/${postId}`;
      const resp = await fetch(endpoint, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      if (resp.ok) {
        console.log(resp);
        dispatch(endLoading());
      } else {
        throw "Errore nella fetch";
      }
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error,
      });
    }
  };
};

export const showModal = () => ({
  type: SHOW_MODAL,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const formatModalToDelete = (title, body, id) => ({
  type: FORMAT_MODAL_TO_DELETE,
  payload: { title, body, id },
});

export const getProfili = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(startLoading());
      let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      if (!response.ok) {
        throw "Errore nella fetch";
      }
      let data = await response.json();
      dispatch(setProfili(data));
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error,
      });
    }
  };
};

export const editProfile = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(startLoading());
      const payload = getState().profilo.info;
      const endpoint = "https://striveschool-api.herokuapp.com/api/profile/";
      const resp = await fetch(endpoint, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          // _id: "",
          // name: "",
          // surname: "",
          // email: "",
          // username: "",
          // title: "",
          // bio: "",
          // area: "",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkMxdAhyChD3MZ-hApJrhizOa6k_QiThzlkVqq47bdwRTimZ7euGxSDpeu-CQOE9sqIc0&usqp=CAU",
        }),
      });
      if (!resp.ok) {
        throw "Errore nella fetch";
      }
      const response = await resp.json();
      console.log(response);
      // dispatch(getPosts(response));
      dispatch(endLoading());
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error,
      });
    }
  };
};
