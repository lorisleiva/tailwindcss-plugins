# :open_book: Pagination

Customizable pagination component that integrates perfectly with Laravel.

![pagination](https://user-images.githubusercontent.com/3642397/54759331-c2d76200-4be5-11e9-8f53-0aad6af07a56.png)

## Installation

```bash
npm i tailwindcss-plugins -D
```

## Basic usage

```js
plugins: [
    require('tailwindcss-plugins/pagination'),
    // ...
],
```

If you use Laravel to paginate a collection of `$items`, all you have to do is:

```php
{{ $items->links() }}
```

## Advanced usage
You can customize the main pagination color by setting the `color` key and/or customize the CSS of all elements of the pagination component.

```js
theme: {
    pagination: {
        // Costumize the color only. (optional)
        color: colors['teal-dark'],
    
        // Costumize styling using @apply. (optional)
        wrapper: 'flex justify-center list-reset'
    
        // Costumize styling using CSS-in-JS. (optional)
        wrapper: {
            'display': 'flex',
            'justify-items': 'center',
            '@apply list-reset': {},
        }
    }
},
plugins: [
    require('tailwindcss-plugins/pagination'),
],
```

Here is the exhaustive list of pagination elements that you can style.

```
CONFIG KEY              CSS SELECTOR
----------              ------------
wrapper:                .pagination
item:                   .pagination .page-item
itemHover:              .pagination .page-item:hover
link:                   .pagination .page-item .page-link
linkHover:              .pagination .page-item .page-link:hover
linkFirst:              .pagination .page-item:first-child .page-link
linkFirstHover:         .pagination .page-item:first-child .page-link:hover
linkSecond:             .pagination .page-item:nth-child(2) .page-link
linkSecondHover:        .pagination .page-item:nth-child(2) .page-link:hover
linkBeforeLast:         .pagination .page-item:nth-last-child(2) .page-link
linkBeforeLastHover:    .pagination .page-item:nth-last-child(2) .page-link:hover
linkLast:               .pagination .page-item:last-child .page-link
linkLastHover:          .pagination .page-item:last-child .page-link:hover
linkActive:             .pagination .page-item.active .page-link
linkActiveHover:        .pagination .page-item.active .page-link:hover
linkDisabled:           .pagination .page-item.disabled .page-link
linkDisabledHover:      .pagination .page-item.disabled .page-link:hover
```

## Examples

<p align="center"><img width="300" alt="pagination_1" src="https://user-images.githubusercontent.com/3642397/54760185-74c35e00-4be7-11e9-99de-72ae47e37094.png"></p>

```js
{}
```

---

<p align="center"><img width="300" alt="pagination_2" src="https://user-images.githubusercontent.com/3642397/54760188-75f48b00-4be7-11e9-94f8-d0a263cb18db.png"></p>

```js
{
    color: colors['teal-dark'],
}
```

---

<p align="center"><img width="300" alt="pagination_3" src="https://user-images.githubusercontent.com/3642397/54760190-77be4e80-4be7-11e9-912b-463377e54636.png"></p>

```js
{
    color: colors['pink-dark'],
    wrapper: 'inline-flex list-reset shadow rounded'
}
```

---

<p align="center"><img width="300" alt="pagination_4" src="https://user-images.githubusercontent.com/3642397/54760193-79881200-4be7-11e9-8a4d-4194b1b6a678.png"></p>

```js
{
    color: colors['purple-dark'],
    linkFirst: 'mr-6 border rounded',
    linkSecond: 'rounded-l border-l',
    linkBeforeLast: 'rounded-r border-r',
    linkLast: 'ml-6 border rounded',
}
```

---

<p align="center"><img width="300" alt="pagination_5" src="https://user-images.githubusercontent.com/3642397/54760197-7b51d580-4be7-11e9-9d01-298a48d35feb.png"></p>

```js
{
    color: colors['orange-light'],
    link: 'bg-grey-darkest py-4 px-2 border-r border-grey-dark text-white no-underline',
    linkHover: 'bg-grey-dark',
    linkDisabled: 'bg-grey-dark',
    linkFirst: null,
    linkLast: 'border-0',
}
```

---

<p align="center"><img width="300" alt="pagination_6" src="https://user-images.githubusercontent.com/3642397/54760199-7c830280-4be7-11e9-85d4-d503f7dc12d1.png"></p>

```js
{
    link: 'bg-white px-3 py-1 border-r border-t border-b text-black no-underline',
    linkActive: 'bg-yellow-lighter border-yellow font-bold',
    linkSecond: 'rounded-l border-l',
    linkBeforeLast: 'rounded-r',
    linkFirst: {
        '@apply mr-3 pl-5 border': {},
        'border-top-left-radius': '999px',
    },
    linkLast: {
        '@apply ml-3 pr-5 border': {},
        'border-top-right-radius': '999px',
    },
}
```
