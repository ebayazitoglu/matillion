import loginPage from '../pages/loginPage'
import feedbackForm from '../pages/feedbcakFormPage'
describe('Login', () => {
  
beforeEach(() =>{
  cy.visit('https://www.matillion-automation-test.com/')
})
  it('User should receieve helper messages when not filling in the reqired fields', () => { 
    loginPage.signInButton().click()
    loginPage.userNameHelperText().should('be.visible')
    loginPage.userNameHelperText().should('contain', 'Please provie a username.')
    loginPage.passwordHelperText().should('be.visible')
    loginPage.passwordHelperText().should('contain', 'Please enter a password.')

  })
  it('User should not be able to login with invalid credentials', () => {
    cy.fixture('example.json').then((userData)=>{
      loginPage.userName().type(userData.Username)
      loginPage.password().type(userData.invalid)
      loginPage.signInButton().click()
      loginPage.passwordHelperText().should('contain','Please enter a valid username/password')   
    })    
  });
  it('User should be able to login with valid credentials and navigated to feedback Form', () => {
    cy.fixture('example.json').then((userData)=>{
      loginPage.userName().type(userData.Username)
      loginPage.password().type(userData.Password)
      loginPage.signInButton().click()
      feedbackForm.feedbackFormTitle().should('be.visible')
      feedbackForm.feedbackFormTitle().should('contain','Feedback Form')
    })        
  });

})