describe('auth profit', function() {

    before(browser => browser.url(browser.launch_url))

    const loginInput = element('input[type=text]')
    const passInput = element('input[type=password]')
    const enterButtonEl = element('button.el-button.el-button--primary')

    it('auth profit (admin)', async function() {
        await browser
            .assert.visible(loginInput)
            .setValue(loginInput, process.env.ADMIN_PHONE)
            .assert.visible(passInput)
            .setValue(passInput, process.env.ADMIN_PASS)
            .click(enterButtonEl)
    });
    after(browser => browser.end());
});
