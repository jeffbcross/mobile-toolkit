export class GuidesExamplePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('guides-example-app h1')).getText();
  }
}
