describe('auth profit', function() {

    before(browser => browser.url(browser.launch_url))

    const loginInput = element('input[type=text]')
    const passInput = element('input[type=password]')
    const enterButtonEl = element('button.el-button.el-button--primary')

    it('auth profit (admin)', async function() {
        await browser
            .assert.visible(loginInput)
            .assert.attributeEquals(loginInput, "data-mask", "+7 (###) ### ## ##")
            .setValue(loginInput, process.env.ADMIN_PHONE)
            .assert.visible(passInput)
            .setValue(passInput, process.env.ADMIN_PASS)
            .assert.hasClass('#app > div.auth-layout > div > form > div.custom-input.type-password.has-placeholder.focused > div > div.password-show > span', 'eye-closed')
            .click('div.password-show')
            .assert.hasClass('#app > div.auth-layout > div > form > div.custom-input.type-password.has-placeholder.focused > div > div.password-show > span', 'eye-opened')
            .click('div.password-show')
            .assert.hasClass('#app > div.auth-layout > div > form > div.actions-extra > div > div > label', 'el-checkbox')
            .click('#app > div.auth-layout > div > form > div.actions-extra > div > div > label')
            .assert.hasClass('#app > div.auth-layout > div > form > div.actions-extra > div > div > label', 'el-checkbox is-checked')
            .click('#app > div.auth-layout > div > form > div.actions-extra > div > div > label')
            .click(enterButtonEl)
    });
    after(browser => browser.end());
});
