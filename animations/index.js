const _ = require('lodash')

module.exports = function ({ addUtilities, e, theme, variants }) {
    const utilities = _.map(theme('animations', {}), (animation, name) => {
        return {
            [`.${e(name)}`]: {
                'animation': animation,
            }
        }
    })

    addUtilities(utilities, variants('animations', []))
}
