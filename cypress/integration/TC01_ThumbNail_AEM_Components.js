/// <reference types="cypress" />

describe("SCN01_Thumbnail Image Validation" , function()
{
  it("Verifying Thumbnail only OG Meta Image and HTML belt image", function()
  {
    cy.visit("https://www-test.maifm.co.nz/home/Rams_AutomationArticle/thumbnail-only.html")
    cy.wait(2000)
//Asserting in HTML DOM
    cy.get('meta[property="og:image"]').should('have.attr','content').and('exist','https://www-test.maifm.co.nz/home/Rams_AutomationArticle/thumbnail-only/_jcr_content/image.dynimg.1280.q75.jpg/v1/2.jpg')
    cy.get('.BeltTile-image').find('img[srcset="/home/Rams_AutomationArticle/thumbnail-only/_jcr_content/image.dynimg.full.q75.jpg/v1/2.jpg"]').should('have.attr','srcset')
    .and('exist','/home/Rams_AutomationArticle/thumbnail-only/_jcr_content/image.dynimg.1280.q75.jpg/v1/2.jpg')  
  })
})

describe("SCN02_Thumbnail and Hero Uploaded Validation" , function()
{
  it("Verifying Thumbnail and Hero OG Meta Image and HTML belt image", function()
  {
    cy.visit("https://www-test.maifm.co.nz/home/Rams_AutomationArticle/thumbnail-and-hero-uploaded.html")
    cy.wait(2000)
//Asserting in HTML DOM
    cy.get('meta[property="og:image"]').should('have.attr','content').and('exist','https://www-test.maifm.co.nz/home/Rams_AutomationArticle/thumbnail-and-hero-uploaded/_jcr_content/image.dynimg.1280.q75.jpg/v1626047071799/cats7.jpg')
    cy.get('.BeltTile-image').find('img[srcset="/home/Rams_AutomationArticle/thumbnail-and-hero-uploaded/_jcr_content/image.dynimg.full.q75.jpg/v1626047071799/cats7.jpg"]').should('have.attr','srcset')
    .and('exist','/home/Rams_AutomationArticle/thumbnail-and-hero-uploaded/_jcr_content/image.dynimg.full.q75.jpg/v1626047071799/cats7.jpg')
  })
})


describe("SCN03_Thumbnail and Article Uploaded Validation" , function()
{
  it("Verifying Thumbnail and Artcle uploaded OG Meta Image and HTML belt image", function()
  {
    cy.visit("https://www-test.maifm.co.nz/home/Rams_AutomationArticle/thumbnail-and-article-image.html")
    cy.wait(2000)
//Asserting in HTML DOM
    cy.get('meta[property="og:image"]').should('have.attr','content').and('exist','https://www-test.maifm.co.nz/home/Rams_AutomationArticle/thumbnail-and-article-image/_jcr_content/image.dynimg.1280.q75.jpg/v1/img_girl.jpg')
    cy.get('.BeltTile-image').find('img[srcset="/home/Rams_AutomationArticle/thumbnail-and-article-image/_jcr_content/image.dynimg.360.q75.jpg/v1/img_girl.jpg"]').should('have.attr','srcset')
    .and('exist','/home/Rams_AutomationArticle/thumbnail-and-article-image/_jcr_content/image.dynimg.360.q75.jpg/v1/img_girl.jpg')
  })  
})

  

describe("SCN04_Thumbnail Hero and Article Image Configured Uploaded Validation" , function()
{
  it("Verifying Thumbnail Hero and Article Image Configured uploaded OG Meta Image and HTML belt image", function()
  {
    cy.visit("https://www-test.maifm.co.nz/home/Rams_AutomationArticle/thumbnail-hero-and-article-image-configured.html")
    cy.wait(2000)
//Asserting in HTML DOM
    cy.get('meta[property="og:image"]').should('have.attr','content').and('exist','https://www-test.maifm.co.nz/home/Rams_AutomationArticle/thumbnail-hero-and-article-image-configured/_jcr_content/image.dynimg.1280.q75.jpg/v1626056171617/catjpg.jpg')
    cy.get('.BeltTile-image').find('img[srcset="/home/Rams_AutomationArticle/thumbnail-hero-and-article-image-configured/_jcr_content/image.dynimg.360.q75.jpg/v1626056171617/catjpg.jpg"]').should('have.attr','srcset')
    .and('exist','/home/Rams_AutomationArticle/thumbnail-hero-and-article-image-configured/_jcr_content/image.dynimg.360.q75.jpg/v1626056171617/catjpg.jpg')
  })  
})

  

