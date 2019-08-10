module.exports = function ({ addUtilities }) {
    addUtilities({
        '@keyframes spin': {
            'from': { 'transform': 'rotate(0deg)' },
            'to': { 'transform': 'rotate(360deg)' },
        }
    })
}
