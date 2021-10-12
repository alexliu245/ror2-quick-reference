import React, { useState } from "react";
import MainSection from "../mainSection/mainSection";
import "./main.scss";

import { info } from "consts/itemInfo";
import { itemGroups } from "consts/itemGroups";
import { Item } from "consts/itemTypes";
import { Transition } from "react-transition-group";

import AdvancedItemDisplay from "components/advancedItemDisplay/advancedItemDisplay";



const Main: React.FC = () => {
	const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
	const [sidebarItem, setSidebarItem] = useState<Item>(
		info["57-leaf-clover"]
	);

	function buildItemArray(itemIds: string[]) {
		return itemIds.map(id => info[id]);
	}

	function itemSelected(item: Item) {
		setSidebarOpen(true);
		setSidebarItem(item);
	}

	return (
		<div className="main-grid">
			{sidebarOpen ? (
				<AdvancedItemDisplay
					item={sidebarItem}
					closeSidebar={() => setSidebarOpen(false)}
				/>
			): null}
			<MainSection
				title="White Items"
				contents={ buildItemArray(itemGroups["whiteItems"]) }
				itemSelected={itemSelected}
			/>
			<MainSection
				title="Green Items"
				contents={ buildItemArray(itemGroups["greenItems"]) }
				itemSelected={itemSelected}
			/>
			<MainSection
				title="Red Items"
				contents={ buildItemArray(itemGroups["redItems"]) }
				itemSelected={itemSelected}
			/>
			<MainSection
				title="Boss Items"
				contents={ buildItemArray(itemGroups["bossItems"]) }
				itemSelected={itemSelected}
			/>
			<MainSection
				title="Lunar Items"
				contents={ buildItemArray(itemGroups["lunarItems"]) }
				itemSelected={itemSelected}
			/>
			<MainSection
				title="Equipment"
				contents={ buildItemArray(itemGroups["equipment"]) }
				itemSelected={itemSelected}
			/>
		</div>
	);
}

export default Main;