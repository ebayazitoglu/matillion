class FeedbackFormPage{

 feedbackFormTitle(){
    return cy.get('.MuiTypography-root')
 }
 firstName(){
    return cy.get('#firstname')
 }
 lastName(){
    return cy.get('#lastname')
 }
 email(){
    return cy.get('#email')
 }
 phoneNumber(){
    return cy.get('#phone')
 }
 company(){
    return cy.get('#company')
 }
 postcode(){
    return cy.get('#postcode')
 }
 priority(){
    return cy.get('.MuiSelect-root')
 }
 feedback(){
    return cy.get('#feedback')
 }
 emailLabel(){
    return cy.get('#email-label')
 }
 phoneLabel(){
    return cy.get('#phone-label')
 }
 postcodeLabel(){
    return cy.get('#postcode-label')
 }
 submitButton(){
    return cy.get('#submit')
 }  

}
     
     module.exports =new FeedbackFormPage