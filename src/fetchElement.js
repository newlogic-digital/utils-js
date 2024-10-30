import getId from './getId.js'
import fetchJson from './fetchJson.js'

export default async function fetchElement(element, url, appendTo) {
    element.toggleAttribute('data-loading')

    const { content } = await fetchJson(url).finally(() => {
        element.removeAttribute('data-loading')
    })

    const contentElement = new DOMParser().parseFromString(content, 'text/html').body.firstChild

    contentElement.id = contentElement.getAttribute('id') ?? getId()

    appendTo ? document.querySelector(appendTo).append(contentElement) : element.after(contentElement)

    return contentElement
}
