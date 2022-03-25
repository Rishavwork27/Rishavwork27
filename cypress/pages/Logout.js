class Log_out{
    profile_button='#welcome'
    //cy.get('#welcome-menu > :nth-child(1) > :nth-child(3) > a')
    clickprofilrbutton(){
        cy.get(this.profile_button).click()
    }
    logoutbutton(){
        cy.contains('Logout').click()
    }
}
export default Log_out