describe("SCN05_Thumbnail Hero Image only Validation" , function()
{
  it("Verifying Thumbnail Hero Image only OG Meta Image and HTML belt image", function()
  {
    cy.visit("https://www-test.maifm.co.nz/home/Rams_AutomationArticle/hero-image-only.html")
    cy.wait(2000)
//Asserting in HTML DOM
    cy.get('meta[property="og:image"]').should('have.attr','content').and('exist','https://www-test.maifm.co.nz/home/Rams_AutomationArticle/hero-image-only/_jcr_content/par/grid/par1/image.dynimg.1280.q75.jpg/v1626056288189/img_girl.jpg')
    cy.get('.BeltTile-image').find('img[srcset="/home/Rams_AutomationArticle/hero-image-only/_jcr_content/par/grid/par1/image.dynimg.360.q75.jpg/v1626056288189/img_girl.jpg"]').should('have.attr','srcset')
    .and('exist','/home/Rams_AutomationArticle/hero-image-only/_jcr_content/par/grid/par1/image.dynimg.360.q75.jpg/v1626056288189/img_girl.jpg')
  })  
})

  

describe("SCN06_Thumbnail Hero Image and Article only Validation" , function()
{
  it("Verifying Thumbnail Hero Image and Article only OG Meta Image and HTML belt image", function()
  {
    cy.visit("https://www-test.maifm.co.nz/home/Rams_AutomationArticle/hero-and-article-image-only.html")
    cy.wait(2000)
//Asserting in HTML DOM
    cy.get('meta[property="og:image"]').should('have.attr','content').and('exist','https://www-test.maifm.co.nz/home/Rams_AutomationArticle/hero-and-article-image-only/_jcr_content/par/grid/par1/image.dynimg.1280.q75.jpg/v1626057305774/1.jpg')
    cy.get('.BeltTile-image').find('img[srcset="/home/Rams_AutomationArticle/hero-and-article-image-only/_jcr_content/par/grid/par1/image.dynimg.360.q75.jpg/v1626057305774/1.jpg"]').should('have.attr','srcset')
    .and('exist','/home/Rams_AutomationArticle/hero-and-article-image-only/_jcr_content/par/grid/par1/image.dynimg.360.q75.jpg/v1626057305774/1.jpg')
  })  
})

  

describe("SCN07_Thumbnail Article Image only Validation" , function()
{
  it("Verifying Thumbnail Article only OG Meta Image and HTML belt image", function()
  {
    cy.visit("https://www-test.maifm.co.nz/home/Rams_AutomationArticle/article-image-only.html")
    cy.wait(2000)
//Asserting in HTML DOM
    cy.get('meta[property="og:image"]').should('have.attr','content').and('exist','https://www-test.maifm.co.nz/home/Rams_AutomationArticle/article-image-only/_jcr_content/par/grid1/par1/image.dynimg.1280.q75.jpg/v1626057466336/imgtest.jpg')
    cy.get('.BeltTile-image').find('img[srcset="/home/Rams_AutomationArticle/article-image-only/_jcr_content/par/grid1/par1/image.dynimg.360.q75.jpg/v1626057466336/imgtest.jpg"]').should('have.attr','srcset')
    .and('exist','/home/Rams_AutomationArticle/article-image-only/_jcr_content/par/grid1/par1/image.dynimg.360.q75.jpg/v1626057466336/imgtest.jpg')
  })  
})

  

