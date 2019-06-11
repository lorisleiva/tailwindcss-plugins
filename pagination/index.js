const defaultConfig = (color) => ({
    wrapper: {
        'display': 'flex',
        'justify-content': 'center',
        'list-style': 'none',
        'padding': '0',
    },
    link: {
        'padding': '.75rem',
        'display': 'block',
        'text-decoration': 'none',
        'border-top-width': '1px',
        'border-left-width': '1px',
        'border-bottom-width': '1px',
        'background-color': '#ffffff',
        'color': color,
    },
    linkHover: {
        'background-color': '#f1f5f8',
    },   
    linkActive: {
        'background-color': color,
        'border-color': color,
        'color': '#ffffff'
    },
    linkDisabled: {
        'background-color': '#f1f5f8',
        'color': '#8795a1',
    },
    linkFirst: {
        'border-top-left-radius': '.25rem',
        'border-bottom-left-radius': '.25rem',
    },
    linkLast: {
        'border-right-width': '1px',
        'border-top-right-radius': '.25rem',
        'border-bottom-right-radius': '.25rem',
    },
})

module.exports = function ({ addComponents, theme }) {
    let config = theme('pagination', {})
    config = Object.assign({}, defaultConfig(config.color || '#2779BD'), config)
    config = Object.keys(config).reduce((acc, key) => {
        if (key === 'color') return acc
        acc[key] = typeof config[key] === 'string' 
            ? { [`@apply ${config[key]}`]: {} }
            : config[key]
        return acc
    }, {});

    addComponents({
        '.pagination': config.wrapper,
        '.pagination .page-item': config.item,
        '.pagination .page-item:hover': config.itemHover,
        '.pagination .page-item .page-link': config.link,
        '.pagination .page-item .page-link:hover': config.linkHover,
        '.pagination .page-item:first-child .page-link': config.linkFirst,
        '.pagination .page-item:first-child .page-link:hover': config.linkFirstHover,
        '.pagination .page-item:nth-child(2) .page-link': config.linkSecond,
        '.pagination .page-item:nth-child(2) .page-link:hover': config.linkSecondHover,
        '.pagination .page-item:nth-last-child(2) .page-link': config.linkBeforeLast,
        '.pagination .page-item:nth-last-child(2) .page-link:hover': config.linkBeforeLastHover,
        '.pagination .page-item:last-child .page-link': config.linkLast,
        '.pagination .page-item:last-child .page-link:hover': config.linkLastHover,
        '.pagination .page-item.active .page-link': config.linkActive,
        '.pagination .page-item.active .page-link:hover': config.linkActiveHover,
        '.pagination .page-item.disabled .page-link': config.linkDisabled,
        '.pagination .page-item.disabled .page-link:hover': config.linkDisabledHover,
    })
}
