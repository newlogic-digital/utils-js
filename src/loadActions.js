export default function loadActions (parent, selectors) {
    if (!parent) return

    selectors.forEach(selector => {
        parent.querySelectorAll(selector[0]).forEach(element => {
            const attribute = element.getAttribute('data-action')

            if (attribute === null) {
                element.setAttribute('data-action', selector[1])
            } else if (attribute.indexOf(selector[1]) === -1) {
                element.setAttribute('data-action', `${attribute} ${selector[1]}`)
            }
        })
    })
}
