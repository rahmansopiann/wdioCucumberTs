import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
    await browser.pause(10);
});

When(/^I input (.+) as email$/, async (email) => {
    await LoginPage.email(email);
});
When(/^I input (.+) as password$/, async (password) => {
    await LoginPage.password(password);
});
When(/^I click button submit$/, async () => {
    await LoginPage.btnSubmit;
});

Then(/^I should see dashboard page$/, async () => {
    expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard')
    expect(browser).toHaveTitleContaining('kasirAja')
});

