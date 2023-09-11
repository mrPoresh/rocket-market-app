function withOpacity(variableName) {
	return ({ opacityValue }) => {
	  	if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`;
	  	}
	  	return `rgb(var(${variableName}))`;
	};
};
  
/** @type {import('tailwindcss').Config} */
  	module.exports = {
		content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
		theme: {
			textColor: {
				skin: {
					default: withOpacity("--text-default"),
					accent: withOpacity("--text-accent"),
				},
			},
			backgroundColor: {
				skin: {
					default: withOpacity("--default"),
					accent: withOpacity("--accent"),
					primary: withOpacity("--primary"),
					warn: withOpacity("--warn"),
					white: withOpacity("--white"),
				},
			},
			fontFamily: {
				mono: ["Ubuntu", "cursive"],
			},
			fontSize: {
				'h1': '2.5rem', 
				'h2': '2rem',   
				'h3': '1.75rem', 
				'h4': '1.5rem',  
				'h5': '1.30rem',
				'h6': '1.20rem',
				'h7': '1rem'
			},
		},
	plugins: [require("@tailwindcss/typography")],
};
