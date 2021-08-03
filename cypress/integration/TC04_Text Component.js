/// <reference types="cypress" />
const chai = require('chai');
const expect=chai.expect;

describe("SCN01_TextFormatComponent" , function()
{
  it("Verifying Text Formats", function()
  {
    cy.visit("https://www-test.maifm.co.nz/home/Rams_AutomationArticle/text.html")
    cy.wait(2000)
    cy.wait(2000)
//Asserting in HTML DOM
   // cy.get('meta[property="og:image"]').should('have.attr','content').and('exist','https://www-test.maifm.co.nz/home/Rams_AutomationArticle/thumbnail-only/_jcr_content/image.dynimg.1280.q75.jpg/v1/2.jpg')
 //   cy.get('.c-ArticleBody').find('p[b]').contains("Bold").should('have.attr','b')
   // cy.get('.c-ArticleBody').find('b').should('have.attr','b')
   // cy.get('.c-ArticleBody').contains('Bold').should('have.attr','<b>')
  // cy.get('p[b]').should('have.attr','b')
//  cy.get('.c-ArticleBody').find('b').should(($labels)=>{expect($labels).to.have.css('font-weight','400');})

//cy.get('.c-ArticleHeader-title').contains('Text').should('have.css','font-weight','700')
//cy.get('.c-ArticleHeader-title').contains('Text').should('have.css','font-weight','700')
//cy.get('.c-ArticleBody').find('b').should('have.css','font-style', 'Bold')
//cy.get('.c-ArticleBody').find('i').should('have.css','font-style', 'italic')
//cy.get('.c-ArticleBody').find('b').should('have.css','font-style', 'b')
cy.get('.c-ArticleBody').find('p').eq(0).contains('Bold').should('have.css','font-weight','bold')
//cy.get('.c-ArticleBody').should('have.css','font-style', 'b')
cy.get('.c-ArticleBody').find('i').should('have.css','font-style', 'italic')
cy.get('.c-ArticleBody').find('u').should('have.css','Underline Style', 'underline')
 cy.get('.c-ArticleBody').find('u').should('have.css',)


  // .contains('Bold').should('have.attr','<b>')
  //  img[srcset="/home/Rams_AutomationArticle/thumbnail-only/_jcr_content/image.dynimg.full.q75.jpg/v1/2.jpg"]').should('have.attr','srcset')
  //  .and('exist','/home/Rams_AutomationArticle/thumbnail-only/_jcr_content/image.dynimg.1280.q75.jpg/v1/2.jpg')  
  })
})

//cy.get('meta[property="og:image"]').should('have.attr','content').and('exist','https://www-test.maifm.co.nz/home/Rams_AutomationArticle/thumbnail-only/_jcr_content/image.dynimg.1280.q75.jpg/v1/2.jpg')
  //  cy.get('.BeltTile-image').find('img[srcset="/home/Rams_AutomationArticle/thumbnail-only/_jcr_content/image.dynimg.full.q75.jpg/v1/2.jpg"]').should('have.attr','srcset')
  //  .and('exist','/home/Rams_AutomationArticle/thumbnail-only/_jcr_content/image.dynimg.1280.q75.jpg/v1/2.jpg')  
 // })

// cy.get('#period_1').should(($labels)=>{
//  expect($labels).to.have.css('font-weight','700');
// })