import replaceScript from './replaceScript.js'

export default function replaceScripts (element, selectors = 'script') {
    element.querySelectorAll(selectors).forEach(scriptElement => replaceScript(scriptElement))
}
