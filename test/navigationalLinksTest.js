const assert = require('assert');

describe('WebdriverIO Navigation Links', function() {
    it('should go to Developer Guide page when choosing Developer Guide link', function () {
        browser.url('http://webdriver.io');
        browser.click('=Developer Guide');
        browser.waitForExist('[id="Developer-Guide"]');

        assert.equal(browser.getUrl(), 'http://webdriver.io/guide.html');
    });

    it('should go to API page when choosing API link', function () {
        browser.url('http://webdriver.io');
        browser.click('=API');
        browser.waitForExist('[id="WebdriverIO-API-Docs"]');

        assert.equal(browser.getUrl(), 'http://webdriver.io/api.html');
    });

    it('should go to Contribute page when choosing Contribute link', function () {
        browser.url('http://webdriver.io');
        browser.click('=Contribute');
        browser.waitForExist('[id="Contributing"]');

        assert.equal(browser.getUrl(), 'http://webdriver.io/contribute.html');
    });

    it('should go to Home page when choosing Home link', function () {
        browser.url('http://webdriver.io/api.html');
        browser.click('=Home');
        browser.waitForExist('[id="What-is-WebdriverIO"]');

        assert.equal(browser.getUrl(), 'http://webdriver.io/');
    });

});
