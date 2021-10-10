import React from "react";
import "./mainSection.scss";

import SimpleItemDisplay from "components/simpleItemDisplay/simpleItemDisplay";
import { Item } from "consts/item_info";

interface MainSectionProps {
    title: string;
    contents: Item[];
}

const MainSection: React.FC<MainSectionProps> = (
	{ title, contents }: MainSectionProps
) => {
	return (
		<div className="section-body">
			<h1 className="section-title">{ title }</h1>
			<div className="item-section-container">
				{ contents.map((item, i) => (
					<div key={i}>
						<SimpleItemDisplay
							item={ item }
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default MainSection;