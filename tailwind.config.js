module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
    },
    purge: false,
    theme: {
        fontFamily: {
            title: ['Arvo', 'serif'],
            body: ['Lato', 'sans-serif'],
        },
    },
    variants: {},
    plugins: [require('@tailwindcss/typography')],
}
