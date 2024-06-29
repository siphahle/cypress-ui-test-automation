class HomePage
{
    getTitle()
    {
      return cy.title().should('eq','Automation Practice - Ultimate QA')
    }
    clickOnLoginViaAutomationLink()
    {
      return  cy.get('.et_pb_text_inner > ul > :nth-child(6) > a')
    }
    enterEmail()
    {
        return cy.get('input[type=email')
        
    }
    enterPassword()
    {
        return cy.get('input[type=password')
        
    }
    clickOnSubmitBtn()
    {
        return cy.get('.form__button-group > .button') 
    }
    clickOnTheDropDownLogout()
    {
        return  cy.get('.dropdown__toggle-button')
    }
    clickSignOut()
    {
        return  cy.get(':nth-child(4) > a')
    }
}

export default HomePage;