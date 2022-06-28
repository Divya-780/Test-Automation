//Donut chart-Areas of Improvement.
describe('Donut chart-Areas of Improvement', function () {
    it(' User shall be able to view the metrics in donut chart of all the speeches.', function () {
        //login as a valid user.
        let url = Cypress.config().signinUrl; //accesing baseUrl
        cy.visit(url);
        // cy.visit("https://dev02.speechpundit.com/signin");
        cy.get('#email').type('sowbhagya3696+4@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        //Analytics page
        cy.get('[routerlink="/activity/analytics"]').click()
        //Action
        cy.get('.form-select-sm').eq(0).select('Last 5 Speeches').should('have.value', 'last5');
        cy.get('.chartjs-render-monitor').last().click()
        cy.wait(2000)
        cy.get('.chartjs-render-monitor').last().trigger('mousedown').click()
        cy.get('.chartjs-render-monitor').last().trigger('mouseup').click()
    })
})