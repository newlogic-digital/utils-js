export const makeRequest = async (...arg) => {
    const naja = (await import('naja')).default

    return naja.makeRequest(...arg)
}

export const initNaja = async (element, bindUI = true, selectors = 'button, [role="button"]') => {
    const naja = (await import('naja')).default

    bindUI && naja.uiHandler.bindUI(element)

    element.querySelectorAll(`:where(${selectors})${naja.uiHandler.selector}`).forEach((element) => {
        if (element.form && element.type === 'submit') return

        element.addEventListener('click', (event) => {
            naja.uiHandler.processInteraction(element, element.dataset.najaMethod ?? 'GET', element.dataset.najaUrl, element.dataset.najaData, {}, event)
        })
    })
}

export const NajaRecaptchaExtension = {
    initialize(naja) {
        naja.uiHandler.addEventListener('interaction', (event) => {
            if (event.detail?.form?.gtoken && !event.detail?.originalEvent?.detail?.recaptchaExecuted) {
                event.preventDefault()
            }
        })
    }
}
