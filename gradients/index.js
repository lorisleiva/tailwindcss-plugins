const mapObject = (obj, fn) => Object.keys(obj).map(key => fn(obj[key], key, obj));
const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;

module.exports = function ({ gradients, variants }) {
    return function ({ addUtilities, e }) {
        const utilities = mapObject(gradients, (gradient, name) => {

            const type = isPlainObject(gradient) && gradient.hasOwnProperty('type') ? gradient.type : 'linear'
            const colors = isPlainObject(gradient) ? (gradient.colors || []) : gradient

            return {
                [`.bg-${e(name)}`]: {
                    backgroundImage: `${type}-gradient(${colors.join(', ')})`
                }
            }
        })

        addUtilities(utilities, variants)
    }
}
