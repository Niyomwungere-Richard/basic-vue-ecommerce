<template>
  <div class="product-card">
    <div class="product-image">
      <img :src="items.image" :alt="items.name" class="image" />
    </div>

    <div class="product-info">
      <h3 class="product-name">{{ items.name }}</h3>
      <p class="product-price">
        Price <span>{{ items.price.toLocaleString() }} Fbu</span>
      </p>

      <div class="product-actions">
        <button class="btn-buy" @click="acheter">Acheter Maintenant</button>
        <button class="btn-cart" @click="ajouterPanier">
          <ShoppingCart :size="17"/>
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
    items: {
      type: Object,
      required: true
    }
  },
  setup() {
    const cartStore = useCartStore();
    return { cartStore };
  },
  methods: {
    acheter() {
      this.$router.push(`/product/${this.items.id}`);
    },
    ajouterPanier() {
      console.log('Ajouter au panier :', this.items.name);
      this.cartStore.addToCart(this.items);
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