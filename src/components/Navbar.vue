<template>
    <div class="navbar">
        <h1 class="nom">APP NAME</h1>
        
        <div class="search-box">
            <input type="text" v-model="textSearch" placeholder="Rechercher..." />
            <Search class="icon"/>
        </div>

        <div class="actions">
            <span @click="goToCart" class="clickable-icon">
                <ShoppingCart />
            </span>

            <div @click="toggleMenu" class="clickable-icon">
                <User class="utilisateur"/>
                <ChevronDown class="flèche" />
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Search, ShoppingCart, ChevronDown, User } from '@lucide/vue';
import { useCartStore } from '../stores/cartStore';

export default {
    name: 'Navbar',
    
    // 1. Il faut déclarer les composants pour qu'ils soient utilisables dans le template
    components: {
        Search,
        ShoppingCart,
        ChevronDown,
        User
    },
    
    // 2. Il faut déclarer les événements que le composant peut émettre
    emits: ['search'],

    // 3. La fonction setup est le cœur de cette syntaxe
    setup(props, { emit }) {
        // Initialisation des hooks et stores
        const router = useRouter();
        const cartStore = useCartStore();

        // Déclaration des variables réactives
        const isLoggedIn = ref(false);
        const textSearch = ref('');
        const openMenu = ref(false);

        // Déclaration des fonctions
        function onSearch() {
            emit('search', textSearch.value); // 'emit' est récupéré depuis le second paramètre de setup()
        }

        function toggleMenu() {
            openMenu.value = !openMenu.value;
        }

        function goToCart() {
            router.push('/cart');
        }
        return {
            isLoggedIn,
            textSearch,
            openMenu,
            onSearch,
            toggleMenu,
            goToCart,
            cartStore // facultatif ici, mais utile si vous utilisez le store dans le template
        };
    }
}
</script>

<style scoped>
.navbar {
    display: flex;
    flex-wrap:nowrap ;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    background-color: hsla(229, 65%, 39%, 0.781);
    height: 10vh;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 10;
}
 .search-box {
    display: flex;
    align-items: center;
    background-color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    width: 300px;
}
.search-box input {
    border: none;
    outline: none;
    width: 100%;
    color: gray;
    font-size: 1rem;
}
.search-box .icon {    color: gray;
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
}
.utilisateur {
    color: white;
}
.flèche {
    color: white; 
    margin-left: 0.5rem;
}

</style>