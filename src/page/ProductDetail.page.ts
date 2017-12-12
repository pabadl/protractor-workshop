import { $, ElementFinder, promise } from 'protractor';

export class ProductDetailPage {
 private get tShirtDetail(): ElementFinder {
   return  $('#add_to_cart > button > span');
 }

 public goToTShirtDetail(): promise.Promise<void> {
   return this.tShirtDetail.click();
 }
}