import { Item } from "consts/itemTypes";
import { useOutsideAlerter } from "functions/outsideAlerter";
import React, { useRef } from "react";

import "./advancedItemDisplay.scss";

interface AdvancedItemDisplayProps {
    item: Item,
    closeSidebar: () => void,
}

const AdvancedItemDisplay: React.FC<AdvancedItemDisplayProps> = (
	{ item, closeSidebar }: AdvancedItemDisplayProps
) => {
	const wrapperRef = useRef<HTMLDivElement>(null);
	useOutsideAlerter(wrapperRef, closeSidebar);

	return (
		<div 
			className="sidebar-container"
			ref={wrapperRef}
		>
			{ item.name }
		</div>

	);
}

export default AdvancedItemDisplay;