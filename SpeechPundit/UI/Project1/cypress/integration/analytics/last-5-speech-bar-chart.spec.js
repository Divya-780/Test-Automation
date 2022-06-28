//Bar chart time frame - Last 5 speeches.
describe('Bar chart time frame - Last 5 speeches', function () {
    it('User shall be able to view the bar chart of all the speeches and metrics done for the selected time frame -Last 5 speeches.', function () {
        //login as a valid user.
        let url = Cypress.config().signinUrl; //accesing baseUrl
        cy.visit(url);
        // cy.visit("https://dev02.speechpundit.com/signin");
        cy.get('#email').type('sowbhagya3696+18@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        //Analytics page
        cy.get('[routerlink="/activity/analytics"]').click()
        //Action
        cy.get('.form-select-sm').eq(0).select('Last 5 Speeches').should('have.value', 'last5');
        //-- VALIDATION-- //
        cy.contains('Weekly Performance')
        
    })
})