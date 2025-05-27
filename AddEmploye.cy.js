describe('OrangeHRM Add Leave Entitlement', () => {
  const adminUser = 'Admin';
  const adminPass = 'admin123';

  it('1. Add Leave - Positive Case', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type(adminUser);
    cy.get('[name="password"]').type(adminPass);
    cy.get('[type="submit"]').click();

    cy.contains('Leave').click();
    cy.contains('Entitlements').click();
    cy.contains('Add Entitlements').click();

    cy.get('.oxd-autocomplete-text-input input').type('Fathi');
    cy.wait(1000);
    cy.contains('.oxd-autocomplete-option', 'Fathi').click();

    cy.get('.oxd-select-text').first().click();
    cy.contains('CAN - Vacation').click();

    cy.get('.oxd-input').eq(1).type('3');
    cy.get('[type="submit"]').click();
    cy.contains('button', 'Confirm').click();

    cy.contains('Success', { timeout: 10000 }).should('be.visible');
  });

  it('2. Add Leave - Negative Case (Empty Fields)', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type(adminUser);
    cy.get('[name="password"]').type(adminPass);
    cy.get('[type="submit"]').click();

    cy.contains('Leave').click();
    cy.contains('Entitlements').click();
    cy.contains('Add Entitlements').click();

    cy.get('[type="submit"]').click();
    cy.contains('Required').should('exist');
  });
});