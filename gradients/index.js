const _ = require('lodash')

module.exports = function ({ addUtilities, e, theme, variants }) {
    const utilities = _.map(theme('gradients', {}), (gradient, name) => {
        const type = _.isPlainObject(gradient) && gradient.hasOwnProperty('type') ? gradient.type : 'linear'
        const colors = _.isPlainObject(gradient) ? (gradient.colors || []) : gradient

        return {
            [`.bg-${e(name)}`]: {
                backgroundImage: `${type}-gradient(${colors.join(', ')})`
            }
        }
    })

    addUtilities(utilities, variants('gradients', []))
}
