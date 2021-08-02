/// <reference types="cypress" />

describe("InternalTools-Test" , function()
{
  it("Competition Form Builder Test", function()
  {
    cy.visit("https://internal-test.mediaworks.nz/")
    cy.get('.Link_name').contains('Competition Form Builder').click()
    cy.get('#loginBtn').click()

   //cy.wait(1500)
    cy.get('.Link_name').contains('Competition Form Builder').click()
  //  cy.get('.auth-lock-social-buttons-pane').find('.auth0-lock-social-button-text').click()
 
   cy.wait(1500)
    cy.get('.form-control').select('Mai')
    cy.wait(3000)
   // cy.get('.form-control').contains('Mai').select()
   cy.get(':nth-child(7) > :nth-child(3) > .btn').click()
   //cy.get("btn btn-primary pull-right ng-isolate-scope").click()
   cy.wait(3000)
   cy.get('table').contains('td', '67778888').should('be.visible').and('exist','67778888')
   //should('have.value', '67778888')
   //cy.get('table').contains('td', '67778888').should('have.value', '67778888')
   //cy.get('tbody > :nth-child(1) > :nth-child(6)').should('have.string', '67778888')
   //cy.get('div.panel-body').find('.ng-binding ng-scope').should('have.value', 'ramkumarselvaraj@mediaworks.co.nz').and('exist','ramkumarselvaraj@mediaworks.co.nz')
   //cy.get('.panel-body').find('.ng-scope').contains('3 flower street').should('have.value', '3 flower street')
   //.find('table table-bordered table-striped table-hover table-condensed').find('.ng-scope').find('.ng-binding ng-scope').contains('3 flower street').should('have.value', '3 flower street')
   //cy.contains("c").find('.btn btn-primary').click()
   //cy.get('.panel-body').find('.ng-binding').contains('1620083092811').contains('SHOW').click()

   /* cy.get(".panel-body").each(($e1, index, $list) => {
    // cy.get("tr td:nth-child(2)").each(($e1, index, $list) => {  this can also be used because "td" or "tr td" gives the same output
    //storing the content in the text variable
    const text = $e1.text()
    //If the content is Google,iteration stops
    if (text.includes("1620083092811")) {
      //grabs the element at the index
      cy.get('button[ng-click="downloadEntries(form)"]').eq(index)
      //selects the checkbox
      cy.contains("Show").eq(index).click()
    }
  }) */

   //cy.get('.panel-body').find('.ng-binding ng-scope').should('have.value','ramkumarselvaraj@mediaworks.co.nz')
   //cy.get('.btn btn-primary pull-right ng-isolate-scope').click()
  //  cy.get('.ng-binding').contains("1620083092811").click()
   // cy.get('.fbw-state--loggedOut > :nth-child(2) > a').click()
  })
})

