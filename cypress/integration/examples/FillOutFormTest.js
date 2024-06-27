//cypress - Spec
///<reference types ="Cypress" />


import FillOutFormPage from "../pageObjects/FillOutFormPage"

describe('My First Test', function()

{

    before(function(){

        //Runs once before all tests in the block

        cy.fixture('example').then(function(data)
        {
            
            this.data = data
        })

    })
    it('Does not do much!', function(){
       
	   const fillOutFormsPage = new FillOutFormPage()
       cy.visit("https://ultimateqa.com/automation")


        fillOutFormsPage.getTitle()
		fillOutFormsPage.clickOnFillOutFormsLink().click()
        fillOutFormsPage.enterName().type(this.data.name)
		fillOutFormsPage.enterMessage().type(this.data.message)
		fillOutFormsPage.clickOnSubBtn().click()
        fillOutFormsPage.verifyThankMessage();
        fillOutFormsPage.enterNameTwo().type(this.data.name)
        fillOutFormsPage.enterMessageTwo().type(this.data.message)
        fillOutFormsPage.enterContactCaptcha().type(this.data.captchaNo)
        fillOutFormsPage.clickOnSubBtnTwo().click()
        fillOutFormsPage.verifyThankMessageTwo();

    })
})