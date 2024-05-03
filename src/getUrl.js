export default function getUrl (path, params) {
    const url = new URL(path, window.location.origin)
    url.search = new URLSearchParams({
        ...params,
        ...Object.fromEntries(url.searchParams.entries())
    }).toString()

    return url.href
}
