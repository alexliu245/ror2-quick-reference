import { Item } from "consts/itemTypes";
import { useOutsideAlerter } from "functions/outsideAlerter";
import React, { useRef } from "react";
import { Transition } from "react-transition-group";

import "./advancedItemDisplay.scss";

const duration = 150;

const sidebarStyle = {
	transition: `left ${duration}ms`
}

const sidebarTransitionStyles: { [id: string]: React.CSSProperties } = {
	entering: { left: "-320px" },
	entered: { left: 0 },
	exiting: { left: "-320px" },
	exited: { left: "-320px" }
}

interface AdvancedItemSidebarProps {
    item: Item,
	isOpen: boolean,
    closeSidebar: () => void,
}

const AdvancedItemDisplay: React.FC<AdvancedItemSidebarProps> = (
	{ item, isOpen, closeSidebar }: AdvancedItemSidebarProps
) => {
	const wrapperRef = useRef<HTMLDivElement>(null);
	useOutsideAlerter(wrapperRef, closeSidebar);

	function sidebarContent () {
		return item ? (
			<div>
				<img
					src={item.image_url}
					width={128}
					height={128}
				/>
			</div>
		) : (
			<div>
				Item is undefined
			</div>
		)
	}

	return (
		<Transition
			in={isOpen} 
			timeout={duration}
		>
			{(state) => (
				<div 
					className="sidebar-container"
					ref={wrapperRef}
					style={{
						...sidebarStyle,
						...sidebarTransitionStyles[state]
					}}
				>
					{ sidebarContent() }
				</div>
			)}
			
		</Transition>
	);
}

export default AdvancedItemDisplay;
