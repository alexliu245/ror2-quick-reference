import React from "react";
import "./App.scss";

import Header from "components/header/header";
import Main from "components/main/main";
import Footer from "components/footer/footer";

const App = () => {
	return (
		<div className="main-app">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
