import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

class dashboardPage extends Page {

    public get btnUser () {
        return $('#menu-button-8');
    }
    public get menuCategory () { 
        return $(`body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)`).click();
    }
    public async category () {
        await this.menuCategory;
    }
}

export default new dashboardPage();
