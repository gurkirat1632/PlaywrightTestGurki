import {test,expect} from '@playwright/test'
import { HomesPage as HomePage} from '../pages/homePage'
import { FormPage } from '../pages/formPage'
import { DelayPage } from '../pages/DelayPage';

test.skip('Navigate to Home Page',async ({page})=>{

    const homePage = new HomePage(page);
    await homePage.goToHomePage('/')
    await homePage.goToFormPage()
    const formPage = new FormPage(page);
    await formPage.fillFormFields('John Doe', 'password123');
    await formPage.navigateHome();


}
)

test('Navigate to Delay Page and Lift off',async ({page})=>{

    const homePage = new HomePage(page);
    await homePage.goToHomePage('/')
    await homePage.goToDelaysPage();
    const delayPage = new DelayPage(page)
    await delayPage.clickOnStart();
    await delayPage.waitForLiftOffText();
    await delayPage.navigateHome();
    
    

}
)