//Student view- goal setting.
describe('Student view- goal setting', function () {
    it('Student shall be able to see the goal setting information on the Activity page.', function () {
        //sigin as coach.
        // cy.visit("https://dev02.speechpundit.com/signin");
        let url = Cypress.config().signinUrl; //accesing baseUrl
        cy.visit(url);
        cy.get('#email').type('sowbhagya3696+4@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        cy.wait(1000)
        //visit goal setting  url.
        cy.get('.nav-item').invoke('show')
        cy.get('.dropdown-item').eq(4).click({force: true})
        cy.get('.ng-untouched ').first().click()
    })
    it('student can visible the goal setting.', function () {
        //sigin as student.
        let url = Cypress.config().signinUrl; //accesing baseUrl
        cy.visit(url);
        // cy.visit("https://dev02.speechpundit.com/signin");
        cy.get('#email').type('sowbhagya3696+18@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        //the goal setting is shown on the left side menu bar, along with the target achieved for that week.
        cy.contains('Target Met')
        //VALIDATION
        cy.contains('Activity');
    })
    
})