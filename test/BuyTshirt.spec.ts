import { browser } from 'protractor';
import { MenuContentPage } from '../src/page';
import { ProductListPage } from '../src/page';
import { ProductDetailPage } from '../src/page';
import { ProductAddedModalPage } from '../src/page/ProductAddedModal.page';
import { SummaryStepPage } from '../src/page';
import { SingInStepPage } from '../src/page';
import { AddressStepPage } from '../src/page';
import { ShippingStepPage } from '../src/page';
import { PaymentStepPage } from '../src/page';
import { BankPaymentPage } from '../src/page/BankPayment.page';
import { OrderResumePage } from '../src/page/OrderResume.page';



describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productDetailPage: ProductDetailPage = new ProductDetailPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const singInStepPage: SingInStepPage = new SingInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderResumePage: OrderResumePage= new OrderResumePage();

 beforeEach(() => {
   jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
 });

 it('then should be bought a t-shirt', async () => {
  await browser.get('http://automationpractice.com/');
  
  await(browser.sleep(3000));
  await menuContentPage.goToTShirtMenu();
  

   await(browser.sleep(3000));
   await productListPage.goToTShirtImg();
   
   
   await(browser.sleep(3000));
   await productDetailPage.goToTShirtDetail();
  
   
   await(browser.sleep(3000));
   await productAddedModalPage.goToTShirtAddedModal();
   
   
   await(browser.sleep(3000));
   await summaryStepPage.goToTShirtSummary();
   
   
   await(browser.sleep(3000));
   await singInStepPage.goToTShirtEmail();
  
   await singInStepPage.goToTShirtPassword();
  
   await singInStepPage.goToSubmitLogin();
  
   
   await(browser.sleep(3000));
   await addressStepPage.goToTUserAddress();
   
   await(browser.sleep(3000));
   await shippingStepPage.goToAgreeTerms();
   
   await shippingStepPage.goToCheckShip();

      
   await(browser.sleep(3000));
   await paymentStepPage.goToTShirtPayment();


   await(browser.sleep(3000));
   await bankPaymentPage.goToConfirmOrder();
  
   
   await(browser.sleep(3000));
   await orderResumePage.goToCheckOrderResume();
   
 });
});