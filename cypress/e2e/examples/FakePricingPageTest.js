//cypress - Spec
///<reference types ="Cypress" />

import FakePricingPage from "../pageObjects/FakePricingPage"

describe('Voss QA Engineer Assessment', function()

{

    before(function(){

        //Runs once before all tests in the block
        cy.fixture('example').then(function(data)
        {
            
            this.data = data
        })

    })
    it('Fake Pricing Assessment', function(){
        
       
       const fakePricingPage = new FakePricingPage()
       cy.visit(Cypress.env('url')+"/automation")

       fakePricingPage.getTitle();
       fakePricingPage.clickOnFakePricingPage().click()
       fakePricingPage.verifyPurchaseBtns()
    })
})