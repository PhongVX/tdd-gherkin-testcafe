import { Selector } from 'testcafe'
import BasePage from '../base/base-page';

class YoutubePage extends BasePage {
    constructor(){
        super();
        this.searchInput = Selector('#search').find('input');
        this.videoTitle = Selector('#video-title');
    }
    saySomeThing(text) {
        this.printText(text);
    }
}

export default YoutubePage