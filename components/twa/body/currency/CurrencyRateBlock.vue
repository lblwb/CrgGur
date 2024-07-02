<template>
  <div class="CurrencyRatesBlock">
    <div class="CurrencyRatesBlockWrapper">
      <div class="CurrencyRatesBlockHeading">
        <div class="CurrencyRatesBlockHeadingTitle">
          Курс валют
        </div>
      </div>
      <div class="CurrencyRatesBlockCurList">
        <div class="BlockCurListItem" v-for="rate in currencyRates">
          <div class="BlockCurListItemWrapper">
            <div class="BlockCurListItemSym">
              {{ rate.currency_sym }}
            </div>
            <div class="BlockCurListItemValue">
              {{ rounded(rate.Value) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CurrencyRateBlock",
  data() {
    return {
      currencyRates: [
        // {
        //   "currency": "USD",
        //   "currency_sym": "$",
        //   "Value": 89.7619
        // },
        // {
        //   "currency": "CNY",
        //   "currency_sym": "¥",
        //   "Value": 12.5479
        // }
      ]
    }
  },
  methods: {
    rounded(number){
      return +number.toFixed(2);
    },
    async fetchCurrencyData() {
      const {result} = await this.$axios.$get("/api/v1/payment/currency/rate");
      this.currencyRates = result;
    }
  },
  mounted() {
    this.fetchCurrencyData()
  }
}
</script>
<style scoped>
.CurrencyRatesBlock {
  padding: 16px 20px;
  border-radius: 10px;
  border: 1px solid #F3F3F3;
  background: transparent;
}

.CurrencyRatesBlock .CurrencyRatesBlockWrapper {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

.CurrencyRatesBlock .CurrencyRatesBlockHeading {
  flex: 1;
  display: flex;
  justify-content: flex-start;
}

.CurrencyRatesBlock .CurrencyRatesBlockHeading .CurrencyRatesBlockHeadingTitle {
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.28px;
  color: var(--text-accent-color)
}

.CurrencyRatesBlock .CurrencyRatesBlockCurList {
  flex: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
}

.BlockCurListItemWrapper {
  display: flex;
}


.BlockCurListItem {
  color: var(--text-second-color);
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
}


.BlockCurListItemSym {
  margin-left: 16px;
}
</style>
