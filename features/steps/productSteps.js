const { When, Then, After } = require('cucumber');
const assert = require('assert');
const { Builder, By, until } = require('selenium-webdriver');
 
When('we request the products list', {timeout: 1 * 15000}, async function () {
    this.driver = new Builder()
        .forBrowser('chrome')
        .build();
 
    this.driver.wait(until.elementLocated(By.tagName('h1')));
 
    await this.driver.get('http://localhost:4200');
});

Then('we should receive', {timeout: 1 * 15000}, async function (dataTable) {
    var productElements = await this.driver.findElements(By.className('product'));
    var expectations = dataTable.hashes();
    for (let i = 0; i < expectations.length; i++) {
        const productName = await productElements[i].findElement(By.tagName('h3')).getText();
        assert.equal(productName, expectations[i].Name);

        const description = await productElements[i].findElement(By.tagName('p')).getText();
        assert.equal(description, `Description: ${expectations[i].Description}`);
    }
});

After(async function() {
    this.driver.close();
});