describe("SCN08_Parent Thumbnail only and Child Thumbnail Image only Validation" , function()
{
  it("Verifying Parent Thumbnail and Child Thumbnail OG Meta Image and HTML belt image", function()
  {
    cy.visit("https://www-test.maifm.co.nz/home/Rams_AutomationArticle/parent-thumbnail-only-child-thumbnail-only.html")
    cy.wait(2000)
//Asserting in HTML DOM
    cy.get('meta[property="og:image"]').should('have.attr','content').and('exist','https://www-test.maifm.co.nz/home/Rams_AutomationArticle/parent-thumbnail-only-child-thumbnail-only/_jcr_content/image.dynimg.1280.q75.jpg/v1/img_girl.jpg')
    cy.get('.BeltTile-image').find('img[srcset="/home/Rams_AutomationArticle/parent-thumbnail-only-child-thumbnail-only/_jcr_content/image.dynimg.full.q75.jpg/v1/img_girl.jpg"]').should('have.attr','srcset')
    .and('exist','/home/Rams_AutomationArticle/parent-thumbnail-only-child-thumbnail-only/_jcr_content/image.dynimg.full.q75.jpg/v1/img_girl.jpg')
  })
})

  

describe("SCN09_Parent Thumbnail only and Child Thumbnail only/Child Thumbnail only Image only Validation" , function()
{
  it("Verifying Child Thumbnail only OG Meta Image and HTML belt image", function()
  {
    cy.visit("https://www-test.maifm.co.nz/home/Rams_AutomationArticle/parent-thumbnail-only-child-thumbnail-only/child-thumbnail-only.html")
    cy.wait(2000)
//Asserting in HTML DOM
    cy.get('meta[property="og:image"]').should('have.attr','content').and('exist','https://www-test.maifm.co.nz/home/Rams_AutomationArticle/parent-thumbnail-only-child-thumbnail-only/child-thumbnail-only/_jcr_content/image.dynimg.1280.q75.jpg/v1/imgtest.jpg')
    cy.get('.BeltTile-image').find('img[srcset="/home/Rams_AutomationArticle/parent-thumbnail-only-child-thumbnail-only/child-thumbnail-only/_jcr_content/image.dynimg.225.q75.jpg/v1/imgtest.jpg"]').should('have.attr','srcset')
    .and('exist','/home/Rams_AutomationArticle/parent-thumbnail-only-child-thumbnail-only/child-thumbnail-only/_jcr_content/image.dynimg.225.q75.jpg/v1/imgtest.jpg')
   })   
})

describe("SCN10_Parent-with-child-both-thumbnail-and-Article-Image only Validation" , function()
{
  it("Verifying Parent-with-child-both-thumbnail-and-Article OG Image and HTML belt image", function()
  {
    cy.visit("https://www-test.maifm.co.nz/home/Rams_AutomationArticle/parent-with-child-both-thumbnail-and-article-image.html")
    cy.wait(2000)
//Asserting in HTML DOM
    cy.get('meta[property="og:image"]').should('have.attr','content').and('exist','https://www-test.maifm.co.nz/home/Rams_AutomationArticle/parent-with-child-both-thumbnail-and-article-image/_jcr_content/image.dynimg.1280.q75.jpg/v1/img1.jpg')
    cy.get('.BeltTile-image').find('img[srcset="/home/Rams_AutomationArticle/parent-with-child-both-thumbnail-and-article-image/_jcr_content/image.dynimg.full.q75.jpg/v1/img1.jpg"]').should('have.attr','srcset')
    .and('exist','/home/Rams_AutomationArticle/parent-with-child-both-thumbnail-and-article-image/_jcr_content/image.dynimg.full.q75.jpg/v1/img1.jpg')
   })   
})

