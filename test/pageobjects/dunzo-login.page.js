


/**
 * sub page containing specific selectors and methods for a specific page
 */
class DunzoLoginPage {

    open() {
        return browser.url('https://www.dunzo.com/pune')
    }

}

module.exports = new DunzoLoginPage();
