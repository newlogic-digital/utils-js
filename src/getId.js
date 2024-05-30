export default function getId () {
    return Math.floor(Math.random() * Date.now()).toString(36)
}
