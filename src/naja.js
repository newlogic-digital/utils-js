export const makeRequest = async (...arg) => {
    const naja = (await import('naja')).default

    return naja.makeRequest(...arg)
}

export const initNaja = async (element, bindUI = true) => {
    const naja = (await import('naja')).default

    bindUI && naja.uiHandler.bindUI(element)

    element.querySelectorAll(`:where(button, [role="button"])${naja.uiHandler.selector}`).forEach(element => {
        if (element.form && element.type === 'submit') return

        element.addEventListener('click', event => {
            naja.uiHandler.processInteraction(element, element.dataset.najaMethod ?? 'GET', element.dataset.najaUrl, element.dataset.najaData, {}, event)
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
