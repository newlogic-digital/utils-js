export default function addToDataset (dataset, name, value) {
    dataset[name] = dataset[name] ? `${dataset[name]} ${value}` : value
}
