import expect from 'expect'

describe('Flashcards', () => {
  it("can access login", () => {
    browser.url('/')
    expect(browser.getText('h1')).toEqual('Flashcards')

    browser.click('//a[contains(text(), "Login")]');
    expect(browser.getText('h1')).toEqual('Login')
  })
})
