import { t } from 'testcafe'

class BasePage {
    constructor(){}
    printText(text) {
        console.log(text);
    }
}

export default BasePage