import { $, ElementFinder, promise } from 'protractor';

export class AddressStepPage {
 private get userAddress(): ElementFinder {
    return  $('#center_column > form > p > button > span');
 }

 public goToTUserAddress(): promise.Promise<void> {
   return this.userAddress.click();
 }
}
