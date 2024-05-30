export default function replaceVars (element, vars, delimiter = '%') {
    Object.entries(vars).forEach(([key, value]) => {
        [...element.attributes].forEach(attribute => {
            attribute.value = attribute.value.replaceAll(delimiter + key + delimiter, value)
        })

        element.innerHTML = element.innerHTML.replaceAll(delimiter + key + delimiter, value)
    })
}
