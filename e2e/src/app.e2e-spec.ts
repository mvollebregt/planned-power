import {MetaSenderPage} from './meta-sender.po';

describe('angular-truffle-box App', () => {
  let page: MetaSenderPage;

  beforeEach(() => {
    page = new MetaSenderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getHeader()).toContain('Angular Truffle Box');
  });
});
