
<template>
  <div class="product-card">
    <div class="product-image">
      <img :src="item.image" :alt="item.name" class="image" />
    </div>

    <div class="product-info">
      <h3 class="product-name">{{ item.name }}</h3>
      <p class="product-price">
        Price <span>{{ item.price.toLocaleString() }} Fbu</span>
      </p>

      <div class="product-actions">
        <button class="btn-buy" @click="acheter">Acheter Maintenant</button>
        <button class="btn-cart" @click="ajouterPanier">
          <ShoppingCart :size="17" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ShoppingCart } from '@lucide/vue';
import { useCartStore } from '../stores/cartStore';

export default {
  name: 'ProductCard',
  components: {
    ShoppingCart
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup() {
    // Avec l'Options API, on instancie le store ici et on le retourne
    const cartStore = useCartStore();
    return { cartStore };
  },
  methods: {
    acheter() {
      this.$router.push(`/product/${this.item.id}`);
    },
    ajouterPanier() {
      console.log('Ajouter au panier :', this.item.name);
      // Utilisation via this.cartStore
      this.cartStore.addToCart(this.item);
    }
  }
}
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  transition: box-shadow 0.3s ease;
}

.product-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-info {
  padding: 15px;
}

.product-name {
  font-size: 18px;
  margin: 0 0 10px;
}

.product-price {
  font-size: 16px;
  color: #888;
  margin: 0 0 15px;
}

.product-actions {
  display: flex;
  justify-content: space-between;
}

.btn-buy {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
}

.btn-buy:hover {
  background-color: #0056b3;
}

.btn-cart {
  background-color: transparent;
  border: none;
  color: #007bff;
  cursor: pointer;
}

.btn-cart:hover {
  color: #0056b3;
}
</style>