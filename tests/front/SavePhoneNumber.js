describe('restore pass', function() {

    before(browser => browser.url(browser.launch_url))

    const loginInput = element('input[type=text]')
    const dontRemberPass = element('#app > div.auth-layout > div > form > div.actions-extra > a')
    const restoreInput = element('input.el-input__inner')

    it('restore pass', async function() {
        await browser
            .verify.visible(loginInput)
            .setValue(loginInput, process.env.ADMIN_PHONE)
            .assert.attributeContains(loginInput, 'data-mask-raw-value', process.env.ADMIN_PHONE)
            .click(dontRemberPass)
            .assert.urlContains('/auth/forgot')
            .assert.attributeContains(restoreInput, 'data-mask-raw-value', process.env.ADMIN_PHONE)
    });

    after(browser => browser.end());
});
