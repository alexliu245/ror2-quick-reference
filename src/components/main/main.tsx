import React from "react";
import MainSection from "../mainSection/mainSection";
import "./main.scss";

import { info, whiteItems } from "consts/item_info";

const Main = () => {
	function buildItemArray(itemIds: string[]) {
		return itemIds.map(id => info[id]);
	}

	return (
		<div className="main-body">
			<MainSection 
				title="Common Items"
				contents={ buildItemArray(whiteItems) }
			/>
			<p className="main-body-header-text">TESTING</p>
		</div>
	);
}

export default Main;