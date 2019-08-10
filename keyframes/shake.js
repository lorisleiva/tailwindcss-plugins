module.exports = function ({ addUtilities }) {
    addUtilities({
        '@keyframes shake': {
            '8%, 41%': { 'transform': 'translateX(-10px)' },
            '25%, 58%': { 'transform': 'translateX(10px)' },
            '75%': { 'transform': 'translateX(-5px)' },
            '92%': { 'transform': 'translateX(5px)' },
            '0%, 100% ': { 'transform': 'translateX(0)' },
        }
    })
}
