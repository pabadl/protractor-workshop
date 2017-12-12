import { $, ElementFinder, promise } from 'protractor';

export class SummaryStepPage {
 private get tShirtSummary(): ElementFinder {
   return  $('.cart_navigation span');
 }

 public goToTShirtSummary(): promise.Promise<void> {
   return this.tShirtSummary.click();
 }
}
