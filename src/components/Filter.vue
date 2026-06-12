<template>
    <aside class="filters">
        <div>
            <h1>Filter</h1>
        </div>
        
        <div class="filter-group">
            <h3>Par marques</h3>
            <label v-for="brand in brands" :key="brand.id" class="check-label">
                <input type="checkbox" :value="brand.name" v-model="selectedBrands" />
                {{ brand.name }}
            </label>
        </div>
        
        <div class="filter-group">
            <h3>Par prix</h3>
            <label v-for="price in priceRanges" :key="price.label" class="check-label">
                <input type="checkbox" :value="price" v-model="selectedPriceRanges" />
                {{ price.label }}
            </label>
        </div>
    </aside>
</template>

<script>
export default {
    name: 'FilterComponent',
    data() {
        return {
            // 1. Tableaux pour stocker les sélections de l'utilisateur
            selectedBrands: [],
            selectedPriceRanges: [],

            // 2. Données pour afficher les options dans le template
            brands: [
                { id: 1, name: 'Nike' },
                { id: 2, name: 'Adidas' },
                { id: 3, name: 'New Balance' },
                { id: 4, name: 'Vans' },
                { id: 5, name: 'Puma' },
                { id: 6, name: 'Jordan' },
                { id: 7, name: 'Balenciaga' }
            ],
            priceRanges: [
                { label: '0 - 20 000', min: 0, max: 20000 },
                { label: '20 001 - 40 000', min: 20001, max: 40000 },
                { label: 'Plus de 40 000', min: 40001, max: 200000 }
            ]
        };
    },
    watch: {
        // On surveille les changements pour envoyer les données au parent en temps réel
        selectedBrands: {
            handler() {
                this.emitFilters();
            },
            deep: true
        },
        selectedPriceRanges: {
            handler() {
                this.emitFilters();
            },
            deep: true
        }
    },
    methods: {
        emitFilters() {
            this.$emit('filter-change', {
                brands: this.selectedBrands,
                priceRanges: this.selectedPriceRanges
            });
        }
    }
}
</script>

<style scoped>
.filters {
    width: 250px;
    /* padding: 20px; */
    background-color: #f5f5f5;
    border-radius: 8px;
}
.filter-group {
    margin-bottom: 20px;
}
.check-label {    
    display: block;
    margin-bottom: 10px;
    font-size: 16px;
    cursor: pointer;
}
.check-label input {    
    margin-right: 10px;
}   
</style>