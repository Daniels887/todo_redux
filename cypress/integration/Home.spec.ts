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

  it('should validate input with is required', () => {
    cy.get('#button').click()

    cy.get('#error').contains(/É necessário preencher o campo da tarefa./)
  })

  it('should validate input with min length of characters', () => {
    cy.get('#task').type('a')

    cy.get('#button').click()

    cy.get('#error').contains(
      /Nome da tarefa muito pequeno, o mínimo são 5 caracteres./
    )
  })
})
