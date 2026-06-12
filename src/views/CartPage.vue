<!-- <template>
  <div class="cart-page">
    <h1>Mon Panier</h1>

    <div v-if="cartStore.items.length === 0" class="empty-cart">
      <p>Votre panier est vide pour le moment.</p>
      <router-link to="/" class="btn-shop">Continuer mes achats</router-link>
    </div>

    <div v-else class="cart-container">
      
      <div class="cart-items">
        <h2>Articles choisis</h2>
        <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
          <div class="item-info">
            <h3>{{ item.name }}</h3>
            <p>Prix unitaire : {{ item.price }} €</p>
          </div>
          
          <div class="item-actions">
            <button @click="cartStore.removeFromCart(item.id)">-</button>
            <span class="quantity">{{ item.quantity }}</span>
            <button @click="cartStore.addToCart(item)">+</button>
          </div>
          
          <div class="item-total">
            <p>Total : {{ item.price * item.quantity }} €</p>
          </div>
        </div>

        <div class="cart-summary">
          <h3>Total de la commande : {{ cartStore.totalPrice }} €</h3>
          <button @click="cartStore.clearCart()" class="btn-clear">Vider le panier</button>
        </div>
      </div>

      <div class="checkout-form">
        <h2>Informations de livraison</h2>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Nom complet :</label>
            <input 
              type="text" 
              id="name" 
              v-model="formData.name" 
              required 
              placeholder="Jean Dupont"
            />
          </div>

          <div class="form-group">
            <label for="phone">Numéro de téléphone :</label>
            <input 
              type="tel" 
              id="phone" 
              v-model="formData.phone" 
              required 
              placeholder="06 12 34 56 78"
            />
          </div>

          <div class="form-group">
            <label for="address">Adresse de livraison :</label>
            <textarea 
              id="address" 
              v-model="formData.address" 
              required 
              placeholder="12 rue de la Paix, 75000 Paris"
            ></textarea>
          </div>

          <button type="submit" class="btn-submit">Valider la commande</button>
        </form>
      </div>

    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useCartStore } from '../stores/cartStore';

export default {
  name: 'CartPage',
  setup() {

    const cartStore = useCartStore();

   
    const formData = ref({
      name: '',
      phone: '',
      address: ''
    });

    const handleSubmit = () => {
      const orderPayload = {
        customer: formData.value,
        items: cartStore.items,
        totalPrice: cartStore.totalPrice
      };

      console.log('Commande validée !', orderPayload);
      
     
      alert(`Merci ${formData.value.name}, votre commande de ${cartStore.totalPrice} € a bien été enregistrée !`);
      
   
      cartStore.clearCart();
      formData.value = { name: '', phone: '', address: '' };
    };

    return {
      cartStore,
      formData,
      handleSubmit
    };
  }
}
</script>

<style scoped>
.cart-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}

.cart-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

/* Version Desktop : 2 colonnes s'il y a de la place */
@media (min-width: 768px) {
  .cart-container {
    grid-template-columns: 2fr 1fr;
  }
}

/* Styles de la liste d'articles */
.cart-items, .checkout-form {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
}

.item-actions button {
  padding: 5px 10px;
  cursor: pointer;
  border: 1px solid #ccc;
  background: white;
  border-radius: 4px;
}

.quantity {
  margin: 0 10px;
  font-weight: bold;
}

.cart-summary {
  margin-top: 20px;
  text-align: right;
}

.btn-clear {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}

/* Styles du formulaire */
.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input, .form-group textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.form-group textarea {
  height: 80px;
  resize: vertical;
}

