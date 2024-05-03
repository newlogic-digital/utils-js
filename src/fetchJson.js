export default function fetchJson (url, options = {}) {
    return fetch(url, {
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        ...options
    }).then(response => response.json())
}
