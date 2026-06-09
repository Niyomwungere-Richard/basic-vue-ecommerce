import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCartStore = defineStore('cart', () => {
    // 1. Le "State" (Les données du panier)
    const items = ref([]);

    // 2. Les "Getters" (Les données calculées)
    // Compte le nombre total d'articles dans le panier
    const cartCount = computed(() => {
        return items.value.reduce((total, item) => total + item.quantity, 0);
    });

    // Calcule le prix total du panier
    const totalPrice = computed(() => {
        return items.value.reduce((total, item) => total + (item.price * item.quantity), 0);
    });

    // 3. Les "Actions" (Les fonctions pour modifier le panier)
    // Ajouter un produit au panier
    function addToCart(product) {
        const existingItem = items.value.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity++;
        } else {
            items.value.push({ ...product, quantity: 1 });
        }
    }

    // Retirer un produit ou diminuer sa quantité
    function removeFromCart(productId) {
        const index = items.value.findIndex(item => item.id === productId);
        if (index !== -1) {
            if (items.value[index].quantity > 1) {
                items.value[index].quantity--;
            } else {
                items.value.splice(index, 1); // Supprime complètement si quantité = 1
            }
        }
    }

    // Vider le panier
    function clearCart() {
        items.value = [];
    }

    // On exporte tout pour que les composants (comme la Navbar) puissent y accéder
    return { 
        items, 
        cartCount, 
        totalPrice, 
        addToCart, 
        removeFromCart, 
        clearCart 
    };
});