<template>
  <div class="SearchMainInput">
    <div class="SearchMainInputWrapper">
      <div class="SearchMainInputBoxLabel" v-if="showLabel">
        {{ labelText }}
      </div>
      <div class="SearchMainInputBox">
        <input type="text" :placeholder="placeholder">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchMainInput",
  props: {
    showLabel: {
      default: false
    },
    labelText: {
      default: ""
    },
    placeholder: {
      default: "Поиск товаров"
    }
  }
}
</script>

<style scoped>
.SearchMainInputBox {

}

.SearchMainInputBox input {
  border-radius: 8px;
  border: 1px solid #EDEDED;
  background: #FFF;
  padding: 12px 16px;
  width: 100%;
  box-sizing: border-box;
  font-size: 12px;
}

.SearchMainInputBox input::placeholder {
  color: var(--text-second-color);
}

</style>
