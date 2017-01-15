import { HiPage } from './app.po';

describe('hi App', function() {
  let page: HiPage;

  beforeEach(() => {
    page = new HiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
