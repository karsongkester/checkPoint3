var asset = require ('../testAssets/managerV2TestAssets')
var empManager2 = {}
module.exports = {
    beforeEach: browser => {
        empManager2 = browser.page.managerV2Objects()
    empManager2
        .navigate()
},
'check1': browser => {
    empManager2
    .file1(asset[0])
},
}