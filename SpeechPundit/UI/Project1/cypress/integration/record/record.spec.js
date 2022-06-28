describe('Record a video', function () {
    it('User shall be able to record a video.', function () {
        //Login with valid credentials.
        cy.visit("https://dev02.speechpundit.com/signin")
        cy.get('#email').type('sowbhagya3696+4@gmail.com')
        cy.get('#password').type('Sathwik@1719')
        cy.get('form').submit()
        // Go to the record page.
        cy.contains('Record').click()  
        //User shall be presented with a screen with user positioning silhouette.
        cy.contains('Click here to practice your speech').click()          
})
})
