describe('check validation', function() {

    before(browser => browser.url(browser.launch_url))

    const enterButtonEl = element('button.el-button.el-button--primary')
    const formEl = element('#app > div.auth-layout > div > form')

    it('stay empty inputs in auth', async function() {
        browser
            .click(enterButtonEl)
            .assert.textContains(formEl, 'Обязательно для заполнения.')
            .pause(1000)
    })

    after(browser => browser.end());
});
