import { element, browser, by, Key } from 'protractor';

export class HomePage {

  setFullBrowser() {
    browser.driver.manage().window().maximize();
  }

  getInput(id) {
    return element(by.id(id));
  }

  writeInput(text, id) {
    let field = element(by.id(id));
    // field.clear().then(() => {
    field.sendKeys(text);
    // });
  }

  clickButon(id) {
    let button = element(by.id(id));
    button.click();
  }

  getListCount(id) {
    var list = element.all(by.id(id));
    return list.count();
  }

  getList(id) {
    return element.all(by.id(id));
  }

}
