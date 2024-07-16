//cypress - Spec
///<reference types ="Cypress" />

import FakePricingPage from "../pageObjects/FakePricingPage"

describe('Voss QA Engineer Assessment', function()

{

    it('Fake Pricing Assessment', function(){
        
       
       const fakePricingPage = new FakePricingPage()
       cy.visit(Cypress.env('url')+"/automation")

       fakePricingPage.getTitle();
       fakePricingPage.clickOnFakePricingPage().click()
       fakePricingPage.verifyPurchaseBtns()
    })
})