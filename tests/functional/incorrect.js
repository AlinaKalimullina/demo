describe('check validation', function() {

    beforeEach(browser => browser.url(browser.launch_url))

    const loginInput = element('input[type=text]')
    const passInput = element('input[type=password]')
    const enterButtonEl = element('button.el-button.el-button--primary')
    const loginValidation = element('#app > div.auth-layout > div > form > div.custom-input.has-placeholder.has-errors.keep-placeholder-on-focus.focused')
    const loginEmpty = element('#app > div.auth-layout > div > form > div.custom-input.has-placeholder.has-errors.keep-placeholder-on-focus')
    const passEmpty = element('#app > div.auth-layout > div > form > div.custom-input.type-password.has-placeholder.has-errors')

    it('incorrect phone', async function() {
        browser
            .setValue(loginInput, process.env.ADMIN_PHONE_INCORRECT)
            .setValue(passInput, process.env.ADMIN_PASS)
            .assert.visible('button.el-button.el-button--primary')
            .click('button.el-button.el-button--primary')
            .assert.textContains(loginValidation, 'Неправильно введён номер телефона или пароль')
    })

    it('empty pass', async function() {
        browser
            .setValue('input[type=text]', process.env.ADMIN_PHONE_INCORRECT)
            .assert.visible('button.el-button.el-button--primary')
            .click('button.el-button.el-button--primary')
            .assert.textContains(passEmpty, 'Обязательно для заполнения.')
    })

    it('empty phone', async function() {
        browser
            .setValue('input[type=password]', process.env.ADMIN_PASS)
            .assert.visible('button.el-button.el-button--primary')
            .click('button.el-button.el-button--primary')
            .assert.textContains(loginEmpty, 'Обязательно для заполнения.')
    })

    afterEach(browser => browser.end());
});
