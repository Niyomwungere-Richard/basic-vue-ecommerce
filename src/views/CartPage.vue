<template>
  <div class="cart-page">
    <header class="cart-header">
      <h1>Mon Panier</h1>
      <span class="item-count">{{ cartStore.cartCount }} articles</span>
    </header>

    <div class="cart-content">
      <div class="cart-items-section" v-if="cartStore.items.length > 0">
        <div v-for="item in cartStore.items" :key="item.id" class="cart-item-card">
          <div class="item-image-wrapper">
            <img :src="item.image" :alt="item.name" class="item-image" />
          </div>
          
          <div class="item-details">
            <div class="item-main-info">
              <span class="item-brand">{{ item.brand || 'Marque' }}</span>
              <h3 class="item-name">{{ item.name }}</h3>
            </div>
            
            <div class="item-actions">
              <div class="quantity-selector">
                <button @click="diminuerQuantite(item.id)" class="qty-btn" :disabled="item.quantity <= 1">-</button>
                <span class="qty-value">{{ item.quantity }}</span>
                <button @click="augmenterQuantite(item)" class="qty-btn">+</button>
              </div>

              <div class="item-price">
                {{ (item.price * item.quantity).toLocaleString() }} Fbu
              </div>

              <button @click="supprimerEntierement(item.id)" class="remove-btn">
                <svg viewBox="0 0 24 24" class="trash-icon"><path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="empty-cart" v-else>
        <p>Votre panier est vide pour le moment.</p>
      </div>

      <div class="cart-summary-section" v-if="cartStore.items.length > 0">
        <div class="summary-card">
          <h2>Résumé de la commande</h2>
          <div class="summary-row">
            <span>Sous-total</span>
            <span>{{ cartStore.totalPrice.toLocaleString() }} Fbu</span>
          </div>
          <div class="summary-divider"></div>
          <div class="summary-row total-row">
            <span>Total</span>
            <span class="total-price">{{ cartStore.totalPrice.toLocaleString() }} Fbu</span>
          </div>
          <button class="checkout-btn">Passer à la caisse</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cartStore';

export default {
  name: 'CartPage',
  setup() {
    const cartStore = useCartStore();
    return { cartStore };
  },
  methods: {
    augmenterQuantite(item) {
      // On utilise votre fonction addToCart pour ajouter +1
      this.cartStore.addToCart(item);
    },
    diminuerQuantite(productId) {
      // On utilise votre fonction removeFromCart qui diminue de 1
      this.cartStore.removeFromCart(productId);
    },
    supprimerEntierement(productId) {
      // Pour supprimer complètement d'un coup, on boucle tant qu'il reste de la quantité 
      // ou on nettoie l'index directement (adaptation pour respecter strictement votre store)
      const item = this.cartStore.items.find(i => i.id === productId);
      if (item) {
        const qty = item.quantity;
        for (let i = 0; i < qty; i++) {
          this.cartStore.removeFromCart(productId);
        }
      }
    }
  }
}
</script>

<style scoped>
/* Conservez vos styles CSS de la page panier intacts ici */
</style>