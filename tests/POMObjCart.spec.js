const { test , expect} = require('@playwright/test');
 const {LoginPage} = require('../pageobjects/LoginPage')
    const {DashBoard} = require('../pageobjects/DashBoard')
 //JSON->string -> json object
const dataset = JSON.parse(JSON.stringify(require('../testData/POMObjTestData.json')));

for (const data of dataset)
{ 
    
test(`page object login for ${data.username}`,async ({page})=> {


const loginPage = new LoginPage(page);
const dashBoard = new DashBoard(page);
await loginPage.goTo();
await loginPage.validLogin(data.username,data.password);
 await page.waitForLoadState('networkidle');
 await dashBoard.searchAddToCartProduct(data.product);
 //await page.getByRole('button', { name: ' Add To Cart' }).first().click();
await dashBoard.goToCart();

});

}