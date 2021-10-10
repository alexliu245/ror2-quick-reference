import React from "react";
import MainSection from "../mainSection/mainSection";
import "./main.scss";

import { 
	bossItems, 
	equipment, 
	greenItems, 
	info, 
	lunarItems, 
	redItems, 
	whiteItems
} from "consts/item_info";

const Main: React.FC = () => {
	function buildItemArray(itemIds: string[]) {
		return itemIds.map(id => info[id]);
	}

	return (
		<div className="main-body">
			<MainSection 
				title="White Items"
				contents={ buildItemArray(whiteItems) }
			/>
			<MainSection 
				title="Green Items"
				contents={ buildItemArray(greenItems) }
			/>
			<MainSection 
				title="Red Items"
				contents={ buildItemArray(redItems) }
			/>
			<MainSection 
				title="Boss Items"
				contents={ buildItemArray(bossItems) }
			/>
			<MainSection 
				title="Lunar Items"
				contents={ buildItemArray(lunarItems) }
			/>
			<MainSection 
				title="Equipment"
				contents={ buildItemArray(equipment) }
			/>
		</div>
	);
}

export default Main;