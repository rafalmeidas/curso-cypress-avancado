### Aula 1

**Aplicação para executar os testes `https://wlsf82-hacker-stories.web.app/`**

### Aula 2

**Interceptar requisições com cypress e aguardar a requisição acabar para seguir com o processo do teste**
Exemplo

```
beforeEach(() => {
cy.intercept('GET', '\*\*/search?query=React&page=0').as('getStories');

    cy.visit('/');
    cy.wait('@getStories');

});
```

### Aula 26

**Seletores complexos, como acessa-los de maneira mais simples**

```
cy.get('.last-searches').within(() => {
    cy.get('button').should('have.length', 5);
});
```

### Aula 27

**Será necessário instalar a biblioteca `cypress-localstorage-commands` e importar no arquivo de `commands.js`**
`import "cypress-localstorage-commands";`

## Aula 31

**Aplicar delay em uma busca, interceptando um request**

```
context.only("'Loading...' wait get stories", () => {
    beforeEach(() => {
        cy.intercept('GET', '**/search**', {
            delay: 1000,
            fixture: 'stories',
        }).as('getDelayedStories');

        cy.visit('/');
    });

    it('shows a "Loading ..." state before showing the results', () => {
        cy.assertLoadingIsShownAndHidden();

        cy.wait('@getDelayedStories');

        cy.get('.item').should('have.length', 2);
    });
});
```
