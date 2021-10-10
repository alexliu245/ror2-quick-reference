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
    description: string[],
	image_url: string,
	rarity: ItemRarities,
    challenge?: string,
	scaling?: string,
	cooldown?: number,
	proc_coefficient?: string,
}