/* eslint-disable max-len */

export enum ItemRarities {
	WHITE,
	GREEN,
	RED,
	YELLOW,
	BLUE,
	EQUIPMENT
}

// const file to store item stats in
export interface Item {
	name: string,
    description: string,
	image_url: string,
	rarity: ItemRarities,
    story_description?: string,
    challenge?: string,
}

export const info: Record<string, Item> = {
	"ap_rounds" : {
		name: "Armor-Piercing Rounds",
		description: "Deal and additional 20% damage (+20% per stack) to bosses.",
		image_url: "https://minmax.gg/riskofrain/static/616721d973937efcfd66f0559fd2baee/ea22a/armor-piercing-rounds_5ee69700-9091-11eb-a1db-b14d6457f763.png",
		rarity: ItemRarities.WHITE,
		story_description: "This is a story.",
		challenge: "Complete a Teleporter event."
	},
	"test1" : {
		name: "Armor-Piercing Rounds",
		description: "Deal and additional 20% damage (+20% per stack) to bosses.",
		image_url: "https://minmax.gg/riskofrain/static/616721d973937efcfd66f0559fd2baee/ea22a/armor-piercing-rounds_5ee69700-9091-11eb-a1db-b14d6457f763.png",
		rarity: ItemRarities.WHITE,
		story_description: "This is a story.",
		challenge: "Complete a Teleporter event."
	},	
	"test2" : {
		name: "Armor-Piercing Rounds",
		description: "Deal and additional 20% damage (+20% per stack) to bosses.",
		image_url: "https://minmax.gg/riskofrain/static/616721d973937efcfd66f0559fd2baee/ea22a/armor-piercing-rounds_5ee69700-9091-11eb-a1db-b14d6457f763.png",
		rarity: ItemRarities.WHITE,
		story_description: "This is a story.",
		challenge: "Complete a Teleporter event."
	},	
	"test3" : {
		name: "Armor-Piercing Rounds",
		description: "Deal and additional 20% damage (+20% per stack) to bosses.",
		image_url: "https://minmax.gg/riskofrain/static/616721d973937efcfd66f0559fd2baee/ea22a/armor-piercing-rounds_5ee69700-9091-11eb-a1db-b14d6457f763.png",
		rarity: ItemRarities.WHITE,
		story_description: "This is a story.",
		challenge: "Complete a Teleporter event."
	},	
	"test4" : {
		name: "Armor-Piercing Rounds",
		description: "Deal and additional 20% damage (+20% per stack) to bosses.",
		image_url: "https://minmax.gg/riskofrain/static/616721d973937efcfd66f0559fd2baee/ea22a/armor-piercing-rounds_5ee69700-9091-11eb-a1db-b14d6457f763.png",
		rarity: ItemRarities.WHITE,
		story_description: "This is a story.",
		challenge: "Complete a Teleporter event."
	},	
	"test5" : {
		name: "Armor-Piercing Rounds",
		description: "Deal and additional 20% damage (+20% per stack) to bosses.",
		image_url: "https://minmax.gg/riskofrain/static/616721d973937efcfd66f0559fd2baee/ea22a/armor-piercing-rounds_5ee69700-9091-11eb-a1db-b14d6457f763.png",
		rarity: ItemRarities.WHITE,
		story_description: "This is a story.",
		challenge: "Complete a Teleporter event."
	},	
	"test6" : {
		name: "Armor-Piercing Rounds",
		description: "Deal and additional 20% damage (+20% per stack) to bosses.",
		image_url: "https://minmax.gg/riskofrain/static/616721d973937efcfd66f0559fd2baee/ea22a/armor-piercing-rounds_5ee69700-9091-11eb-a1db-b14d6457f763.png",
		rarity: ItemRarities.WHITE,
		story_description: "This is a story.",
		challenge: "Complete a Teleporter event."
	},	
	"test7" : {
		name: "Armor-Piercing Rounds",
		description: "Deal and additional 20% damage (+20% per stack) to bosses.",
		image_url: "https://minmax.gg/riskofrain/static/616721d973937efcfd66f0559fd2baee/ea22a/armor-piercing-rounds_5ee69700-9091-11eb-a1db-b14d6457f763.png",
		rarity: ItemRarities.WHITE,
		story_description: "This is a story.",
		challenge: "Complete a Teleporter event."
	},	
	"test8" : {
		name: "Armor-Piercing Rounds",
		description: "Deal and additional 20% damage (+20% per stack) to bosses.",
		image_url: "https://minmax.gg/riskofrain/static/616721d973937efcfd66f0559fd2baee/ea22a/armor-piercing-rounds_5ee69700-9091-11eb-a1db-b14d6457f763.png",
		rarity: ItemRarities.WHITE,
		story_description: "This is a story.",
		challenge: "Complete a Teleporter event."
	},	
	"test9" : {
		name: "Armor-Piercing Rounds",
		description: "Deal and additional 20% damage (+20% per stack) to bosses.",
		image_url: "https://minmax.gg/riskofrain/static/616721d973937efcfd66f0559fd2baee/ea22a/armor-piercing-rounds_5ee69700-9091-11eb-a1db-b14d6457f763.png",
		rarity: ItemRarities.WHITE,
		story_description: "This is a story.",
		challenge: "Complete a Teleporter event."
	},		
	"test10" : {
		name: "Armor-Piercing Rounds",
		description: "Deal and additional 20% damage (+20% per stack) to bosses.",
		image_url: "https://minmax.gg/riskofrain/static/616721d973937efcfd66f0559fd2baee/ea22a/armor-piercing-rounds_5ee69700-9091-11eb-a1db-b14d6457f763.png",
		rarity: ItemRarities.WHITE,
		story_description: "This is a story.",
		challenge: "Complete a Teleporter event."
	},	
	"test11" : {
		name: "Armor-Piercing Rounds",
		description: "Deal and additional 20% damage (+20% per stack) to bosses.",
		image_url: "https://minmax.gg/riskofrain/static/616721d973937efcfd66f0559fd2baee/ea22a/armor-piercing-rounds_5ee69700-9091-11eb-a1db-b14d6457f763.png",
		rarity: ItemRarities.WHITE,
		story_description: "This is a story.",
		challenge: "Complete a Teleporter event."
	},		
	"lens_makers_glasses" : {
		name: "Len's Makers Glasses",
		description: "Your attacks have a 10% (+10% per stack) chance to 'Critically Strike', dealing double damage.",
		image_url: "https://minmax.gg/riskofrain/static/a72ee9410a27e7cccca11aabe5b5f659/ea22a/lens-makers-glasses_5eeb7900-9091-11eb-a1db-b14d6457f763.png",
		rarity: ItemRarities.WHITE,
		story_description: "This is a story.",
	},
}

export const whiteItems: string[] = [
	"ap_rounds",
	"test1",
	"test2",
	"test3",
	"test4",
	"test5",
	"test6",
	"test7",
	"test8",
	"test9",
	"test10",
	"test11",
	"lens_makers_glasses",
]