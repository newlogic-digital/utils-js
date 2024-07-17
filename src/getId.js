export default function getId() {
    return `_${Math.floor(Math.random() * Date.now()).toString(36)}_`
}
