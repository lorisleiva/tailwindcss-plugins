const map = require('lodash/map')
const isObject = require('lodash/isObject')

module.exports = function ({ gradients, variants }) {
    return function ({ addUtilities, e }) {
        const utilities = map(gradients, (gradient, name) => {

            const type = isObject(gradient) && gradient.hasOwnProperty('type') ? gradient.type : 'linear'
            const colors = isObject(gradient) ? (gradient.colors || []) : gradient

            return {
                [`.bg-${e(name)}`]: {
                    backgroundImage: `${type}-gradient(${colors.join(', ')})`
                }
            }
        })

        addUtilities(utilities, variants)
    }
}
