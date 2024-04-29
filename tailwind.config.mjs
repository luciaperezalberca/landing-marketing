/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
			  'primary-blue': '#336091',
			  'primary-orange': '#FF9444',
			  'primary-lightblue': '#347AC6',
			  'secondary-blue': '#8BB6E4',
			},
		}
	},
	plugins: [],
}
