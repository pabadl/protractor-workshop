import { $, ElementFinder, promise } from 'protractor';

export class PaymentStepPage {
 private get tShirtPayment(): ElementFinder {
   return  $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
 }

 public goToTShirtPayment(): promise.Promise<void> {
   return this.tShirtPayment.click();
 }
}