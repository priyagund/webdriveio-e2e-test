const DunzoLoginPage = require('../pageobjects/dunzo-login.page.js')
describe('Dunzo Login', () => {

    before(async () => {
        await DunzoLoginPage.open()
    })

    it('search for groceries', async () => {
        await browser.url('https://www.dunzo.com/search')
        await $('input[placeholder="Search for item or a store"]').waitForDisplayed()
        await $('input[placeholder="Search for item or a store"]').setValue('fruits')
        browser.pause(5000)
        await browser.keys("Enter")
    })
})