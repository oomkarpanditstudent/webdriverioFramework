beforeEach(function(){
	browser.url("/Ajax-Loader/index.html");
});

describe('Test visibility of an element or existence ',function(){
	it('Validate whether the click me button code is visible within the dome', function(){
	this.timeout(20000);
	var clickMeButton="//p[text()='CLICK ME!']";
	browser.waitForExist(clickMeButton,8000,false);
	});
	
	it('TEST 2 Validate whether the click me button code is visible within the dome', function(){
	this.timeout(20000);
	var clickMeButton="//p[text()='CLICK ME!']";
	browser.waitForVisible(clickMeButton,8000,false);
	});


});