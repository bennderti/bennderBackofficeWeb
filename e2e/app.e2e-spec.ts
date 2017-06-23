import { BennderBackofficeWebPage } from './app.po';

describe('bennder-backoffice-web App', () => {
  let page: BennderBackofficeWebPage;

  beforeEach(() => {
    page = new BennderBackofficeWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
