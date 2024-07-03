export default function toggleDarkMode() {
    document.documentElement.classList.toggle('dark')
    localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}
