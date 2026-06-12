import { createRouter, createWebHistory } from "vue-router";

import CartPage from "./views/CartPage.vue";
import ProductsPage from "./views/ProductsPage.vue";
const routes = [
    // { path: '', component: ... },

    { path: '/', name: 'homepage', component: ProductsPage },
    { path: '/cart', name: 'CartPage', component: CartPage },
    {
        path: '/product/:id',name: 'product-detail',component: ProductsPage}

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router