//Edit the group
describe('Edit the group',function(){
    it('Coach shall be able to edit the existing group',function(){
    //Login with coach credentials.
    cy.visit("https://dev02.speechpundit.com/signin");
    cy.get('#email').type('sowbhagya3696+4@gmail.com');
    cy.get('#password').type('Sathwik@1719');
    cy.get('form').submit();
    cy.get('.nav-item').invoke('show');
    cy.get('.dropdown-item').eq(5).click({force: true});
    cy.wait(1000);
    cy.get('#dropdownOne').click();
    cy.contains('Edit').click();
    cy.get('#name').clear().type('sowji');
    cy.get('#level').select('Beginner').should('have.value','Beginner');
    cy.get('.p-dialog-footer > .btn').click();
    //VALIDATION
    cy.contains('sowji');  
    })
})