var assert = require('assert');

describe('WebdriverIO Navigation Links', function() {
    it('should go to Developer Guide page when choosing Developer Guide link', function () {
        browser.url('http://webdriver.io');
        browser.click('=Developer Guide');
        assert.equal(browser.getUrl(), 'http://webdriver.io/guide.html');
    });

    it('should go to API page when choosing API link', function () {
        browser.url('http://webdriver.io');
        browser.click('=API');
        assert.equal(browser.getUrl(), 'http://webdriver.io/api.html');
    });

    it('should go to Contribute page when choosing Contribute link', function () {
        browser.url('http://webdriver.io');
        browser.click('=Contribute');
        assert.equal(browser.getUrl(), 'http://webdriver.io/contribute.html');
    });

    it('should go to Home page when choosing Home link', function () {
        browser.url('http://webdriver.io/api.html');
        browser.click('=Home');
        assert.equal(browser.getUrl(), 'http://webdriver.io/');
    });

});
