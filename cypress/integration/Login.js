/// <reference types="cypress" />
import Login_Page from "../pages/LoginPage";
import Home_page from"../pages/Homepage";
import Add_user from "../pages/Add_User";
import info from "../pages/My_info";
import contact_details from "../pages/contactdetails";
import Log_out from "../pages/Logout";

        const login = new Login_Page();
        const Home=new Home_page();
        const add=new Add_user();
        const In= new info();
        const Pdetails = new contact_details();
        const log = new Log_out

describe('OrangeHRM test',function(){

    beforeEach(function() {
        cy.fixture("Example").then(function(data){
            this.data=data;
        login.navigate();
        login.enterusername(this.data.Username);
        login.enterpassword(this.data.Password);
        login.loginbutton();
        })
    })
    xit("Login with valid credentials in OrangeHRM", function(){
    
        login.navigate();
        login.enterusername(this.data.Username);
        login.enterpassword(this.data.Password);
        login.loginbutton();

    })
    it('homepage',function(){
        Home.dashboardbutton();
        Home.ClickAdmin();
        Home.AddButton();
        })

        it('Adduser',function(){
            Home.dashboardbutton();
            Home.ClickAdmin();
            Home.AddButton();
            add.EnterEmployename(this.data.EmployeeName);
            add.enterusername(this.data.Uname);
            add.enterpassword(this.data.Pass);
            add.enterconfirmpassword(this.data.Confirmpass);
            add.savebutton();
        
            })   
            it('Info',function(){
                In.ClickMyInfo();
                In.clickeditbutton();
                In.clickeditbutton();
})
           it('contact  Information',function(){
            In.ClickMyInfo();
            Pdetails.clickcontactdetailsbutton();
})
           it('Logout',function(){
            log.clickprofilrbutton();
            log.logoutbutton();
   
})
})


   