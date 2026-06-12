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
              <span class="item-brand">{{ item.brand || 'Nike' }}</span>
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
      this.cartStore.addToCart(item);
    },
    diminuerQuantite(productId) {
      this.cartStore.removeFromCart(productId);
    },
    supprimerEntierement(productId) {
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
.cart-page {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  font-family: 'Arial', sans-serif;
  color: #333;
}

.cart-header {
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin-bottom: 30px;
}

.cart-header h1 {
  font-size: 28px;
  font-weight: 700;
  margin: 0;
}

.item-count {
  color: #666;
  font-size: 16px;
}

.cart-content {
  display: flex;
  gap: 30px;
  align-items: flex-start;
  flex-wrap: wrap;
}

.cart-items-section {
  flex: 2;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cart-item-card {
  display: flex;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 16px;
  gap: 20px;
  align-items: center;
}

.item-image-wrapper {
  width: 100px;
  height: 100px;
  background-color: #f7f7f7;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.item-image {
  max-width: 90%;
  object-fit: contain;
}

.item-details {
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  gap: 15px;
}

.item-main-info {
  flex: 1;
  min-width: 180px;
}

.item-brand {
  font-size: 12px;
  text-transform: uppercase;
  color: #888;
  font-weight: 600;
  display: block;
  margin-bottom: 4px;
}

.item-name {
  font-size: 16px;
  font-weight: 700;
  margin: 0;
}

.item-actions {
  display: flex;
  align-items: center;
  gap: 25px;
  margin-left: auto;
}

.quantity-selector {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
}

.qty-btn {
  background: none;
  border: none;
  width: 32px;
  height: 32px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}

.qty-btn:hover:not(:disabled) {
  background-color: #f0f0f0;
}

.qty-btn:disabled {
  color: #ccc;
  cursor: not-allowed;
}

.qty-value {
  width: 32px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
}

.item-price {
  font-size: 16px;
  font-weight: 700;
  color: #28a745;
  min-width: 110px;
  text-align: right;
}

.remove-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.trash-icon {
  width: 20px;
  height: 20px;
  fill: #dc3545;
}

.cart-summary-section {
  flex: 1;
  min-width: 300px;
}

.summary-card {
  background-color: #f8f9fa;
  border-radius: 20px;
  padding: 24px;
  border: 1px solid #e9ecef;
}

.summary-card h2 {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 20px 0;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 14px;
}

.summary-divider {
  height: 1px;
  background-color: #dee2e6;
  margin: 16px 0;
}

.total-row {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 24px;
}

.total-price {
  color: #28a745;
}

.checkout-btn {
  width: 100%;
  background-color: #0062cc;
  color: white;
  border: none;
  padding: 14px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
}

.checkout-btn:hover {
  background-color: #004da3;
}

.empty-cart {
  text-align: center;
  padding: 60px 20px;
  background: #f8f9fa;
  border-radius: 20px;
  width: 100%;
}

@media (max-width: 768px) {
  .cart-item-card {
    flex-direction: column;
    align-items: flex-start;
  }
  .item-actions {
    width: 100%;
    justify-content: space-between;
    margin-left: 0;
  }
}
</style>