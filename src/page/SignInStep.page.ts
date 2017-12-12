import { $, ElementFinder, promise } from 'protractor';

export class SingInStepPage {
 private get userEmail(): ElementFinder {
   return  $('#email');
 }

 private get userPassword(): ElementFinder {
    return  $('#passwd');
  }

 private get submitLogin(): ElementFinder {
    return  $('#SubmitLogin > span');
  }

 public goToTShirtEmail(): promise.Promise<void> {
   return this.userEmail.sendKeys('aperdomobo@gmail.com');
 }

 public goToTShirtPassword(): promise.Promise<void> {
    return this.userPassword.sendKeys('WorkshopProtractor');
  }
 
 public goToSubmitLogin(): promise.Promise<void> {
    return this.submitLogin.click();
  }
}
