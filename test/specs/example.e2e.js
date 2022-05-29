const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    // it('should login with valid credentials', async () => {
    //     console.log("coming");
    //     await LoginPage.open('login');

    //     await LoginPage.login('tomsmith', 'SuperSecretPassword!');
    //     await expect(SecurePage.flashAlert).toBeExisting();
    //     await expect(SecurePage.flashAlert).toHaveTextContaining(
    //         'You logged into a secure area!');
    // });

    // // it('alert message for besic auth', async () => {
    // //     await LoginPage.open('basic_auth');
    // //     await (await $('#checkboxes')).click()
    // // })

    // it('forgot password', async () => {
    //     await LoginPage.open('forgot_password');
    //     await (await $('#email')).setValue('test@example.com')
    //     await (await $('#form_submit')).click()
    // })

    it('scrolling horizontallu', async () => {
        await LoginPage.open('horizontal_slider')
        const scrollRight = await $('#content')
        await scrollRight.scrollIntoView()
    })

});


