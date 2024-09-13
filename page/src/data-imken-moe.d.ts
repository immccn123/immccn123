declare module "https://data.imken.moe/links.js" {
	export interface Link {
		name: string;
		url: string;
		description: string;
		avatar: string;
	}

	const links: Link[];
	export default links;
}