.btn-submit {
  width: 100%;
  background-color: #28a745;
  color: white;
  border: none;
  padding: 12px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.btn-submit:hover {
  background-color: #218838;
}

.empty-cart {
  text-align: center;
  margin-top: 50px;
}

.btn-shop {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}
</style> -->

<template>
  <div class="cart-page">
    <!-- En-tête de la page -->
    <header class="cart-header">
      <h1>Mon Panier</h1>
      <span class="item-count">{{ totalItems }} {{ totalItems > 1 ? 'articles' : 'article' }}</span>
    </header>

    <div class="cart-content">
      <!-- Liste des produits dans le panier -->
      <div class="cart-items-section" v-if="cartItems.length > 0">
        <div v-for="item in cartItems" :key="item.id" class="cart-item-card">
          <div class="item-image-wrapper">
            <img :src="item.image" :alt="item.name" class="item-image" />
          </div>
          
          <div class="item-details">
            <div class="item-main-info">
              <span class="item-brand">{{ item.brand }}</span>
              <h3 class="item-name">{{ item.name }}</h3>
            </div>
            
            <div class="item-actions">
              <!-- Sélecteur de quantité personnalisé -->
              <div class="quantity-selector">
                <button @click="decreaseQuantity(item)" class="qty-btn" :disabled="item.quantity <= 1">-</button>
                <span class="qty-value">{{ item.quantity }}</span>
                <button @click="increaseQuantity(item)" class="qty-btn">+</button>
              </div>

              <!-- Prix calculé -->
              <div class="item-price">
                {{ formatPrice(item.price * item.quantity) }} Fbu
              </div>

              <!-- Bouton Supprimer -->
              <button @click="removeItem(item.id)" class="remove-btn" aria-label="Supprimer">
                <svg viewBox="0 0 24 24" class="trash-icon"><path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Panier Vide -->
      <div class="empty-cart" v-else>
        <p>Votre panier est vide pour le moment.</p>
        <button class="continue-shopping-btn-empty">Découvrir nos produits</button>
      </div>

      <!-- Résumé de la commande (Sidebar) -->
      <div class="cart-summary-section" v-if="cartItems.length > 0">
        <div class="summary-card">
          <h2>Résumé de la commande</h2>
          
          <div class="summary-row">
            <span>Sous-total</span>
            <span>{{ formatPrice(subTotal) }} Fbu</span>
          </div>
          <div class="summary-row">
            <span>Frais de livraison</span>
            <span class="free-shipping">Gratuit</span>
          </div>
          
          <div class="summary-divider"></div>
          
          <div class="summary-row total-row">
            <span>Total</span>
            <span class="total-price">{{ formatPrice(subTotal) }} Fbu</span>
          </div>

          <button class="checkout-btn">Passer à la caisse</button>
          <button class="continue-shopping-btn">Continuer mes achats</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Simulation des articles ajoutés au panier (basé sur l'image Home.jpg)
const cartItems = ref([
  {
    id: 1,
    brand: 'Nike',
    name: 'Nike Air Max 270 React',
    price: 20000,
    quantity: 1,
    image: 'https://via.placeholder.com/150' // Remplacez par l'image réelle de la chaussure
  },
  {
    id: 2,
    brand: 'Nike',
    name: 'Nike Air Max 270 React Black-Blue',
    price: 20000,
    quantity: 2,
    image: 'https://via.placeholder.com/150'
  }
])

// Calculs dynamiques
const totalItems = computed(() => {
  return cartItems.value.reduce((acc, item) => acc + item.quantity, 0)
})

const subTotal = computed(() => {
  return cartItems.value.reduce((acc, item) => acc + (item.price * item.quantity), 0)
})

// Fonctions de gestion
const increaseQuantity = (item) => {
  item.quantity++
}

const decreaseQuantity = (item) => {
  if (item.quantity > 1) item.quantity--
}

const removeItem = (id) => {
  cartItems.value = cartItems.value.filter(item => item.id !== id)
}

// Formatage des prix avec espaces (ex: 20 000)
const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
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

/* Section Liste des Produits */
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
  border-radius: 16px; /* Même style arrondi que les filtres et les fiches */
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
  flex-content: space-between;
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

/* Quantité */
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
  transition: background 0.2s;
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

/* Prix */
.item-price {
  font-size: 16px;
  font-weight: 700;
  color: #28a745; /* Vert identique au prix sur Home.jpg */
  min-width: 90px;
  text-align: right;
}

/* Bouton Supprimer */
.remove-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
}

.trash-icon {
  width: 20px;
  height: 20px;
  fill: #dc3545;
  transition: transform 0.2s;
}

.remove-btn:hover .trash-icon {
  transform: scale(1.1);
}

/* Section Résumé (Sidebar) */
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
  margin-top: 0;
  margin-bottom: 20px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 14px;
  color: #555;
}

.free-shipping {
  color: #28a745;
  font-weight: 600;
}

.summary-divider {
  height: 1px;
  background-color: #dee2e6;
  margin: 16px 0;
}

.total-row {
  font-size: 18px;
  font-weight: 700;
  color: #000;
  margin-bottom: 24px;
}

.total-price {
  color: #28a745;
}

/* Boutons d'action */
.checkout-btn {
  width: 100%;
  background-color: #0062cc; /* Bleu du bouton 'Acheter Maintenant' */
  color: white;
  border: none;
  padding: 14px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-bottom: 12px;
}

.checkout-btn:hover {
  background-color: #004da3;
}

.continue-shopping-btn {
  width: 100%;
  background-color: transparent;
  color: #0062cc;
  border: 1px solid #0062cc;
  padding: 12px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s;
}

.continue-shopping-btn:hover {
  background-color: rgba(0, 98, 204, 0.05);
}

/* Panier Vide */
.empty-cart {
  text-align: center;
  padding: 60px 20px;
  background: #f8f9fa;
  border-radius: 20px;
  width: 100%;
}

.continue-shopping-btn-empty {
  background-color: #28a745; /* Vert du caddie */
  color: white;
  border: none;
  padding: 12px 24px;
  font-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  margin-top: 15px;
}

/* Responsive mobile */
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