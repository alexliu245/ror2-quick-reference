import React, { useState } from "react";
import MainSection from "../mainSection/mainSection";
import "./main.scss";

import { info } from "consts/itemInfo";
import { itemGroups } from "consts/itemGroups";
import { Item } from "consts/itemTypes";

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
			<AdvancedItemDisplay
				item={sidebarItem}
				isOpen={sidebarOpen}
				closeSidebar={() => setSidebarOpen(false)}
			/>
			{ Object.keys(itemGroups).map((key, i) => {
				const group = itemGroups[key];
				return (
					<div key={i}>
						<MainSection
							title={group.name}
							contents={buildItemArray(group.items)}
							itemSelected={itemSelected}
						/>
					</div>
				)	
			})}
		</div>
	);
}

export default Main;