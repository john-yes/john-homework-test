import Helper from "../pages/helper";
let helper = new Helper()

describe('Expedia', () => {

  it('Test Case 1 / Test Case 2', () => {

    helper.visitBasePage()
    helper.stays.click()
    helper.goingTo
        .click()
        .type('  Universal Orlando Resort', {delay:40})
    cy.get('.uitk-typeahead-results').contains('Universal Orlando Resort')
        .click()
    cy.get('[id="d1-btn"]')
        .click()

    helper.datePicker(7,14)

    cy.get('[data-stid="apply-date-picker"]').click()
    cy.get('[data-testid="submit-button"]').click()

    cy.findByRole('button', { name: /travelers 1 room, 2 travelers/i })
        .click({force:true})
    cy.get('[aria-label="Adults undefined"]').should('have.value','2')
    cy.addChildren('2')
    cy.get('[id="age-0"]').select('8')
        .should('have.value','8')
    cy.get('[id="age-1"]').select('10')
        .should('have.value','10')
    cy.get('[data-stid="apply-room-picker"]').click({force:true})
  })
})

describe('Flights test', () => {

  it('Test Case 3/ Test Case 4 ', () => {
    helper.visitBasePage()
    cy.get('.uitk-tab-text').contains('Flights')
        .click()
    cy.get('a[aria-controls="wizard-flight-tab-roundtrip"]')
        .should('have.attr', 'aria-selected', 'true')
    cy.contains('label','Leaving from')
        .should('exist')
    cy.contains('label','Going to')
        .should('exist')
    cy.contains('label','Departing')
        .should('exist')
    cy.contains('label','Returning')
        .should('exist')
    cy.get('[data-testid="preferred-class-input-trigger"]')
        .should('have.text','Economy')
        .click()
    cy.get('.uitk-menu-list-item-label').contains('First class')
        .click()
    cy.get('[data-testid="preferred-class-input-trigger"]')
        .should('have.text','First class')
    cy.contains('label','Returning')
        .should('exist')
    cy.get('.uitk-tab-text').contains('One-way')
        .should('exist')
        .click()
    cy.contains('label','Returning')
        .should('not.exist')
    cy.get('.uitk-tab-text').contains('Roundtrip')
        .click()
    cy.contains('label','Returning')
        .should('be.visible')
  })

})

describe('Test Case 5/loop', function () {

  it('test 5 ', function () {
    helper.visitBasePage()
    cy.get('[class$="lobNavigationFormWithTabs formAlignedTabs uitk-spacing-margin-blockstart-three"]>li')
        .each(($list)=>{
          cy.wrap($list).click()
          cy.get('[data-testid="submit-button"]')
              .should('exist')
              .and('have.css','background-color','rgb(54, 98, 216)')
              .and('be.visible')
        })
  });
});