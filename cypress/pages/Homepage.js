 class Home_page{
    dashboard='#menu_dashboard_index > b'
    Admin='#menu_admin_viewAdminModule > b'
    Add_Button='#btnAdd'

    dashboardbutton(){
        cy.get(this.dashboard).click()
    }
    ClickAdmin(){
        cy.get(this.Admin).click()
    }
    AddButton(){
        cy.get(this.Add_Button).click()
    }
}
export default Home_page