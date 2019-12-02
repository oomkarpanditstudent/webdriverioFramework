describe ('Test the webdriver homepage',function(){
	it('outout the height of the homepage carousal',function(){
	browser.url('./');
	browser.pause(2000);
	var divCarousalHeight=browser.getCssProperty('#udemy-promo-thumbnail','height');
	console.log(divCarousalHeight);
	});
});