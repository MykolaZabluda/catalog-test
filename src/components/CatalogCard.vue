<template>
  <div class="studies-cards container-fluid">
    <div class="row" v-if="filteredCards.length">
      <div class="col" v-for="card in filteredCards" :key="card.id">
        <div :id="card.id" class="card">
          <div>
            <router-link :to="'/CardContent/' + card.id">
              <img class="card-img" :src="card.cardImg" alt="card img" />
              <div class="card-body">
                <div class="card-body-left">
                  <h3 class="card-body-left-title">{{ card.title }}</h3>
                  <p class="card-body-left-subtitle">{{ card.price }}</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CARD_DATA } from "@/shared/card-helpers";
import store from "@/store";
import { FILTER_TYPES } from "@/shared/button-helpers";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      filter: store.state.catalogFilterType,
      filteredCards: CARD_DATA,
      type: FILTER_TYPES.all,
      range: {
        minPrice: 0,
        maxPrice: 0,
      },
    };
  },
  computed: {
    ...mapGetters(["newMinPrice", "newMaxPrice", "buttonFilter"]),
  },
  watch: {
    buttonFilter: {
      deep: true,
      handler(type) {
        this.type = type;
        this.filteredCards = this.filterCards();
      },
    },
    newMinPrice: {
      deep: true,
      handler(minPrice) {
        this.range.minPrice = minPrice;
        this.filteredCards = this.filterCards();
      },
    },
    newMaxPrice: {
      deep: true,
      handler(maxPrice) {
        this.range.maxPrice = maxPrice;
        this.filteredCards = this.filterCards();
      },
    },
  },
  methods: {
    filterCards() {
      this.filteredCards = [];

      return CARD_DATA.filter((card) => {
        const price = Number(card.price.replace(/\D/g, ""));
        const isPriceInRange = price >= Number(this.range.minPrice) && price <= Number(this.range.maxPrice);
        const isTypeMatch = this.type === FILTER_TYPES.all || card.type.includes(this.type);

        return isPriceInRange && isTypeMatch;
      });
    },
  },
};
</script>

<style scoped lang="scss">
.studies-cards {
  width: 100%;
  padding: 0 0 100px 0;

  .row {
    gap: 32px;
    justify-content: center;
    margin-right: 0 !important;
    margin-left: 0 !important;

    .col {
      flex: none;
      width: fit-content;
      max-width: fit-content;
    }
  }

  .card {
    width: 416px !important;
    height: 441px !important;
    background: #17215e;
    border: 1px solid #5d607b;
    border-radius: 24px;
    overflow: hidden;

    a {
      .card-left {
        &-title {
          text-decoration: none;
        }

        &-subtitle {
          text-decoration: none;
        }
      }
    }

    &-bg {
      width: 100%;
      position: absolute;
      transform: matrix(1, 0, 0, 1, 0, 0);
    }

    &-img {
      width: 416px !important;
      height: 300px !important;
    }

    &-body {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      z-index: 2;
      position: absolute;
      bottom: 0;
      padding: 48px;

      &-left {
        &-title {
          font-size: 20px;
          color: #fff;
          text-align: left;
          font-weight: 400;
          text-transform: uppercase;
        }

        &-subtitle {
          font-size: 16px;
          color: #fff;
          text-align: left;
          margin-bottom: 0;
        }
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .studies-cards {
    width: 100%;
    padding: 0 3%;
    margin-bottom: 86px;

    .row {
      gap: 24px;
    }

    .card {
      width: 100% !important;
      height: auto !important;

      &-img {
        width: 100% !important;
        height: auto !important;
      }
    }
  }
}
</style>
