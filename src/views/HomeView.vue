<template>
  <div class="home">
    <div class="home-header">
      <FilterButtons />
      <PriceFilter />
    </div>
    <CatalogCard />
  </div>
</template>

<script>
import FilterButtons from "@/components/FilterButtons.vue";
import CatalogCard from "@/components/CatalogCard.vue";
import PriceFilter from "@/components/PriceFilter.vue";

export default {
  name: 'HomeView',
  components: {
    PriceFilter,
    CatalogCard,
    FilterButtons,
  },
}
</script>
