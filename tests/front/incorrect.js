describe('check validation', function() {

    before(browser => browser.url(browser.launch_url))

    const loginInput = element('input[type=text]')
    const passInput = element('input[type=password]')
    const enterButtonEl = element('button.el-button.el-button--primary')
    const formEl = element('#app > div.auth-layout > div > form > div.custom-input.has-placeholder.has-errors.keep-placeholder-on-focus.focused > div.error')


    it('enter incorrect data', async function() {
        await browser
            .assert.visible(loginInput)
            .setValue(loginInput, process.env.ADMIN_PHONE_INCORRECT)
            .assert.visible(passInput)
            .setValue(passInput, process.env.ADMIN_PASS_INCORRECT)
            .click(enterButtonEl)
            .assert.visible(formEl)
            .assert.hasClass(formEl, 'error')
    })

    after(browser => browser.end());
});
