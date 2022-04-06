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
