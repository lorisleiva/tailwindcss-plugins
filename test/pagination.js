import test from 'ava'
import paginationPlugin from '../pagination'
import { simulate } from './util'

let simulatePagination = (pagination = {}) => 
    simulate(paginationPlugin, { theme: { pagination } }).components

test('it provides a default style when no configuration is given', t => {
    const newComponents = simulatePagination()

    t.deepEqual(newComponents, {
        '.pagination': {
            'display': 'flex',
            'justify-content': 'center',
            'list-style': 'none',
            'padding': '0',
        },
        '.pagination .page-item .page-link': {
            'padding': '.75rem',
            'display': 'block',
            'text-decoration': 'none',
            'border-top-width': '1px',
            'border-left-width': '1px',
            'border-bottom-width': '1px',
            'background-color': '#ffffff',
            'color': '#2779BD',
        },
        '.pagination .page-item .page-link:hover': {
            'background-color': '#f1f5f8',
        },   
        '.pagination .page-item.active .page-link': {
            'background-color': '#2779BD',
            'border-color': '#2779BD',
            'color': '#ffffff'
        },
        '.pagination .page-item.disabled .page-link': {
            'background-color': '#f1f5f8',
            'color': '#8795a1',
        },
        '.pagination .page-item:first-child .page-link': {
            'border-top-left-radius': '.25rem',
            'border-bottom-left-radius': '.25rem',
        },
        '.pagination .page-item:last-child .page-link': {
            'border-right-width': '1px',
            'border-top-right-radius': '.25rem',
            'border-bottom-right-radius': '.25rem',
        },

        // With some undefined hooks that will be removed by TailwindCss.
        '.pagination .page-item': undefined,
        '.pagination .page-item.active .page-link:hover': undefined,
        '.pagination .page-item.disabled .page-link:hover': undefined,
        '.pagination .page-item:first-child .page-link:hover': undefined,
        '.pagination .page-item:hover': undefined,
        '.pagination .page-item:last-child .page-link:hover': undefined,
        '.pagination .page-item:nth-child(2) .page-link': undefined,
        '.pagination .page-item:nth-child(2) .page-link:hover': undefined,
        '.pagination .page-item:nth-last-child(2) .page-link': undefined,
        '.pagination .page-item:nth-last-child(2) .page-link:hover': undefined,
    })
});

test('it can alter the default style with a given color', t => {
    const newComponents = simulatePagination({ color: '#ff0000' })
    t.is(newComponents['.pagination .page-item .page-link'].color, '#ff0000')
    t.is(newComponents['.pagination .page-item.active .page-link']['background-color'], '#ff0000')
    t.is(newComponents['.pagination .page-item.active .page-link']['border-color'], '#ff0000')
});

test('it uses CSS-in-JS when objects are provided as configuration', t => {
    const newComponents = simulatePagination({
        wrapper: {
            'display': 'block',
            'color': 'red',
        }
    })

    t.deepEqual(newComponents['.pagination'], {
        'display': 'block',
        'color': 'red',
    })
});

test('it uses @apply when strings are provided as configuration', t => {
    const newComponents = simulatePagination({
        wrapper: 'block bg-red'
    })

    t.deepEqual(newComponents['.pagination'], {
        '@apply block bg-red': {},
    })
});