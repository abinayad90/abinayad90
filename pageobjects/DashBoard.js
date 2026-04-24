class DashBoard {

constructor(page) {     
          this.page = page;
          this.products = this.page.locator(".card-body");


}
async searchAddToCartProduct(productName)
{
    
   // const titles = await this.products.allTextContents();
    //console.log(titles);
    const count = await this.products.count();
    for(let i=0;i<count;i++)
    {
       if(await this.products.nth(i).locator("b").textContent() === productName)
       {
           await this.products.nth(i).locator("text = Add To Cart").click();
              break;
       }
    }

}

async goToCart()
{
        await this.page.locator("[routerlink*='cart']").click();
}
}
module.exports = {DashBoard};