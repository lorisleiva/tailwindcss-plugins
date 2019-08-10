const _ = require('lodash')

module.exports = function ({ addUtilities, e, theme }) {
    const utilities = _.map(theme('keyframes', {}), (keyframe, name) => {
        return {
            [`@keyframes ${e(name)}`]: keyframe
        }
    })

    addUtilities(utilities)
}
