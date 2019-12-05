var request=require('sync-request');
var fn="[name='first_name']";
var ln="[name='last_name']";
var em="[name='email']";
var com="[name='message']";
var sub="[type='submit']";
browser.addCommand("submitDataviaContactUsForm",function(firstName,lastName,emailAddress,comments){
	if(firstName){
		browser.setValue(fn,firstName);
	}
	if(lastName){
		browser.setValue(ln,lastName);
	}
	if(emailAddress){
		browser.setValue(em,emailAddress);
	}
	if(comments){
		browser.setValue(com,comments);
	}
	browser.click(sb);
})

beforeEach(function(){
	browser.url('/Contact-Us/contactus.html');
});

describe ('Test Contact Us form WebdriveUni',function(){
	var res = request('GET','http://jsonplaceholder.typicode.com/post/1/comments');
	var contactusDetails=JSON.parse(res.getBody().toString('utf8'));

	beforeEach(function(){
		console.log('Inside the describe block !');
	})

	contactusDetails.forEach(function (contactDetail){

it.only('Should be able to submit a successful submission via contact us form',function(){
	
	browser.submitDataviaContactUsForm(contactDetail.name,'Pandit',contactDetail.email,contactDetail.body);	

}); 
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