import React from "react";
import "./mainSection.scss";

interface MainSectionProps {
    title: string;
    contents: string[];
}

const MainSection: React.FC<MainSectionProps> = (
	{ title, contents }: MainSectionProps
) => {
	return (
		<div className="section-body">
			<h1 className="section-title">{ title }</h1>
			{ contents.map((item, i) => (
				<div className="item-body" key={i}>
					<p>{item}</p>
				</div>
			))}
		</div>
	);
}

export default MainSection;