class Login_Page{

    Loginpage_username ='#txtUsername'
    Loginpage_password ='#txtPassword'
    Login_button='#btnLogin'
    navigate(){
        cy.visit('/')
    }
    enterusername(Username){
         return cy.get(this.Loginpage_username).type(Username)
    }
    enterpassword(Password){
         return cy.get(this.Loginpage_password).type(Password)
    }
    loginbutton(){
        return cy.get(this.Login_button).click()
    }
   }

export default Login_Page