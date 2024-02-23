const data = require("../fixtures/KosherGraphics.json")
class kosherGraphics
{
    visitUrl(){
        return cy.visit(Cypress.env('url'))
    }
    verifyUrl(){
        return cy.url().should('eql','https://koshergraphics.com/')
    }
    selectLoginButton(){
        return cy.get('div.user_option button:nth-child(1)').click()
    }
    inputEmail(){
        return cy.get('input[type="email"]').type(data.username)
    }
    inputUnregisteredEmail(){
        return cy.get('input[type="email"]').type(data.unregisteredEmail)
    }
    inputPassword(){
        return cy.get('input[type="password"]').type(data.password)
    }
    clickLogin(){
        return cy.get('div.mb-2 button.btn-hover:nth-child(1)').click()
    }
    verifySuccessfulLogin(){
        return cy.get('div.desktop button.usermenu').should('be.visible')
    }
    verifyErrorMessage(){
        return cy.get('p.error').should("be.visible")
    }
    loginPageStillPresent(){
        return cy.get('div.mb-2 button.btn-hover:nth-child(1)').should('be.visible')
    }
    selectFreeDesigns(){
        return cy.get('a[href="/free"]').click()
    }
    verifyFreeDesignsPage(){
        return cy.get('div.col-md-12 div.catdetail-block-left').should('contain','Free')
    }
    selectWorldProgressFromFreeDesigns(){
        return cy.get('.sub-cat-btns > :nth-child(4)').click()
    }
    verifyWorldProgressPage(){
        return cy.get('div.col-md-12 div.catdetail-block-left').should('contain','World Progress')
    }
    selectShevaMitzvosFlyer(){
        return cy.get('.featuredproduct-single-img').click()
    }
    selectCustomiseThisTemplateButton(){
        return cy.get('a.btn').invoke('removeAttr','target').click()
    }
    verifyCustomiseTemplateScreen(){
        return cy.get('#protitle').should('be.visible')
    }
    insertClipart(){
        return cy.get(':nth-child(2) > .go2452636514 > .go3230599746').click()
    }
    navigateToTheShapesSelection(){
        return cy.get('div.go3170779514:nth-child(4)').click()
    }
    insertShape(){
        return cy.get(':nth-child(2) > :nth-child(3) > .go2452636514 > .go3230599746').click()
    }
    navigateToBackgroundSelection(){
        return cy.get('div.go3170779514:nth-child(6)').click()
    }
    insertBackground(){
        return cy.get('.go3230599746').click()
    }
    selectDownloadDesignButton(){
        return cy.get('.downloadbtn > :nth-child(1) > .bp5-button-text').click()
    }
    SelectDownloadDesign(){
        return cy.get('.mt-3 > .bp5-button > .bp5-button-text').click()
    }
    selectFileType(){
        return cy.get('div.custom-select').click()
    }
    selectPdfStandard(){
        return cy.get('ul li:nth-child(2)').click()
    }
    selectPdfPrint(){
        return cy.get('ul li:nth-child(3)').click()
    }
    verifyDownloading(){
        return cy.get('.topbar-share-block > .bp5-button > .bp5-button-text').should('be.visible')
    }
    
}
export default kosherGraphics