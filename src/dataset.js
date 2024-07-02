export default function dataset(element, name) {
    return {
        add: (...values) => {
            element.dataset[name] = [...new Set([...element.dataset[name]?.split(' ') ?? [], ...values])].join(' ')
        },
        remove: (...values) => {
            element.dataset[name] = element.dataset[name]?.split(' ').filter(attribute => !values.includes(attribute)).join(' ') ?? []

            if (element.dataset[name].length === 0) delete element.dataset[name]
        }
    }
}
