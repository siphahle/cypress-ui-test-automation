class FakePricingPage
{
    getTitle()
    {
      return cy.title().should('eq','Automation Practice - Ultimate QA')
    }
    clickOnFakePricingPage()
    {
      return  cy.get('.et_pb_text_inner > ul > :nth-child(3) > a')
    }
    verifyPurchaseBtns()
    {
        return cy.get('.et_pb_button et_pb_pricing_table_button').should('have.length.of.at.most', 4)

    }
   
}

export default FakePricingPage;