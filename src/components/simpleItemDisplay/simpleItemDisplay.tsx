import React, { useState } from "react";
import "./simpleItemDisplay.scss";
import { Item } from "consts/item_info";

interface SimpleItemDisplayProps {
    item: Item,
}

const SimpleItemDisplay: React.FC<SimpleItemDisplayProps> = (
	{ item }: SimpleItemDisplayProps
) => {
	const [isHovered, setHovered] = useState(false);

	function onHover(value: boolean) {
		setHovered(value);
	}

	return (
		<div className="item-parent-container">
			{ isHovered ? (
				<div className="item-tooltip-container">
					<div className="item-name">
						{ item.name }
					</div>
					<div className="item-description">
						{ item.description }
					</div>
					{ item.challenge ? (
						<div className="item-challenge">
							{ item.challenge }
						</div>
					) : null}
				</div>
			) : null}
			<div 
				className="item-image"
				onMouseEnter={() => onHover(true)}
				onMouseLeave={() => onHover(false)}    
			>
				<img
					src={ item.image_url }
					width={64}
					height={64}
				/>
			</div>
		</div>
	)
}

export default SimpleItemDisplay;