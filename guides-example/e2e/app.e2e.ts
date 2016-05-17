import { GuidesExamplePage } from './app.po';

describe('guides-example App', function() {
  let page: GuidesExamplePage;

  beforeEach(() => {
    page = new GuidesExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('guides-example works!');
  });
});
