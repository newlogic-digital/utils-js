export default function dispatchEvent(element, event = 'change', options = {}) {
    element.dispatchEvent(new CustomEvent(event, { bubbles: true, cancelable: true, ...options }))
}
