/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: colors.indigo,
				info: colors.sky,
				success: colors.teal,
				warning: colors.amber,
				danger: colors.rose,
				muted: {
				...colors.slate,
				1000: "#0a101f",
				},
				slate: {
				1000: "#0a101f",
				},
				gray: {
				1000: "#080c14",
				},
				zinc: {
				1000: "#101012",
				},
				neutral: {
				1000: "#080808",
				},
				stone: {
				1000: "#0f0d0c",
				},
			}
		},
	},
	plugins: [],
}
