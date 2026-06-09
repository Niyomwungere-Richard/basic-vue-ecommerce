<template>
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
</style>