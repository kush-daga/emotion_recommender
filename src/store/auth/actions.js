import {
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	REGISTER_SUCESS,
	REGISTER_FAIL,
} from "./types";
import { returnErrors } from "../errors/actions";
import axios from "axios";
import { auth } from "../../assets/firebase";

//CHECK TOKEN AND LOAD USER
const register = ({ email, password }) => (dispatch) => {
	auth
		.createUserWithEmailAndPassword(email, password)
		.then((res) => {
			alert("Registered Succesfully");
			dispatch(login({ email, password }));
		})
		.catch((err) => {
			alert(err);
			dispatch({
				type: REGISTER_FAIL,
			});
		});
};

const login = ({ email, password }) => (dispatch) => {
	auth
		.signInWithEmailAndPassword(email, password)
		.then((res) => {
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.email,
			});
		})
		.catch((err) => {
			// console.log(err, err.message);
			alert(err);
			dispatch({
				type: LOGIN_FAIL,
			});
		});
};

const logoutUser = () => {
	return {
		type: LOGOUT_SUCCESS,
	};
};

export const tokenConfig = (getState) => {
	//GEt token from localstorage
	const token = getState().auth.token;

	const config = {
		headers: {
			"Content-type": "application/json",
		},
	};

	if (token) {
		config.headers["auth-token"] = token;
	}

	return config;
};

const authActions = {
	register,
	login,
	logoutUser,
};

export default authActions;
