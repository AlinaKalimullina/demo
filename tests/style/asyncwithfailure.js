describe('browse.expect with failures in async step', function() {
    beforeEach(browser => browser.url(browser.launch_url))

    it('async step failure', async function() {
        browser.expect.element('div.actions-extra').to.be.contain.text('Запомнить меня')
    })

    it('second step without failure', async function() {
        browser.expect.element('div.actions-extra').to.be.present
    })

    afterEach(browser => browser.end());
});
