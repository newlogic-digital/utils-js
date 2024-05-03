export default function replaceScript (element, ignoreAttributeName = null) {
    const script = document.createElement('script')

    ;[...element.attributes].forEach(({ specified, name, value }) => {
        if (specified && !name.match(ignoreAttributeName)) {
            script.setAttribute(name, value)
        }
    })

    script.innerHTML = element.innerHTML
    element.replaceWith(script)
}
