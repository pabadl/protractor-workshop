import { $, ElementFinder, promise } from 'protractor';

export class ProductAddedModalPage {
 private get tShirtAddedModal(): ElementFinder {
   return  $('[style*="display: block;"] .button-container > a');
 }

 public goToTShirtAddedModal(): promise.Promise<void> {
   return this.tShirtAddedModal.click();
 }
}