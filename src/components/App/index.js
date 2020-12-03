import React from "react";
import history from "../../services/history";
import Routes from "../../routes";
import { HashRouter as Router } from "react-router-dom";

function App() {
	// const [authenticated, setAuthenticated] = React.useState(false);
	return (
		<div>
			<Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
				<Routes />
			</Router>
		</div>
	);
}

export default App;
