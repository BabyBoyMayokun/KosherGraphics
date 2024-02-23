///<reference types = "Cypress"/>
import kosherGraphics from "../pageObjects"

const KosherGraphics = new kosherGraphics


describe("Functionality Testing of Kosher Graphics",()=>{
    it("Verification of Login Functionality using a valid email and password",()=>{
        KosherGraphics.visitUrl()
        KosherGraphics.verifyUrl()

        KosherGraphics.selectLoginButton()
        KosherGraphics.inputEmail()
        KosherGraphics.inputPassword()
        KosherGraphics.clickLogin()
        KosherGraphics.verifySuccessfulLogin()
    })

    it("Verification of Login Functionality using an unregistered email and valid password",()=>{
        KosherGraphics.visitUrl()
        KosherGraphics.verifyUrl()

        KosherGraphics.selectLoginButton()
        KosherGraphics.inputUnregisteredEmail()
        KosherGraphics.inputPassword()
        KosherGraphics.clickLogin()
        KosherGraphics.verifyErrorMessage()
    })

    it("Verification of Login Functionality using an unregistered email and password blank",()=>{
        KosherGraphics.visitUrl()
        KosherGraphics.verifyUrl()

        KosherGraphics.selectLoginButton()
        KosherGraphics.inputUnregisteredEmail()
        KosherGraphics.clickLogin()
        KosherGraphics.loginPageStillPresent()   
    })

    it("Verification of Login Functionality using a  blank email and valid password",()=>{
        KosherGraphics.visitUrl()
        KosherGraphics.verifyUrl()

        KosherGraphics.selectLoginButton()
        KosherGraphics.inputPassword()
        KosherGraphics.clickLogin()
        KosherGraphics.loginPageStillPresent()   
    })

    it("Verification of Login Functionality using a  blank email and blank password",()=>{
        KosherGraphics.visitUrl()
        KosherGraphics.verifyUrl()

        KosherGraphics.selectLoginButton()
        KosherGraphics.clickLogin()
        KosherGraphics.loginPageStillPresent()   
    })
})