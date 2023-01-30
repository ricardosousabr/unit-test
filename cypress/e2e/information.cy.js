describe('interaction', () => {
  it('information', () => {
    cy.visit('http://localhost:3000/information')

    cy.url().should('eq', 'http://localhost:3000/information')

    cy.url().should('contain', 'information')

    cy.get('ul > li:first').should('contain', 'Ricardo')

    cy.get('ul > li').should('contain', '21')

    cy.get('ul > li').should('contain', 'Teresina')
  })
})

describe('navigation', () => {
  it('snow to about', () => {
    cy.visit('http://localhost:3000/information')

    cy.get('div > .link[href*="/about"]').click()

    cy.url().should('eq', 'http://localhost:3000/about')
  })
})