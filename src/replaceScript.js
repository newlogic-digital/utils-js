import addToDataset from "./addToDataset.js";

export default function replaceScript (element, selector = 'script', controller = 'use-script') {
    element.querySelectorAll(selector).forEach(script =>
        addToDataset(script.dataset, 'controller', controller))
}
