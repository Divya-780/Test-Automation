//Test Case-MYS-T84.
//Error if missing any required fields.
describe('Error if missing any required fields. ', function () {
  it('Coach shall get an error message while saving if all required fields are not filled.', function () {
    //visit signin url
    cy.visit("https://dev02.speechpundit.com/signin");
    cy.get('#email').type('sowbhagya3696+202@gmail.com');
    cy.get('#password').type('Sathwik@1719');
    cy.get('form').submit();
    cy.wait(1000);
    //visit Lesson Plan 
    cy.get('.nav-item').invoke('show');
    cy.get('.dropdown-item').eq(3).click({force: true});
    //Click " Add New" to add a new lesson plan.
    cy.get('.btn').click();
    // Enter Speech Title, Speech Level and Speech time (duration).
    cy.get('#speechTitle');
    cy.get('#speechTime');
    //Click "save"
    cy.contains('Save').click();
    //VALIDATION
    cy.contains('Introduction Required');
  })
})
