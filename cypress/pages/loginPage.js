class LoginPage{

   userName (){
    return cy.get('#username')
   }
   password(){
    return cy.get('#password')
   }
   signInButton(){
    return cy.contains('.MuiButton-label', 'Sign In')
   }
   userNameHelperText(){
    return cy.get('#username-helper-text')
   }
   passwordHelperText(){
    return cy.get('#password-helper-text')
   }
    
    
    }
    
    
    
    module.exports =new LoginPage