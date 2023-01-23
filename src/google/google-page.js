import { Selector } from 'testcafe'
import BasePage from '../base/base-page';

class GooglePage extends BasePage {
    constructor(){
        super();
        this.searchInput = Selector('[name="q"]');
        this.firstLink = Selector('#rso').find('a');
    }
    saySomeThing(text) {
        this.printText(text)
    }
}

export default GooglePage