describe('Project is success build', () => {
  before(() => {
    // cy.exec('yarn run build').its('code').should('eq', 0)
    // cy.exec('yarn run preview --port 3999').its('code')
  })
  it('Test', () => {
    cy.visit('localhost:3999')
    cy.contains('Gomoku')
  })
})

export default {}
