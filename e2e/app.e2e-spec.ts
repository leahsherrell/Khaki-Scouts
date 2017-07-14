import { TroopPage } from './app.po';

describe('troop App', () => {
  let page: TroopPage;

  beforeEach(() => {
    page = new TroopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
