//Edit custom template
describe('Edit custom template',function(){
    it('coach shall be able to edit the custom template',function(){
    //Login with coach credentials.
    // cy.visit("https://dev02.speechpundit.com/signin");
    let url = Cypress.config().signinUrl; //accesing baseUrl
    cy.visit(url);
    cy.get('#email').type('sowbhagya3696+4@gmail.com');
    cy.get('#password').type('Sathwik@1719');
    cy.get('form').submit();
    //Access the Assessment criteria
    cy.get('.nav-item').invoke('show')
    cy.get('.dropdown-item').eq(6).click({force: true})
    cy.get('.fa-edit').last().click();
    cy.get('.form-control').clear().type('guru');
    cy.get('.form-select').select('Beginner').should('have.value', 'Beginner');
    cy.get('.btn').click();
    //-- VALIDATION --// 
    cy.contains('guru');

    })
})