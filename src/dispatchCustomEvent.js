export default function dispatchCustomEvent(element, event = 'change', options = {}) {
    element.dispatchEvent(new CustomEvent(event, { bubbles: true, cancelable: true, ...options }))
}
