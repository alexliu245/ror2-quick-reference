import React from "react";
import MainSection from "../mainSection/mainSection";
import "./main.scss";

import { info } from "consts/itemInfo";
import { itemGroups } from "consts/itemGroups";

const Main: React.FC = () => {
	function buildItemArray(itemIds: string[]) {
		return itemIds.map(id => info[id]);
	}

	return (
		<div className="main-body">
			<MainSection 
				title="White Items"
				contents={ buildItemArray(itemGroups["whiteItems"]) }
			/>
			<MainSection 
				title="Green Items"
				contents={ buildItemArray(itemGroups["greenItems"]) }
			/>
			<MainSection 
				title="Red Items"
				contents={ buildItemArray(itemGroups["redItems"]) }
			/>
			<MainSection 
				title="Boss Items"
				contents={ buildItemArray(itemGroups["bossItems"]) }
			/>
			<MainSection 
				title="Lunar Items"
				contents={ buildItemArray(itemGroups["lunarItems"]) }
			/>
			<MainSection 
				title="Equipment"
				contents={ buildItemArray(itemGroups["equipment"]) }
			/>
		</div>
	);
}

export default Main;