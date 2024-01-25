<template>
  <div>
    <p class="title">Price Filter</p>
    <div class="price-selector">
      <div class="price-selector-field price-selector-min">
        <label>min price</label>
        <input
          @change="$store.commit('setMinPrice', range.minPrice)"
          v-model="range.minPrice"
        />
      </div>
      <div class="price-selector-field price-selector-max">
        <label>max price</label>
        <input
          @change="$store.commit('setMaxPrice', range.maxPrice)"
          v-model="range.maxPrice"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { CARD_DATA } from "@/shared/card-helpers";
import { mapGetters } from "vuex";
import store from "@/store";

export default {
  data() {
    return {
      price: [],
      range: {
        minPrice: 0,
        maxPrice: 0,
      },
    }
  },
  mounted() {
    this.extractPrices();
  },
  computed: {
    ...mapGetters(["newMinPrice", "newMaxPrice"]),
  },
  methods: {
    extractPrices() {
      CARD_DATA.forEach(item => this.price.push(Number(item.price.replace(/\D/g, ""))));
      this.range.minPrice = Math.min.apply(Math, this.price);
      this.range.maxPrice = Math.max.apply(Math, this.price);
      this.$store.commit('setMaxPrice', this.range.maxPrice);
      this.$store.commit('setMinPrice', this.range.minPrice);
    },
  },
}
</script>

<style scoped lang="scss">
.title {
  text-align: left;
  color: #fff;
  padding: 20px 25px 0 25px;
  margin-bottom: 0;
}

.price-selector {
  display: flex;
  flex-direction: row;
  padding: 20px 25px;

  &-field {
    display: flex;
    flex-direction: column;

    label {
      text-align: left;
      color: #fff;
    }

    input {
      border-radius: 25px;
      border: 1px solid #5d607c;
      background: #26326a;
      color: #fff;
      padding: 5px;
      font-size: 16px;
    }
  }

  &-min {
    margin-right: 25px;
  }
}
</style>