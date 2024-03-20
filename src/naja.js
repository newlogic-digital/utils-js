export const makeRequest = async (...arg) => {
    const naja = (await import('naja')).default

    return naja.makeRequest(...arg)
}

export const loadNaja = async (element, bindUI = false) => {
    const naja = (await import('naja')).default

    bindUI && naja.uiHandler.bindUI(element)

    element.querySelectorAll(`button${naja.uiHandler.selector}`).forEach(element => {
        if (element.form) return

        element.addEventListener('click', async event => {
            const options = naja.prepareOptions()

            naja.uiHandler.dispatchEvent(new CustomEvent('interaction', { cancelable: true, detail: { element, originalEvent: event, options } }))

            await naja.makeRequest(element.dataset.najaMethod ?? 'GET', element.dataset.najaUrl, element.dataset.najaData, options)
        })
    })
}

export const NajaFormValidityExtension = {
    initialize (naja) {
        naja.uiHandler.addEventListener('interaction', (event) => {
            const { element } = event.detail

            if (element?.form && !element.form.reportValidity()) {
                event.preventDefault()
            }
        })
    }
}

export const NajaRecaptchaExtension = {
    initialize (naja) {
        naja.uiHandler.addEventListener('interaction', (event) => {
            const { element } = event.detail

            if (
                element?.dataset?.controller?.includes('lib-recaptcha') &&
                !event.detail?.originalEvent?.detail?.recaptchaExecuted
            ) {
                event.preventDefault()
                return false
            }
        })
    }
}

export const NajaStimulusExtension = (loadStimulus) => {
    return {
        initialize (naja) {
            naja.snippetHandler.addEventListener('afterUpdate', () => {
                loadStimulus(document.body)
            })
        }
    }
}
