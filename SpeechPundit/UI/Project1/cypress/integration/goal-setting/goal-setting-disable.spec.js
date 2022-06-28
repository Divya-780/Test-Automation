//Goal setting - disable
describe('Goal setting- disable', function () {
    it('Coach shall be able to disable the goal setting option..', function () {
        //sigin as coach.
        let url = Cypress.config().signinUrl; //accesing baseUrl
        cy.visit(url);
        // cy.visit("https://dev02.speechpundit.com/signin");
        cy.get('#email').type('sowbhagya3696+4@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        cy.wait(3000)
        //visit goal setting  url.
        cy.get('.nav-item').invoke('show')
        cy.get('.dropdown-item').eq(4).click({force: true})
        cy.get('.ng-untouched ').first().click()
        cy.get('.ng-untouched ').last().click()
        //VALIDATION
        cy.contains('Goal Setting');
    })
})