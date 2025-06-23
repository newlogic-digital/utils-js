/**
 * @param {string} [delimiter='_']
 * @returns {string}
 */
export default function getId(delimiter = '_') {
    return delimiter + Math.floor(Math.random() * Date.now()).toString(36) + delimiter
}
