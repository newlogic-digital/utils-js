import dataset from './dataset.js'

export function initActions(parent, selectors) {
    if (!parent) return

    selectors.forEach(([selector, action]) => {
        parent.querySelectorAll(selector).forEach((element) => {
            dataset(element, 'action').add(action)
        })
    })
}

export function initControllers(parent, selectors) {
    if (!parent) return

    selectors.forEach((selector) => {
        [...parent.getElementsByClassName(selector)].forEach((element) => {
            dataset(element, 'controller').add(selector)
        })
    })
}
