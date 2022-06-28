describe(' Testing "Join SpeechPundit" functionality ', function () {
    it(' Verify that "Join SpeechPundit" form is present on speechcoach website and funtions work correctly',function(){
        //"Join SpeechPundit" form is present.
        cy.visit("https://dev02.speechpundit.com/");
        cy.get('#email').type('sowbhagya3696+130@gmail.com');
        cy.get('form').submit();
        //"Sign Up" form is displayed correctly prepopulated with the email address from above.
        cy.url().should("contain", 'signup');
    })
})