///<reference types = "Cypress"/>
import kosherGraphics from "../pageObjects"

const KosherGraphics = new kosherGraphics


describe("Functionality Testing of Kosher Graphics",()=>{
    beforeEach('Login to KosherGraphics',()=>{
        KosherGraphics.visitUrl()
        KosherGraphics.verifyUrl()

        KosherGraphics.selectLoginButton()
        KosherGraphics.inputEmail()
        KosherGraphics.inputPassword()
        KosherGraphics.clickLogin()
        KosherGraphics.verifySuccessfulLogin()
    })

   
    it("Create new design, edit it and download the design in PNG",()=>{
        KosherGraphics.selectFreeDesigns()
        KosherGraphics.verifyFreeDesignsPage() 

        KosherGraphics.selectWorldProgressFromFreeDesigns()
        KosherGraphics.verifyWorldProgressPage()

        KosherGraphics.selectShevaMitzvosFlyer()
        KosherGraphics.selectCustomiseThisTemplateButton()
        KosherGraphics.verifyCustomiseTemplateScreen()

        KosherGraphics.insertClipart()
        KosherGraphics.navigateToTheShapesSelection()
        KosherGraphics.insertShape()
        KosherGraphics.navigateToBackgroundSelection()
        KosherGraphics.insertBackground()

        KosherGraphics.selectDownloadDesignButton()
        KosherGraphics.SelectDownloadDesign()
        KosherGraphics.verifyDownloading()

    })

    it("Create new design, edit it and download the design in PDF standard",()=>{
        KosherGraphics.selectFreeDesigns()
        KosherGraphics.verifyFreeDesignsPage() 

        KosherGraphics.selectWorldProgressFromFreeDesigns()
        KosherGraphics.verifyWorldProgressPage()

        KosherGraphics.selectShevaMitzvosFlyer()
        KosherGraphics.selectCustomiseThisTemplateButton()
        KosherGraphics.verifyCustomiseTemplateScreen()

        KosherGraphics.insertClipart()
        KosherGraphics.navigateToTheShapesSelection()
        KosherGraphics.insertShape()
        KosherGraphics.navigateToBackgroundSelection()
        KosherGraphics.insertBackground()

        KosherGraphics.selectDownloadDesignButton()
        KosherGraphics.selectFileType()
        KosherGraphics.selectPdfStandard()
        KosherGraphics.SelectDownloadDesign()
        KosherGraphics.verifyDownloading()
    })

    it("Create new design, edit it and download the design in PDF Print",()=>{
        KosherGraphics.selectFreeDesigns()
        KosherGraphics.verifyFreeDesignsPage() 

        KosherGraphics.selectWorldProgressFromFreeDesigns()
        KosherGraphics.verifyWorldProgressPage()

        KosherGraphics.selectShevaMitzvosFlyer()
        KosherGraphics.selectCustomiseThisTemplateButton()
        KosherGraphics.verifyCustomiseTemplateScreen()

        KosherGraphics.insertClipart()
        KosherGraphics.navigateToTheShapesSelection()
        KosherGraphics.insertShape()
        KosherGraphics.navigateToBackgroundSelection()
        KosherGraphics.insertBackground()

        KosherGraphics.selectDownloadDesignButton()
        KosherGraphics.selectFileType()
        KosherGraphics.selectPdfPrint()
        KosherGraphics.SelectDownloadDesign()
        KosherGraphics.verifyDownloading()
    })

  
})    