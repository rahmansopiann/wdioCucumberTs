import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

class categoryPage extends Page {

    public get btnTambah (){
        return $(".chakra-button.css-1piskbq").click();
    }
    public get namaTxtfield (){
        return $("#nama");
    }
    public get deskTxtfield (){
        return $("#deskripsi");
    }
    public get btnSimpan (){
        return $(`button[class="chakra-button css-l5lnz6"]`).click();
    }
    public get popup(){
        return $("#chakra-toast-manager-top-right");
    }
    public get alert(){
        return $("div[role='alert']");
    }

    public async tambah () {
        await this.btnTambah;
    }
    public async nama(nama : string){
        await this.namaTxtfield.setValue(nama);
    }
    public async deskripsi(deskripsi : string){
        await this.deskTxtfield.setValue(deskripsi);
    }
    public async simpan () {
        await this.btnSimpan;
    }
    public async successMessage(){
        await this.popup;
    }
    public async failMessage(){
        await this.alert;
    }
}

export default new categoryPage();