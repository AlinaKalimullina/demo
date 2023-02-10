describe('check validation', function() {

    before(browser => browser.url(browser.launch_url))

    const loginInput = element('input[type=text]')
    const passInput = element('input[type=password]')
    const enterButtonEl = element('button.el-button.el-button--primary')


    it('enter incorrect data', async function() {
        await browser
            .setValue(loginInput, process.env.ADMIN_PHONE_INCORRECT)
            .setValue(passInput, process.env.ADMIN_PASS_INCORRECT)
            .click(enterButtonEl)
            .expect.element('div.error').to.be.visible;
    })

    after(browser => browser.end());
});
