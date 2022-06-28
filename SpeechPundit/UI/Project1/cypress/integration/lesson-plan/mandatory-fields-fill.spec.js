//Test Case MYS-T83
//Mandatory fields to be filled.
describe(' Mandatory fields to be filled.', function () {
  it('All required fields to be filled before saving the lesson plan.', function () {
    // visit signin Url.
    cy.visit("https://dev02.speechpundit.com/signin");
    cy.get('#email').type('sowbhagya3696+202@gmail.com');
    cy.get('#password').type('Sathwik@1719')
    cy.get('form').submit();
    cy.wait(1000);
    //select the Lesson Plan
    cy.get('.nav-item').invoke('show');
    cy.get('.dropdown-item').eq(3).click({force: true});
    //Click " Add New" to add a new lesson plan.
    cy.get('.btn').click();
    //Enter Speech Title, Speech Level and Speech time (duration).
    cy.get('#speechTitle').type('About childhood');
    cy.get('.form-select').select('Beginner').should('have.value', 'Beginner');
    cy.get('#speechTime').clear().type('9');
    //Add the Introduction, Key Points and closing.
    cy.get('.ql-editor').eq(0).type(' self introduction ');
    cy.get('.ql-editor').eq(1).type('importance of memories');
    cy.get('.ql-editor').eq(2).type('experience');
    //Click "save"
    cy.contains('Save').click();
    //VALIDATION
    cy.contains('About childhood');
  })
})
