'use = strict';

// 2 CREATE loadData 

// location это объект 
import { getData } from './getData.js';
const wishList = ['idd005', 'idd015', 'idd055', 'idd035'];

const cartList = [
    {
        id: 'idd032',
        count: '3'
    },
    {
        id: 'idd042',
        count: '1'
    },
    {
        id: 'idd072',
        count: '5'
    }
];

export const loadData = () => {
    if (location.search) {
        const search = decodeURI(location.search);
        const prop = search.split('=')[0].slice(1);
        const value = search.split('=')[1];

        if (prop == 's') {
            getData.search();
        } else if (prop === 'wishlist') {
            getData.wishList(wishList);
        } else if (prop === 'cat' || prop === 'subcat'){
            getData.category(prop, value);
        }
    }

    if (location.hash) {
        getData.item();
    }

    if (location.pathname.includes('cart')) {
        getData.cart();
    }
};