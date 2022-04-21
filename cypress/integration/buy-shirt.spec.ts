import {
  MenuContentPage, ProductListPage, ShoppingCartPage, LoginPage, AddressStepPage,
  ShippingStepPage, PaymentStepPage,
} from "../page/index";

const menuContentPage = new MenuContentPage();
const productListPage = new ProductListPage();
const shoppingCartPage = new ShoppingCartPage();
const loginPage = new LoginPage();
const addressStepPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();

describe("Buy a t-shirt", () => {
  it("then should be bought a t-shirt", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productListPage.clickFirstTshirt();
    productListPage.goToCheckout();
    shoppingCartPage.goToCheckout();
    loginPage.logInEmail();
    loginPage.logInPassword();
    loginPage.submitLogIn();
    addressStepPage.proceedToCheckout();
    shippingStepPage.acceptTerms();
    shippingStepPage.proceedToCheckout();
    paymentStepPage.chooseBankPayment();
    paymentStepPage.confirmOrder();
    paymentStepPage.orderConfirmation();
  });
});
