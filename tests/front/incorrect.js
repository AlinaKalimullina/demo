describe('check validation', function() {

    before(browser => browser.url(browser.launch_url))

    const enterButtonEl = element('button.el-button.el-button--primary')
    const formEl = element('#app > div.auth-layout > div > form')

    it('empty', async function() {
        browser
            .click(enterButtonEl)
            .assert.textContains(formEl, 'Обязательно для заполнения.')
            .pause(1000)
    })

    it('incorrect', async function() {
        browser
            .setValue('input[type=text]', process.env.ADMIN_PHONE_INCORRECT)
            .setValue('input[type=password]', process.env.ADMIN_PASS_INCORRECT)
            .click(enterButtonEl)
            .assert.textContains(formEl, 'Неправильно введён номер телефона или пароль')
    })

    after(browser => browser.end());
});
