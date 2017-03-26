import { TwitchtvPage } from './app.po';

describe('twitchtv App', () => {
  let page: TwitchtvPage;

  beforeEach(() => {
    page = new TwitchtvPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
