beforeEach(function(){
browser.url('/Contact-Us/contactus.html');
});
/*
#contact_form > input:nth-child(1)
#contact_form > input:nth-child(2)
#contact_form > input:nth-child(3)
#contact_form > textarea
#form_buttons > input:nth-child(2)
*/

describe ('Test Contact Us form WebdriveUni',function(){
it('Should be able to submit a successful submission via contact us form',function(){
 browser.pause(1000);
 //browser.click('#form_buttons > input:nth-child(2)');
 browser.$('#contact_form > input:nth-child(1)').setValue('Oomkar');
 browser.$('#contact_form > input:nth-child(2)').setValue('Pandit');
 browser.$('#contact_form > input:nth-child(3)').setValue('lolasoftware@gmail.com');
 browser.$('#contact_form > textarea').setValue('WAH JI WAH');
 
 browser.click('#form_buttons > input:nth-child(2)');
 expect(browser.$('#contact_reply > h1').getText()).to.equal('Thank You for your Message!');
 console.log(browser.$('#contact_reply > h1').getText());
 browser.pause(2000);

});

it.only('Should not be able to submit a successful submission via contact us form as all fields are required',function(){
 browser.pause(1000);
 //browser.click('#form_buttons > input:nth-child(2)');
 browser.$('#contact_form > input:nth-child(1)').setValue('Oomkar');
 //browser.$('#contact_form > input:nth-child(2)').setValue('Pandit');
 browser.$('#contact_form > input:nth-child(3)').setValue('lolasoftware@gmail.com');
 browser.$('#contact_form > textarea').setValue('WAH JI WAH');
 
 browser.click('#form_buttons > input:nth-child(2)');
 expect(browser.$('body').getText()).to.equal('Error: all fields are required');
 
 console.log(browser.$('body').getText());
 browser.pause(2000);

});
/*
it('Should not be able to submit a successful submission via contact us form as all fields are required',function(){

});

it('Should not be able to submit a successful submission via contact us form as all fields are required',function(){

});
*/
});