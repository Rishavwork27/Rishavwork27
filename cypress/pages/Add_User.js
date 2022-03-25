 class Add_user{
    employe_name_id='#systemUser_employeeName_empName'
    username_id='#systemUser_userName'
    password_id='#systemUser_password'
    confirm_password_id='#systemUser_confirmPassword'
    save_buttonj_id='#btnSave'
    
    EnterEmployename(EmployeeName){
        return cy.get(this.employe_name_id).type(EmployeeName)
    }
    
    enterusername(Uname){
        cy.get(this.username_id).type(Uname)
    }
    enterpassword(Pass){
        cy.get(this.password_id).type(Pass)
    }
    enterconfirmpassword(Confirmpass){
        cy.get(this.confirm_password_id).type(Confirmpass)
    }
    savebutton(){
        cy.get(this.save_buttonj_id).click()
    }
 }

 export default Add_user
    