import {expect} from '@playwright/test'

/** @typedef {import('@playwright/test').Page} Page */
export class LoginPage{
/** 
 * @param {import('@playwright/test').Page} page
 */
    constructor(page){
      this.page  = page;
      this.nameTextBox = "Enter Name"
      this.email = "Enter EMail"
      this.playwrightLink = "PlaywrightPractice"
    }

    async  goToLoginPage(url) {
        console.log(`${url}`)
        await this.page.goto(url)
        
    }

    async  login(user, email) {
        console.log(`${user} and ${email}`)
        await this.page.getByPlaceholder(this.nameTextBox).fill(user)
        await this.page.getByPlaceholder(this.email).fill(email)
        await this.page.waitForTimeout(2000)
    }

    async clickPlaywrightTab(){
        await this.page.getByText(this.playwrightLink).click();

    }
   
}