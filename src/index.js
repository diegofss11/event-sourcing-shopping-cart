import configureStore from './store/configure-store';

import { pricingRules } from './model/pricing-rules';
import { superIpad, macbookPro, appleTv, vgaAdapter } from './model/catalogue';
import Checkout from './model/checkout';

// FIRST SHOPPING CART
// SKUs Scanned: atv, atv, atv, vga Total expected: $249.00
const executeFirstShoppingCart = () => {
    console.group();
    console.log('>>>>>>>>> FIRST SHOPPING CART');
    
    const store = configureStore(pricingRules);
    const co = Checkout({ store });

    co.scan(appleTv);
    co.scan(appleTv);
    co.scan(appleTv);
    co.scan(vgaAdapter);
    co.total();

    console.log(`-||__/__________
        |== /|_|_|_|_|_/
        |= /_|_|_|_|_|/
        | /|_|_|_|_|_/
        | _ | _ | _ | _ | _ | /
              ) _____(_
        jgs[--------|
    (o)""""(o)`);
    console.log(`******** Total expected: $${store.getState().checkout.totalPrice} ********`);
    console.groupEnd();
}

// SECOND SHOPPING CART
// SKUs Scanned: atv, ipd, ipd, atv, ipd, ipd, ipd Total expected: $2718.95
const executeSecondShoppingCard = () => {
    console.group();
    console.log('>>>>>>>>> SECOND SHOPPING CART');
    
    const store = configureStore(pricingRules);
    const co = Checkout({ store });

    co.scan(appleTv);
    co.scan(superIpad);
    co.scan(superIpad);
    co.scan(appleTv);
    co.scan(superIpad);
    co.scan(superIpad);
    co.scan(superIpad);
    co.total();

    console.log(`-||__/__________
        |== /|_|_|_|_|_/
        |= /_|_|_|_|_|/
        | /|_|_|_|_|_/
        | _ | _ | _ | _ | _ | /
              ) _____(_
        jgs[--------|
    (o)""""(o)`);
    console.log(`******** Total expected: $${store.getState().checkout.totalPrice} ********`);
    console.groupEnd();
};

// THIRD SHOPPING CART
// SKUs Scanned: mbp, vga, ipd Total expected: $1949.98
const executeThridShoppingCard = () => {
    console.group();
    console.log('>>>>>>>>> THIRD SHOPPING CART');

    const store = configureStore(pricingRules);
    const co = Checkout({ store });

    co.scan(macbookPro);
    co.scan(vgaAdapter);
    co.scan(superIpad);
    co.total();

    console.log(`-||__/__________
        |== /|_|_|_|_|_/
        |= /_|_|_|_|_|/
        | /|_|_|_|_|_/
        | _ | _ | _ | _ | _ | /
              ) _____(_
        jgs[--------|
    (o)""""(o)`);
    console.log(`******** Total expected: $${store.getState().checkout.totalPrice} ********`);
    console.groupEnd();
};

executeFirstShoppingCart();
executeSecondShoppingCard();
executeThridShoppingCard();