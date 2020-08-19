describe('testing Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should add a task', () => {
    cy.get('#task').type('Teste')

    cy.get('#button').click()

    cy.get('#card-1').contains(/Teste/)
  })

  it('should check a task', () => {
    cy.get('#checkbox-0').check()

    cy.get('#checkbox-0').should('be.checked')
  })
})
