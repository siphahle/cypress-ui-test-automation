//cypress - Spec
///<reference types ="Cypress" />

import HomePage from "../pageObjects/HomePage"

describe('Voss QA Engineer Assessment', function()

{

    before(function(){

        //Runs once before all tests in the block
        cy.fixture('example').then(function(data)
        {
            
            this.data = data
        })

    })
    it('Login Functionality', function(){
        
       const homePage = new HomePage()
       cy.visit(Cypress.env('url')+"/automation")
       
       homePage.getTitle();
       homePage.clickOnLoginViaAutomationLink().click()
       homePage.enterEmail().type(this.data.email)
       homePage.enterPassword().type(this.data.password)
       homePage.clickOnSubmitBtn().click()
       cy.wait(5000)
       homePage.clickOnTheDropDownLogout().click()
       homePage.clickSignOut().click()
    })
})