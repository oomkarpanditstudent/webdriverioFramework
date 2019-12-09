beforeEach(function(){
	browser.url("/Accordion/index.html");
});

describe('Validate the loading functionality works correcrly ',function(){
	it('Verify relevant text LOADING COMPLETE appears after a period of time',function(){
		this.timeout(20000);
		browser.waitUntil(function(){
			return browser.$('#hidden-text').getText()==='LOADING COMPLETE.';
			console.log(browser.getText('#hidden-text'));
		}, 12000, 'expected text to be different');

	});

	it.only('Verify text exists within the loading div container', function(){
	this.timeout(20000);
	var text=browser.$('#hidden-text').getText();
    console.log(text);
    var text=browser.waitForValue('#hidden-text',2000);
    var text1=browser.$('#hidden-text').getText();

    console.log(text1);
    console.log(text);

	});
});