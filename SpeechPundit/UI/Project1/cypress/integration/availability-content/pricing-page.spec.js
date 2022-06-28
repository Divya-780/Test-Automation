describe('Test "Pricing" links on speechcoach website', function () {
    it('Verify that "Pricing" link is present on speechcoach website and navigates correctly',function(){
        //Action
        let url = Cypress.config().baseUrl; //accesing baseUrl
        cy.visit(url);
        //verify that pricing page is navigating
        cy.contains("Pricing").click();
        //Pricing information is displayed correctly.
        cy.url().should("contain", 'pricing_plan');   
    })
})