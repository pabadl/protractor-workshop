import { $, ElementFinder, promise } from 'protractor';

export class ShippingStepPage {
 private get agreeTerms(): ElementFinder {
    return  $('#cgv');
 }

 private get checkShip(): ElementFinder {
    return  $('#form > p > button > span');
 }
 public goToAgreeTerms(): promise.Promise<void> {
   return this.agreeTerms.click();
 }

 public goToCheckShip(): promise.Promise<void> {
    return this.checkShip.click();
  }
}
