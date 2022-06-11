const DunzoLoginPage = require('../pageobjects/dunzo-login.page.js')
describe('Dunzo Login', () => {

    before(async () => {
        await DunzoLoginPage.open()
    })

    it('search for groceries and add item to cart', async () => {
        await browser.url('https://www.dunzo.com/search')
        await $('input[placeholder="Search for item or a store"]').waitForDisplayed()
        await $('input[placeholder="Search for item or a store"]').setValue('fruits')
        browser.pause(5000)
        await browser.keys("Enter")
        links = $$('a[href="/product/banana-robusta-12-pcs?dzid=5234ef53-f010-4322-8cd0-498306008b42"]').click()
        browser.pause(5000)
        await $(`button*=${"ADD"}`).click()
        //await $(`button=${"Add item"}`).click()
    })

})