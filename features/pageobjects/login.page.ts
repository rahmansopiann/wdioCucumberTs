import { ChainablePromiseElement, Key } from 'webdriverio';
import { keys } from 'webdriverio/build/commands/browser';

import Page from './page';


class LoginPage extends Page {

    public get inputEmail () {
        return $('#email');
    }

    public get inputPassword () {
        return $('#password');
    }

    public get btnSubmit () {
        return $('//button[@type="submit"]').click();
    }

    public async email (email: string) {
        await this.inputEmail.setValue(email);
    }
    public async password (password: string) {
        await this.inputPassword.setValue(password);
    }
    public async clickSubmit () {
        await this.btnSubmit;
    }
}

export default new LoginPage();
