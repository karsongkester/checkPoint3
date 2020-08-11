const { assert } = require("console")

var test = {
    'file1': function (data) {
        this
            .useXpath()
            .click('@addEmployee')
            .useCss()
            .click('@newEmpTab')
            .clearValue('@name')
            .setValue('@name' , data.nombre1)
            .clearValue('@number')
            .setValue('@number' , data.cel1)
            .clearValue('@email')
            .setValue('@email' , data.correo1)
            .clearValue('@title')
            .setValue('@title' , data.titulo1)
            .click('@save')
            .setValue('@email' , data.correo2)
            .click('@save')
            .assert.visible('@name', data.nombre1)
            .assert.visible('@number', data.cel1)
            .assert.visible('@email', data.correo1)
            .assert.visible('@title', data.titulo1)
            .setValue('@name' , data.nombre1)
            .clearValue('@name')
            .click('@cancel')
            .assert.visible('@name', data.nombre1)
            .pause(500)
            .setValue('@name', data.nombre2)
            .click('@save')
            .setValue('@number', data.cel2)
            .setValue('@title', data.titulo2)
            .pause(500)
            .click('@save')
            .expect.element('@error').to.contain.text(data.error)
        this
            .expect.element('@error').to.contain.text(data.error2)
        this
            .expect.element('@error').to.contain.text(data.error3)
        this
            .pause(10000)
    }
}
module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    commands: [test],
    elements: {
        addEmployee: '[name="addEmployee"]',
        name: 'input[name="nameEntry"]',
        number:  'input[name="phoneEntry"]',
        email:'input[name="emailEntry"]', 
        title: 'input[name="titleEntry"]',
        id:  'span[name="employeeID"]',
        save:  'button[class="confirmationButton"]',
        cancel:  'button[name="cancel"]',
        delete: 'button[name="delete"]',
        britta:  'li[name="employee616"]',
        error: 'span[class="errorMessage"]',  
        newEmpTab: {
            selector:'//li[text()="New Employee"]',
            locateStrategy: 'xpath'
        }
    }
}