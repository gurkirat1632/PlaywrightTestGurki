import {expect} from '@playwright/test'

/** @typedef {import('@playwright/test').Page} Page */
export class HomesPage {

    /** 
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
    }

    async goToHomePage(url) {
        await this.page.goto(url)
    }

    async goToFormPage(){
        await this.page.getByRole('link',{name:'Form Fields'}).click();
        await this.page.waitForSelector('#name-input',{state: 'visible'})
    }

    async goToDelaysPage(){
        await this.page.locator("a[href*='javascript']").click();
        await this.page.locator('#start').waitFor();
    }
}