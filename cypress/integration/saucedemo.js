///<reference types="cypress"/>


describe('Saucedemo test suite',function(){
    this.beforeEach(function(){
        cy.fixture("example").then(function(data){
            this.data=data
        })
    })
    
        it('homepage',function(){
            cy.visit(this.data.Url)
            cy.xpath('//input[@id="txtUsername"]').type(this.data.username)
            cy.xpath('//input[@id="txtPassword"]').type(this.data.password)
            cy.xpath('//input[@id="btnLogin"]').click()
            cy.fixture("example").then(function(data){
            cy.get('#menu_dashboard_index > b').click()
            cy.get('#menu_admin_viewAdminModule > b').click()    
            cy.get('#btnAdd').click()
            cy.get('#systemUser_employeeName_empName').type(this.data.EmployeeName)
            cy.get('#systemUser_userName').type(this.data.Username)
            cy.get('#systemUser_password').type(this.data.Pass)
            cy.get('#systemUser_confirmPassword').type(this.data.Confirmpass)
            cy.get('#btnSave').click()
            })
    })
    after('logout',function(){
        cy.get('#welcome').click()

    })
})