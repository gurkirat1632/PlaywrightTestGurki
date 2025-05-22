import {test,expect} from '@playwright/test'
import {LoginPage} from '../pages/loginPage.js'
import {PlayPage} from '../pages/playPage.js'



test('My first login test',async ({page})=>{

   let loginInstance  = new LoginPage(page)
   await loginInstance.goToLoginPage('https://testautomationpractice.blogspot.com/')
   await loginInstance.login('Harry', 'Potter')
   await loginInstance.clickPlaywrightTab()
   let playPageInst = new PlayPage(page)
   await playPageInst.clickButtons()
   await playPageInst.clickVariousButtons()
})