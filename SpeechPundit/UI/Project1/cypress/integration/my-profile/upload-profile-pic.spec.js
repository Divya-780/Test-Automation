//User shall be able to upload the profile pic.
describe('User shall be able to upload the profile pic.', function () {
    it(' User shall be able to upload/change the profile pic on my profile page.', function () {
        //login as a valid user.
        cy.visit("https://dev02.speechpundit.com/signin");
        cy.get('#email').type('sowbhagya3696+4@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        cy.wait(3000);
        cy.get('.nav-item').invoke('show');
        cy.get('.dropdown-item').eq(1).click({force: true});
        cy.get('.p-button-label').click();
        cy.get('form').submit();
    })
})