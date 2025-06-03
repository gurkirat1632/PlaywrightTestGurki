import { BasePage } from './BasePage';

export class FormPage extends BasePage {
  constructor(page) {
    super(page);
    this.nameTextBox = "#name-input";
    this.password = "Password ";
    this.submitButton = "#submit-btn";
  }
//comment
  async fillFormFields(name, password) {
    await this.page.fill(this.nameTextBox, name);
    await this.page.getByLabel(this.password).fill(password);
    await this.page.getByRole('checkbox', { name: 'Milk' }).click();
    await this.page.getByRole('radio', { name: 'Green' }).click();
    await this.page.waitForTimeout(2000);
    await this.page.locator('#automation').selectOption('Yes');
    await this.page.click(this.submitButton);
  }
}
