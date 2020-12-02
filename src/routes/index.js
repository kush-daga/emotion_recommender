import React from "react";
import { Switch } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import Route from "./Route";

const Routes = () => {
	return (
		<div style={{ overflowX: "hidden" }}>
			<Switch>
				<Route exact path="/" isPrivate component={Dashboard}></Route>
				<Route exact path="/login" isLoginRoute component={Login} />
			</Switch>
		</div>
	);
};

export default Routes;
