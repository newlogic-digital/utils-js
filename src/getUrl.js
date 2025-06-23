/**
 * @param {string} path
 * @param {object} [params]
 * @param {string} [origin]
 * @returns {string}
 */
export default function getUrl(path, params, origin) {
    const url = new URL(path, origin ?? window.location.origin)
    url.search = new URLSearchParams({
        ...params,
        ...Object.fromEntries(url.searchParams.entries())
    }).toString()

    return url.href
}
