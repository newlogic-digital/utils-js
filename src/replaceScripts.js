import replaceScript from './replaceScript.js'

/**
 * @param {HTMLElement} element
 * @param {string} [selectors]
 */
export default function replaceScripts(element, selectors = 'script') {
    element.querySelectorAll(selectors).forEach(scriptElement => replaceScript(scriptElement))
}
