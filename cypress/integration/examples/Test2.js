//cypress - Spec
///<reference types ="Cypress" />


describe('My First Test', function(){

    beforeEach(() => {
       cy.visit('https://ultimateqa.com/automation');
    
    });


    it("Verify Page Title", () => {

        cy.title().should('eq','Automation Practice - Ultimate QA')
    });
    it("Verify Page Title", () => {

        cy.title().should('eq','Automation Practice - Ultimate QA');
    });

    it("Login to the page via Login automation Link", () => {

        cy.get('.et_pb_text_inner > ul > :nth-child(6) > a').click();

        cy.get('input[type=email').clear().type("onlyqacontent@gmail.com");
        cy.get('input[type=password').clear().type("Vossqa_2024");
        cy.get('.form__button-group > .button').should('be.visible'). click();  
        cy.get('.dropdown__toggle-button').click()
        cy.get(':nth-child(4) > a').click()
    
    });

    

})
