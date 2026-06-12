import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCartStore = defineStore('cart', () => {
    // 1. Le "State" (Les données du panier)
    const items = ref([]);
    const keyword = ref('');

    

    const cartCount = computed(() => {
        return items.value.reduce((total, items) => total + items.quantity, 0);
    });


    const totalPrice = computed(() => {
        return items.value.reduce((total, item) => total + (item.price * item.quantity), 0);
    });


    function addToCart(product) {
        const existingItem = items.value.find(items => items.id === product.id);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            items.value.push({ ...product, quantity: 1 });
        }
    }


    function removeFromCart(productId) {
        const index = items.value.findIndex(items => items.id === productId);
        if (index !== -1) {
            if (items.value[index].quantity > 1) {
                items.value[index].quantity--;
            } else {
                items.value.splice(index, 1);
            }
        }
    }

    function setKeyWOrd(word) {
        keyword.value = word
    }

    // Vider le panier
    function clearCart() {
        items.value = [];
    }

    return {
        items,
        keyword,
        cartCount,
        totalPrice,
        addToCart,
        removeFromCart,
        clearCart,
        setKeyWOrd
    };
});