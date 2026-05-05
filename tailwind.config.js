const tailwindcssAnimate = require('tailwindcss-animate')

const tailwindcss_motion = require('tailwindcss-motion')

module.exports = {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    prefix: '',
    theme: {
        screens: {
            xs: { max: '450px', min: '370px' },
            sm: { max: '450px', min: '370px' },
            md: { max: '450px', min: '370px' },
            lg: { max: '450px', min: '370px' },
            xl: { max: '450px', min: '370px' },
        },
        container: {
            center: true,
            padding: '1rem',
        },
        extend: {},
    },
    plugins: [tailwindcss_motion],
}
