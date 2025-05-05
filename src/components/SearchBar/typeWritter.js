import { delay } from '../../utils/delay'

export const typeWritter = async (sentences, currentInput) => {
    for(const sentence of sentences){
        for(let i = 0; i < sentence.length; i++){
            await delay(50)
            currentInput.placeholder += sentence[i]
        }
        await delay(2000)
        const lengthSentence = currentInput.placeholder.length
        for(let i = 0; i < lengthSentence; i++){
            await delay(25)
            let str = currentInput.placeholder
            currentInput.placeholder = currentInput.placeholder.substr(0, str.length - 1)
        }
    }
}
