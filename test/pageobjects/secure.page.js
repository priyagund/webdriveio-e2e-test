

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert() {
        return $('#flash');
    }

    get checkboxex() {
        return $(input[type = 'checkbox'])
    }
}

module.exports = new SecurePage();
