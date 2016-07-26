import expect from 'expect'

describe('Flashcards', () => {
  it("displays title", () => {
    browser.url('/')
    expect(browser.getText('h1')).toEqual('Flashcards')
  })
})
