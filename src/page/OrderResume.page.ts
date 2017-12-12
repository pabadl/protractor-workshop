import { $, ElementFinder, promise } from 'protractor';

export class OrderResumePage {
 private get checkOrderResume(): ElementFinder {
   return  $('#center_column > div > p > strong');

   
 }

 public goToCheckOrderResume(): promise.Promise<void> {
   return this.checkOrderResume.click();
 }
}
