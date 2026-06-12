<template>
  <div class="app-container">
    <Navbar />
    <Hero v-if="$route.name === 'homepage'" /> <!-- v-if -->

    <!-- router -->
    <!-- <ProductsPage /> -->

    <router-view></router-view>

    <Footer /> <!-- v-if -->
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Hero from './components/Hero.vue';
import Navbar from './components/Navbar.vue';
import ProductsPage from './views/ProductsPage.vue';


export default {
  components: {
    Navbar,
    Hero,
    ProductsPage,
    Footer
  }
  
}
</script>

<style>
.app-container {
  position: relative;
  
}
</style>