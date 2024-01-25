<template>
  <div>
    <p class="title">Filters</p>
    <div class="button-wrapper custom-scrollbar">
      <button
          :id="i"
          v-for="(buttonContent, i) in content"
          :key="buttonContent"
          class="button-filter"
          :class="{ active: selectedType === buttonContent.filterData }"
          :data-filter="buttonContent.filterData"
          @click="selectType(buttonContent.filterData)"
      >
        {{ buttonContent.text }}
      </button>
    </div>
  </div>
</template>

<script>
import {BUTTON_STUDIES_CONTENT, FILTER_TYPES} from "@/shared/button-helpers";
import store from "@/store";

export default {
  computed: {
    store() {
      return store;
    },
  },
  data() {
    return {
      content: BUTTON_STUDIES_CONTENT,
      selectedType: FILTER_TYPES.all,
    };
  },
  methods: {
    selectType(type) {
      this.selectedType = type;
      store.state.buttonFilterType = type;
    },
  },
};
</script>

<style scoped lang="scss">
.title {
  text-align: left;
  color: #fff;
  padding: 20px 25px 0 25px;
}

.button-wrapper {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  padding: 5px 25px;

  button {
    padding: 12px 24px;
    border-radius: 25px;
    font-size: 16px;
    border: 1px solid #5d607c;
    background: #26326a;
    color: #fff;
    margin-right: 24px;
    margin-bottom: 24px;

    &.active {
      background: #23285b;
      border: 1px solid #f2a33a;
      color: #f2a33a;
    }
  }
}

@media screen and (max-width: 500px) {
  .custom-scrollbar {
    padding-bottom: 10px;
  }

  .custom-scrollbar::-webkit-scrollbar {
    height: 4px;
    border-radius: 14px;
    background: #656883;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb:horizontal {
    background: #ffffff;
    width: 20px;
  }
  .button-wrapper {
    overflow-y: auto;
    flex-wrap: nowrap;
    margin-bottom: 32px;
    height: 64px;

    button {
      display: flex;
      width: fit-content;
      justify-content: center;
      align-items: center;
      white-space: nowrap;
      text-align: center;
      margin-bottom: unset;

      img {
        margin-right: 10px;
      }
    }
  }
}
</style>
