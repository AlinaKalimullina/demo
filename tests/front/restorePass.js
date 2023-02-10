describe('resert login', function() {
    before(browser => browser.url(browser.launch_url))

    const dontRemeberPass = element('#app > div.auth-layout > div > form > div.actions-extra > a')

    it('check mask value', async function() {
        await browser
            .assert.visible('input[type=text]')
            .setValue('input[type=text]', process.env.ADMIN_PHONE)
            .click(dontRemeberPass)
            .assert.urlContains('/auth/forgot')

        const result = await browser.getValue('input[type=text]')
        await browser.assert.valueEquals("input[type=text]", result)

    })

    after(browser => browser.end())
});
