<template>
    <h1 class="titre">Decouvrir Nos Produits</h1>
    <div class="products-container">
        <Filter @filter-change="onFilterChange" />

        <div class="cards-container">
            <ProductCard v-for="value in filteredProducts" :key="value.id" :items="value" />
        </div>
    </div>
</template>

<script>
import Filter from '@/components/Filter.vue';
import ProductCard from '@/components/ProductCard.vue';
import { useCartStore } from '@/stores/cartStore';

export default {
    components: {
        Filter,
        ProductCard
    },
    setup(){
        const store = useCartStore()
        return { store }
    },
    data() {
        return {
            SelectedBrands: [],
            SelectedPriceRanges: [],
            AllProducts: [
                { id: 1, name: 'Nike Air Max 270 React', brand: 'Nike', price: 20000, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80' },
                { id: 2, name: 'Nike React Infinity Run', brand: 'Nike', price: 32000, image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80' },
                { id: 3, name: 'Adidas Ultraboost 22', brand: 'Adidas', price: 35000, image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&q=80' },
                { id: 4, name: 'Adidas NMD R1', brand: 'Adidas', price: 30000, image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=400&q=80' },
                { id: 5, name: 'New Balance 574', brand: 'New Balance', price: 28000, image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&q=80' },
                { id: 6, name: 'New Balance 990v5', brand: 'New Balance', price: 42000, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&q=80' },
                { id: 7, name: 'Vans Old Skool', brand: 'Vans', price: 18000, image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&q=80' },
                { id: 8, name: 'Puma RS-X Efekt', brand: 'Puma', price: 22000, image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&q=80' },
                { id: 9, name: 'Air Jordan 1 Retro High', brand: 'Jordan', price: 45000, image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&q=80' },
                { id: 10, name: 'Balenciaga Triple S', brand: 'Balenciaga', price: 95000, image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&q=80' },
                { id: 11, name: 'Puma Suede Classic', brand: 'Puma', price: 19000, image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&q=80' },
                { id: 12, name: 'Air Jordan 4 Retro', brand: 'Jordan', price: 55000, image: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&q=80' },
            ]
        }
    },
    computed: {
        filteredProducts() {
            let list = this.AllProducts;


            if (this.SelectedBrands.length > 0) {
                list = list.filter(product => this.SelectedBrands.includes(product.brand));
            }


            if (this.SelectedPriceRanges.length > 0) {
                list = list.filter(product => {

                    return this.SelectedPriceRanges.some(range =>
                        product.price >= range.min && product.price <= range.max
                    );
                });
            }

            const localKeyword = this.store.keyword.toLowerCase()
            list = list.filter((product)=> (product.name).toLowerCase().includes(localKeyword));

            return list;
        }
    },
    methods: {
        onFilterChange(filters) {
            this.SelectedBrands = filters.brands;
            this.SelectedPriceRanges = filters.priceRanges;
        }
    }
}
</script>

<style scoped>
.products-container {
    display: flex;
    gap: 30px;
    padding: 0 20px;
}

.cards-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
}

.titre {
    text-align: center;
}
</style>