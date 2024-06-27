describe("ultimate qa - complicated page", () => {
	beforeEach(() => {
		cy.visit("https://ultimateqa.com/automation");
		cy.get("li a").eq(12).click();
	});

	it("should have a title", () => {
		cy.title().should("contain", "Ultimate QA");
	});

	it("should should have the Section of Buttons title", () => {
		cy.get('.et_pb_text_inner > ul > :nth-child(4) > a').click()
        cy.get('#et_pb_contact_name_0').clear().type("gghgh");
        cy.get('#et_pb_contact_message_0').clear().type("gghgh");
        cy.get('#et_pb_contact_form_0 > div.et_pb_contact > form > div > button').click()

	});

    it("should should have the Section of Buttons title", () => {
		
        
	});

});