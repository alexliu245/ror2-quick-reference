import React from "react";
import MainSection from "./mainSection/mainSection";
import "./main.scss";

const Main = () => {
	return (
		<div className="main-body">
			<MainSection 
				title="Common Items"
				contents={["item1", "item2"]}
			/>
			<p className="main-body-header-text">TESTING</p>
		</div>
	);
}

export default Main;