describe("SCN11_Parent-with-child-both-thumbnail-and-Article-image/child-with-thumbnail-and-article-Image only Validation" , function()
{
  it("Verifying Parent-with-child-both-thumbnail-and-Article-image/child-with-thumbnail-and-article-Image OG Image and HTML belt image", function()
  {
    cy.visit("https://www-test.maifm.co.nz/home/Rams_AutomationArticle/parent-with-child-both-thumbnail-and-article-image/child-with-thumbnail-and-article-image.html")
    cy.wait(2000)
//Asserting in HTML DOM
    cy.get('meta[property="og:image"]').should('have.attr','content').and('exist','https://www-test.maifm.co.nz/home/Rams_AutomationArticle/parent-with-child-both-thumbnail-and-article-image/child-with-thumbnail-and-article-image/_jcr_content/image.dynimg.1280.q75.jpg/v1/catjpg.jpg')
    cy.get('.BeltTile-image').find('img[srcset="/home/Rams_AutomationArticle/parent-with-child-both-thumbnail-and-article-image/child-with-thumbnail-and-article-image/_jcr_content/image.dynimg.full.q75.jpg/v1/catjpg.jpg"]').should('have.attr','srcset')
    .and('exist','/home/Rams_AutomationArticle/parent-with-child-both-thumbnail-and-article-image/child-with-thumbnail-and-article-image/_jcr_content/image.dynimg.full.q75.jpg/v1/catjpg.jpg')
   })   
})

describe("SCN12_Parent-with-thumbnail-and-Article-child-only-thumbnail Image only Validation" , function()
{
  it("Verifying Parent-with-thumbnail-and-Article-child-only-thumbnail image OG Image and HTML belt image", function()
  {
    cy.visit("https://www-test.maifm.co.nz/home/Rams_AutomationArticle/parent-with-thumbnail-and-article-child-only-thumbnail.html")
    cy.wait(2000)
//Asserting in HTML DOM
    cy.get('meta[property="og:image"]').should('have.attr','content').and('exist','https://www-test.maifm.co.nz/home/Rams_AutomationArticle/parent-with-thumbnail-and-article-child-only-thumbnail/_jcr_content/image.dynimg.1280.q75.jpg/v1/cat8.jpg')
    cy.get('.BeltTile-image').find('img[srcset="/home/Rams_AutomationArticle/parent-with-thumbnail-and-article-child-only-thumbnail/_jcr_content/image.dynimg.full.q75.jpg/v1/cat8.jpg"]').should('have.attr','srcset')
    .and('exist','/home/Rams_AutomationArticle/parent-with-thumbnail-and-article-child-only-thumbnail/_jcr_content/image.dynimg.full.q75.jpg/v1/cat8.jpg')
   })   
})

describe("SCN13_Parent-with-thumbnail-and-Article-child-only-thumbnail/Child Thumbnail only Image only Validation" , function()
{
  it("Verifying Parent-with-thumbnail-and-Article-child-only-thumbnail/Child Thumbnail only OG Image and HTML belt image", function()
  {
    cy.visit("https://www-test.maifm.co.nz/home/Rams_AutomationArticle/parent-with-thumbnail-and-article-child-only-thumbnail/child-thumbnail-only.html")
    cy.wait(2000)
//Asserting in HTML DOM
    cy.get('meta[property="og:image"]').should('have.attr','content').and('exist','https://www-test.maifm.co.nz/home/Rams_AutomationArticle/parent-with-thumbnail-and-article-child-only-thumbnail/child-thumbnail-only/_jcr_content/image.dynimg.1280.q75.jpg/v1/Persian-cat-sleeping.jpg')
    cy.get('.BeltTile-image').find('img[srcset="/home/Rams_AutomationArticle/parent-with-thumbnail-and-article-child-only-thumbnail/child-thumbnail-only/_jcr_content/image.dynimg.1200.q75.jpg/v1/Persian-cat-sleeping.jpg"]').should('have.attr','srcset')
    .and('exist','/home/Rams_AutomationArticle/parent-with-thumbnail-and-article-child-only-thumbnail/child-thumbnail-only/_jcr_content/image.dynimg.1200.q75.jpg/v1/Persian-cat-sleeping.jpg')
  })   
})