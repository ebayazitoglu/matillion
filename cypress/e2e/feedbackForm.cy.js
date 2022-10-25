import feedbackForm from '../pages/feedbcakFormPage'


describe('Fill in the feedback form with required details', () => {
   beforeEach(()=>{
    cy.visit('https://www.matillion-automation-test.com/')
    cy.login()
    
   })
    it('Fill in the form', () => {
        cy.fixture('example.json').then((data)=>{
            //verify that the 'Send Feedback' button is disabled
            feedbackForm.submitButton().should('have.attr','class').then((classValue)=>{
                expect(classValue).to.contain('disabled')
            })
            feedbackForm.firstName().clear().type(data.Username)
            feedbackForm.lastName().clear().type(data.lastName)

             //verify when not putting the @sign the email label is red
            feedbackForm.email().type('email')          
            feedbackForm.emailLabel().should('have.css','color', 'rgb(244, 67, 54)')

              //verify the email label goes back to blue when put in @
            feedbackForm.email().clear().type(data.email)
            feedbackForm.emailLabel().should('have.css','color', 'rgb(63, 81, 181)')

            // verify phone label is red when not put in numeric numbers and has 11 digits
            feedbackForm.phoneNumber().type(data.Username)
            feedbackForm.phoneLabel().should('have.css','color', 'rgb(244, 67, 54)')
            feedbackForm.phoneNumber().clear().type(data.phone+'1')
            feedbackForm.phoneLabel().should('have.css','color', 'rgb(244, 67, 54)')
            feedbackForm.phoneNumber().clear().type(data.phone)
            feedbackForm.phoneLabel().should('have.css','color', 'rgb(63, 81, 181)')

            //Verify postcode requires correct format
            feedbackForm.postcode().type('S1 BD')
            feedbackForm.postcodeLabel().should('have.css','color', 'rgb(244, 67, 54)')
            feedbackForm.postcode().clear().type(data.postcode)
            feedbackForm.postcodeLabel().should('have.css','color', 'rgb(63, 81, 181)')

            //verify the value High is selected
            feedbackForm.priority().select('High')
            feedbackForm.priority().should('have.value','2')

            feedbackForm.feedback().type('{enter}'+data.feedback)
            //verify the 'Send feedback' button is not disabled.
            feedbackForm.submitButton().should('have.attr','class').then((classValue)=>{
                expect(classValue).to.not.contain('disabled')
            })

            //verify success message is received
            feedbackForm.submitButton().click()
            cy.contains('Thank you for your feedback').should('be.visible')


       
    });
  });
})