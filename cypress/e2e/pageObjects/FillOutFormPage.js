class FillOutFormPage
{
   
   getTitle()
   {
        return cy.title().should("contain", "Ultimate QA");
   }
   
   clickOnFillOutFormsLink()
    {
     return  cy.get('.et_pb_text_inner > ul > :nth-child(4) > a')
    }

    enterName()
    {
        return  cy.get('#et_pb_contact_name_0')
    }
    enterMessage()
    {
         return  cy.get('#et_pb_contact_message_0')
    }
    clickOnSubBtn()
    {
        return cy.get('#et_pb_contact_form_0 > div.et_pb_contact > form > div > button')
    }
    verifyThankMessage()
    {
        return cy.get('.et-pb-contact-message > p').should('have.text','Thanks for contacting us')
    }

    //Second Contact Form

    enterNameTwo()
    {
        return  cy.get('#et_pb_contact_name_1')
    }
    calculateContactCaptcha()
    {
        return cy.get('.clearfix > .input').each(($el,index,$list)=>{
            console.log(Text)

        })
    }

    enterMessageTwo()
    {   
        return  cy.get('#et_pb_contact_message_1')
    }
   
    enterContactCaptcha()
    {
            return cy.get('.clearfix > .input')
    }
    clickOnSubBtnTwo()
    {
        return cy.get('.et_pb_contact_submit')
    }
    verifyThankMessageTwo()
    {
        return cy.get('.et-pb-contact-message > p').should('have.text','Thanks for contacting us')
    }
}

export default FillOutFormPage;