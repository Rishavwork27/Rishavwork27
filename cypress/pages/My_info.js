class info{
    my_info_id = '#menu_pim_viewMyDetails > b'
    editbutton = "#btnSave"
    firstName_id = '#personal_txtEmpFirstName'
    lastName_id = '#personal_txtEmpLastName'
   
    ClickMyInfo(){
     return   cy.get(this.my_info_id).click()
    }
    clickeditbutton(){
        return   cy.get(this.editbutton).click()
       }
    addFirstname(Firstname){
        return   cy.get(this.firstName_id).type(Firstname)
       }
    addLastname(Lastname){
        return   cy.get(this.lastName_id).type(Lastname)
       }
}
export default info