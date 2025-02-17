export default function isAttrSupport() {
    class Element extends HTMLBRElement {}
    customElements.define(name, Element, { extends: 'br' })

    return document.createElement('br', { is: name }) instanceof Element
}
