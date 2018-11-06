const isPlainObject = require('lodash/isPlainObject')

let simulate = plugin => {
    let added = {
        utilities: {},
        components: {},
    }

    let tailwindSimilator = {
        e: name => name,
        addUtilities: utilities => isPlainObject(utilities)
            ? Object.assign(added.utilities, utilities)
            : utilities.forEach(u => Object.assign(added.utilities, u)),
        addComponents: components => isPlainObject(components)
            ? Object.assign(added.components, components)
            : components.forEach(c => Object.assign(added.components, c)),
    }

    plugin(tailwindSimilator)

    return added
}

module.exports = {
    simulate
}
