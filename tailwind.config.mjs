/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			"colors": {
				"primary": {
					50: "#E8FCF5",
					100: "#D2F9EB",
					200: "#A5F3D6",
					300: "#78EDC2",
					400: "#4BE7AE",
					500: "#1EE198",
					600: "#18B47B",
					700: "#12875C",
					800: "#0C5A3D",
					900: "#062D1F",
					950: "#03170F"
				},
				"secondary": {
					50: "#EBE8FC",
					100: "#D7D2F9",
					200: "#AFA5F3",
					300: "#8878ED",
					400: "#604BE7",
					500: "#371EE1",
					600: "#2D18B4",
					700: "#221287",
					800: "#160C5A",
					900: "#0B062D",
					950: "#060317"
				},
				"tertiary": {
					50: "#FCE8F0",
					100: "#F9D2E0",
					200: "#F3A5C2",
					300: "#ED78A3",
					400: "#E74B84",
					500: "#E11E67",
					600: "#B41851",
					700: "#87123D",
					800: "#5A0C29",
					900: "#2D0614",
					950: "#17030A"
				},
				"quaternary": {
					50: "#F9FCE8",
					100: "#F4F9D2",
					200: "#E9F3A5",
					300: "#DDED78",
					400: "#D2E74B",
					500: "#C8E11E",
					600: "#9FB418",
					700: "#778712",
					800: "#505A0C",
					900: "#282D06",
					950: "#141703"
				}
			}
		}
	},
	plugins: [
		require('tailwindcss-patterns'),
		require('@tailwindcss/typography'),
	],

}
