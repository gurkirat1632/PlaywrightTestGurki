import { expect } from '@playwright/test';

export class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.HomeLink = { role: 'link', name: 'Home' };
  }

  async navigateHome() {
    await this.page.getByRole(this.HomeLink.role, { name: this.HomeLink.name }).click();
    await expect(this.page.getByRole('link', { name: 'Form Fields' })).toBeVisible();
  }
}
