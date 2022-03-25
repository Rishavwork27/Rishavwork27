class contact_details{

    personal_details_button='#sidenav > :nth-child(2) > a'


    clickcontactdetailsbutton(){
        cy.get(this.personal_details_button).click()
    }
}
export default contact_details