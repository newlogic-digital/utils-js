/**
 * @param {string} url
 * @param {object} [options={}]
 * @returns {Promise<any>}
 */
export default async function fetchJson(url, options = {}) {
    const response = await fetch(url, {
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        ...options
    })
    return await response.json()
}
