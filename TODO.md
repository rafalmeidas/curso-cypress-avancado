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
