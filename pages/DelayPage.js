import {expect} from '@playwright/test'
import { BasePage } from './BasePage.js';
export class DelayPage extends BasePage {
    constructor(page) {
        super(page);
        this.startButton = '#start'
    }

    

    async waitForDelay(milliseconds) {
        await this.page.waitForTimeout(milliseconds);
    }

    async clickOnStart() {
         await this.page.locator(this.startButton).click()
    }

    async waitForLiftOffText(){
        await expect(this.page.locator('#delay')).toHaveText('Liftoff!',{timeout:12000})
    }

}

