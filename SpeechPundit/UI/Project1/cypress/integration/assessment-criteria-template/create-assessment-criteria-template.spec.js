//Create Assessment Criteria template
describe('Create Assessment Criteria template',function(){
    it('Coach shall be able to create a custom assessment criteria template',function(){
    //Login with coach credentials.
    // cy.visit("https://dev02.speechpundit.com/signin");
    let url = Cypress.config().signinUrl; //accesing baseUrl
    cy.visit(url);
    cy.get('#email').type('sowbhagya3696+4@gmail.com');
    cy.get('#password').type('Sathwik@1719');
    cy.get('form').submit();
    //Access the Assessment criteria
    cy.get('.nav-item').invoke('show');
    cy.get('.dropdown-item').eq(6).click({force: true});
    cy.get('.fa-clone').first().click();
    cy.get('.form-control').type('cypress');
    cy.get('.form-select').select('Beginner').should('have.value', 'Beginner');
    cy.get('input[type="checkbox"').eq(3).check({force: true});
    cy.get('input[type="checkbox"').eq(5).check({force: true});
    cy.get('.fa').eq(2).type('0');
    cy.get('.fa').eq(4).type('0');
    cy.get('.btn').click();
    ///-- VALIDATION --//
    cy.contains('cypress');
    })
})
