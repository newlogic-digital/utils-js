import addToDataset from "./addToDataset.js";

export function initActions (parent, selectors) {
    if (!parent) return

    selectors.forEach(selector => {
        parent.querySelectorAll(selector[0]).forEach(element => {
            const attribute = element.dataset.action

            if (!attribute) {
                element.dataset.action = selector[1]
            } else if (!attribute.includes(selector[1])) {
                element.dataset.action = `${attribute} ${selector[1]}`
            }
        })
    })
}

export function initControllers (parent, selectors) {
    if (!parent) return

    selectors.forEach(selector => {
        [...parent.getElementsByClassName(selector)].forEach(element => {
            addToDataset(element.dataset, 'controller', selector)
        })
    })
}
