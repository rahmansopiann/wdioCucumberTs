import { Given, When, Then } from '@wdio/cucumber-framework';
import categoryPage from '../pageobjects/category.page';
import dashboardPage from '../pageobjects/dashboard.page';
import LoginPage from '../pageobjects/login.page';


const pages = {
    login: LoginPage
}
Given(/^I am on category page$/, async () => {
    await dashboardPage.menuCategory;
  });

When(/^I click button tambah$/, async () => {
    await categoryPage.btnTambah;
});
When(/^I input (.+) as nama$/, async (nama) => {
    await categoryPage.nama(nama);
});

When(/^I input (.+) as description$/, async (deskripsi) => {
    await categoryPage.deskripsi(deskripsi);
});

When(/^I click button simpan$/, async () => {
    await categoryPage.btnSimpan;
});

Then(/^I should see success message$/, async () => {
    await expect(categoryPage.popup).toBeExisting();
    await expect(categoryPage.popup).toHaveTextContaining('item ditambahkan');
});

Then(/^I should see error message$/, async () => {
    await expect(categoryPage.alert).toBeExisting();
    await expect(categoryPage.alert).toHaveTextContaining('"name" is not allowed to be empty');
});