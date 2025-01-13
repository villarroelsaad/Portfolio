/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: {
				pro: "#0f1115",
				a: "#13151a"
			},
			colors: {
				bg:"#0f1115"
			},
				keyframes: {
				  blur: {
					' 0%': { transform: 'scale(0);filter:blur(12px);opacity:0' },
					'100%': { transform: 'scale(1);filter:blur(0);opacity:1' }
				  },
				  slideleft: {
					'0%': { transform: ' translateX(75px)' },
					'100%': { transform: ' translateX(-75px)' }
				  },
				  slideRigth: {
					'0%': { transform: ' translateX(75px)' },
					'100%': { transform: ' translateX(-75px)' }
				  },
			
			},
			animation: {
				blur: 'blur-in-expand 0.6s linear both',
				slideleft: 'slide-left 0.4s linear both',
				slideRigth: 'slide-Rigth 0.4s linear both'
			  },
		},
	},
	plugins: [],
}
