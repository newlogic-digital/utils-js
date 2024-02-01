export default function loadControllers (parent, selectors) {
    if (!parent) return

    selectors.forEach(selector => {
        [...parent.getElementsByClassName(selector)].forEach(element => {
            const attribute = element.getAttribute('data-controller')

            if (attribute === null) {
                element.setAttribute('data-controller', selector)
            } else {
                element.setAttribute('data-controller', `${attribute} ${selector}`)
            }
        })
    })
}
