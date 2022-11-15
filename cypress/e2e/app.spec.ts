
describe('App', () => {
    it('should navigate to the welcome page', () => {
        cy.visit('http://localhost:3000/')

    // The new page should contain an h1 with " Welcome"
        cy.get('h1').contains('Welcome')

    })
})