import 'cypress-localstorage-commands';

Cypress.Commands.add('assertLoadingIsShownAndHidden', () => {
  cy.contains('Loading ...').should('be.visible');
  cy.contains('Loading ...').should('not.exist');
});

Cypress.Commands.add('getStories', (query) => {
  cy.intercept({
    method: 'GET',
    pathname: '**/search',
    query: {
      query: query.query,
      page: query.page.toString(),
    },
  });
});
