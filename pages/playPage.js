export class PlayPage {
  /** 
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.firstButton = { role: 'button', name: 'Primary Action' };
    this.secondButton = { role: 'button', name: 'Div with button role' };
    this.checkbox1 = {role:'checkbox', }
    this.checkbox2 = {role:'checkbox',name:'Accept terms'};
  }

  async clickButtons() {
    await this.page.getByRole(this.firstButton.role, { name: this.firstButton.name }).click();
    await this.page.getByRole(this.secondButton.role, { name: this.secondButton.name }).click();
    await this.page.waitForTimeout(2000)
  }

  async clickVariousButtons(){
    await this.page.getByLabel("Accept terms").click();
    await this.page.waitForTimeout(2000)
    await this.page.getByRole(this.checkbox2.role,{name:this.checkbox2.name}).click();
    await this.page.waitForTimeout(2000)
    await this.page.getByLabel("Standard").click();
    await this.page.waitForTimeout(2000)
    await this.page.getByTitle("Home page link").hover();
    await this.page.waitForTimeout(2000)
  }
}
