describe('Testing About Us page', function () {
    it(' Verify that "About Us" header link is present on speechcoach website and navigates correctly', function () {
    //"About Us"
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains('About Us').click();
    //Verify that email present
    cy.contains('info@speechpundit.com');
    cy.wait(5000);
    //About Us page navigates correctly-Validation
    cy.url().should("contain", 'about_us');
    })
 })