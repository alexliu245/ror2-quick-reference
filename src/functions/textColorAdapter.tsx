import React from "react";

// custom text adapter to display color.
// format: "this is <red>edited</red> text"
// will return a div containing multiple <p> tags with the right colors. 
// Colors can be found in colors.scss

const ColorMapping: Record<string, string> = {
	"red": "rgb(221, 134, 106)",
	"gre": "rgb(142, 210, 98)",
	"gra": "rgb(117, 126, 143)",
	"blu": "rgb(157, 203, 225)",
	"yel": "rgb(224, 192, 121)",
	"sta": "rgb(255, 255, 255)",
}

export function getColoredText(text: string[]): JSX.Element {
	return (
		<p>
			{
				text.map((t, i) => {
					const splitText = t.split("::");
					const color = splitText[0];
					return (
						<span 
							style={{ color: ColorMapping[color]}}
							key={i}
						>
							{splitText[1]}
						</span>
					);
				})
			}
		</p>
	);
}