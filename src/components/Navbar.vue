<template>
    <div class="navbar">
        <h1 class="nom">APP NAME</h1>

        <div class="search-box">
            <input type="text" v-model="textSearch" placeholder="Rechercher..." />
            <Search class="icon"  />
        </div>

        <div class="actions">
            <div @click="$router.push('/cart')" class="clickable-icon">
                <ShoppingCart />
                <span class="cart-count">{{ cartStore.cartCount }}</span>
            </div>

            <div @click="toggleMenu" class="clickable-icon">
                <User class="utilisateur" />
                <ChevronDown class="flèche" />
            </div>
        </div>
    </div>
</template>

<script>
import { Search, ShoppingCart, ChevronDown, User } from '@lucide/vue';
import { useCartStore } from '../stores/cartStore';

export default {
    name: 'Navbar',
    components: {
        Search,
        ShoppingCart,
        ChevronDown,
        User
    },

    data() {
        return {
            textSearch: ''
        }
    },

    watch: {
        textSearch(newValue){
            this.cartStore.setKeyWOrd(newValue)
        }
    },
    emits: ['search'],
    setup() {
        const cartStore = useCartStore();
        return { cartStore };
    }
}
</script>

<style scoped>
.navbar {
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 10px 2rem;
    background-color: #f3f3f3;
    /* height: 40px; */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 10;
}

.search-box {
    display: flex;
    align-items: center;
    background-color: white;
    padding: 3px 10px;
    border-radius: 20px;
    width: 300px;
    border: 1px solid;
}

.search-box input {
    border: none;
    outline: none;
    width: 100%;
    color: gray;
    font-size: 1rem;
}

.search-box .icon {
    color: gray;
    margin-left: 0.5rem;
    cursor: pointer;
}

.actions {
    display: flex;
    align-items: center;
}

.clickable-icon {
    display: flex;
    align-items: center;
    margin-left: 1.5rem;
    cursor: pointer;
    position: relative;
}

.cart-count {
    background-color: #ff0000;
    /* color: white; */
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
    margin-left: 5px;
    position: absolute;
    top: -8px;
    right: -8px;
}

.nom {
    font-size: 1.5rem;
    font-weight: bold;
    font-family: 'Arial', sans-serif;
    color: #333;
    margin: 0;
}

.utilisateur {
    /* color: white; */
}

.flèche {
    /* color: white; */
    margin-left: 0.5rem;
}
</style>