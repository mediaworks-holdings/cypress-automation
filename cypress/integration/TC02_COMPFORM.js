/// <reference types="cypress" />

describe("SCN01_COMPFORM_WithLogin" , function()
{
  it("WithLogin", function()
  {
    cy.visit("https://www-test.maifm.co.nz/home/Rams_AutomationArticle/WithLogin.html")
   // cy.get('.fbw-state--loggedOut > :nth-child(2) > a').click()
   cy.wait(4000)

   cy.get('.hide > [onclick="javascript: FBW.Firebase.Login.show(); return false;"]').click()
   
   //cy.get('.fbw-state--loggedIn > :nth-child(2) > a')

    cy.get('#loginUsername').type('ramkumarselvaraj@mediaworks.co.nz')
    cy.get('#login-button').click()
    cy.wait(2000)
    cy.get('#loginPassword').type('123456')
    cy.get('#login-button').click()
    cy.wait(4000)
    //cy.get('.fbw-state--loggedIn > :nth-child(2) > a').click()

    cy.get('#formBuilder5000UserName').should('have.value', 'Updatedin FCStore')
    cy.get('#formBuilder5000UserEmail').should('have.value', 'ramkumarselvaraj@mediaworks.co.nz')
    cy.get('#formBuilder5000UserMobilePhone').should('have.value', '67778888')
    cy.get('#formBuilder5000UserHomePhone').should('have.value', '66777888')
    cy.get('#formBuilder5000UserDob').should('have.value', '2000-01-01')
    cy.get('#formBuilder5000UserGender').should('have.value', 'Male')
    cy.get('#formBuilder5000UserAddress').should('have.value', '3 flower street')
    cy.get('#formBuilder5000UserPostalCode').should('have.value', '5556')
   // cy.wait(5000)
  
  cy.get('#formBuilder5000TAndC').click({force: true})
  
  //Asserting in HTML DOM
  cy.get('div[data-competition-id="1620083092811"]').should('have.attr','data-competition-id').and('exist','1620083092811')
  cy.get('button[type="button"]').contains("Submit").click()
  cy.wait(1500)
  cy.contains('Thank you for submitting your entry!')
  cy.get('.fbw-state--loggedIn > :nth-child(2) > a').click()    
  })
})

/// <reference types="cypress" />

describe("SCN02_COMPFORM_WithoutLogin" , function()
{
  it("WithOutLogin", function()
  {
    cy.visit("https://www-test.maifm.co.nz/home/Rams_AutomationArticle/WithOutLogin.html")
   // cy.get('.fbw-state--loggedOut > :nth-child(2) > a').click()
   cy.wait(3500)

 //  cy.get('.hide > [onclick="javascript: FBW.Firebase.Login.show(); return false;"]').click()
   
   //cy.get('.fbw-state--loggedIn > :nth-child(2) > a')

   cy.get('#formBuilder5000UserName').type('Ram')
   cy.get('#formBuilder5000UserEmail').type('abc@gmail.com')
   cy.get('#formBuilder5000UserMobilePhone').type('8898239829')
   cy.get('#formBuilder5000UserDob').type('2000-01-01')
   cy.get('#formBuilder5000UserRegion').select('Wellington')
   cy.get('#formBuilder5000UserPostalCode').type('1000')
   
  cy.get('#formBuilder5000TAndC').click({force: true})
  cy.get('button[type="button"]').contains("Submit").click()
  cy.wait(1500)
  cy.contains('Thank you for submitting your entry!')
    })
  })
