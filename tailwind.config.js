/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			inherit: 'inherit',
			base: {
				50: 'var(--base-50)'
			},
			neutral: {
				200: 'var(--neutral-200)',
				600: 'var(--neutral-600)',
				800: 'var(--neutral-800)'
			},
			primary: {
				100: 'var(--primary-100)',
				800: 'var(--primary-800)'
			},
			secondary: {
				100: 'var(--secondary-100)',
				800: 'var(--secondary-800)'
			}
		},
		fontFamily: {
			serif: ['Young Serif', 'serif'],
			sans: ['Outfit', 'sans-serif']
		},
		screens: {
			md: '40rem'
		},
		extend: {}
	},

	plugins: []
};
