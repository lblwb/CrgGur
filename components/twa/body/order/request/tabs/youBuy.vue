<template>
  <div class="MainBodyRequestNewForm">
    <div class="MainBodyRequestNewFormHeading">
      <div class="MainBodyRequestNewFormHeadingWrapper">
        <div class="RequestNewFormHeadingIcon">
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.437988" width="16" height="16" rx="8" fill="currentColor"/>
            <circle cx="8" cy="8.43799" r="4" fill="#291619"/>
          </svg>
        </div>
        <div class="RequestNewFormHeadingTitle">
          Заполните поля
        </div>
      </div>
    </div>

    <!--    <FormDebug :form="form"/>-->

    <div class="MainBodyRequestNewFormData">
      <inputTextBlock
        labelText="Ссылка на содержимое груза"
        inputPlaceholder="Введите ссылку на товар"
        :inputPasteBtn="true"
        :inputValue.sync="form.buyout.weBuy.product_link_url"/>
      <InputSelectBlock
        labelText="Категория груза"
        inputPlaceholder="Выберите категорию груза"
        inputOptionFieldName="slug"
        :inputSelectItems="cargoCategories"
        :inputValue.sync="form.buyout.weBuy.category_slug"
      />
      <InputSelectBlock
        labelText="Тип упаковки"
        inputPlaceholder="Выберите тип упаковки"
        inputOptionFieldName="slug"
        :inputSelectItems="cargoPkgTypes"
        :inputValue.sync="form.buyout.weBuy.pkg_slug"
      />

      <InputSelectBlock
        labelText="Тип упаковки"
        inputPlaceholder="Вес"
        :inputSelectItems="cargoWeightGrouped"
        :inputValue.sync="form.buyout.weBuy.weight"
        inputOptionLabelFieldName="name"
      />
      <!--            <inputTextBlock labelText="Категория груза"/>-->
      <!--            <inputTextBlock labelText="Тип упаковки"/>-->
      <!--            <inputTextBlock labelText="Вес товара"/>-->
    </div>

    <div class="MainBodyRequestNewFormSubmit">
      <div class="requestNewFormSubmitBtn">
        <button :disabled="!validateForm" @click="submitWeBuyForm">
          <span class="requestNewFormSubmitBtnTitle">
            Перейти к оформлению
          </span>
        </button>
      </div>
    </div>
  </div>

</template>

<script>

import InputTextBlock from "~/components/twa/body/Form/InputTextBlock.vue";
import InputSelectBlock from "~/components/twa/body/Form/InputSelectBlock.vue";
import FormDebug from "~/components/twa/debug/formDebug.vue";
import {mapGetters} from "vuex";

export default {
  name: "TabWeBuy",
  data() {
    return {
      isFormValid: false,
    }
  },
  props: {
    form: {}
  },
  methods: {
    /**
     * Create new We Buy Request
     */
    async submitWeBuyForm() {
      //todo: get Buy Request store dispatch
      const weBuy = this.form.buyout.weBuy;
      await this.$store.dispatch("order/accept/setAcceptFormData", {data: weBuy})
      const data = await this.$store.dispatch("order/accept/fetchNewRequestAccept");
      const order_unique_slug = "slug_42343243"

      console.log("submitWeBuyForm", {data: data});

      //todo:redirect to page checkout
      // this.$router.push({
      //   name: "order-request-slug-checkout",
      //   params: {
      //     slug: order_unique_slug
      //   }
      // })
    }
  },
  computed: {
    ...mapGetters({
      cargoCategories: "order/cargo/category/getCargoCategories",
      cargoPkgTypes: "order/cargo/pkg/getPkgTypes",
      cargoWeightGrouped: "order/cargo/wgh_size/getWeightsGrouped"
    }),
    validateForm() {
      const weBuy = this.form.buyout.weBuy;
      console.log(weBuy);
      this.isFormValid = weBuy.category_slug !== null &&
        weBuy.pkg_slug !== null &&
        weBuy.weight !== undefined && weBuy.weight !== null &&
        weBuy.product_link_url !== null;
      return this.isFormValid;
    }
  },
  mounted() {
    this.$store.dispatch("order/cargo/pkg/fetchCargoPkgTypes");
    this.$store.dispatch("order/cargo/wgh_size/fetchCargoWeightsGrouped")
  },
  components: {FormDebug, InputSelectBlock, InputTextBlock}
}
</script>
<style scoped>

.MainBodyRequestNewFormHeadingWrapper {
  display: flex;
  align-items: center;
}

.MainBodyRequestNewFormHeading {
  margin-bottom: 24px;
}

.RequestNewFormHeadingIcon {
  display: flex;
  color: var(--accent-second-color);
  margin-right: 8px;
}

.RequestNewFormHeadingTitle {
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 21px */
  letter-spacing: -0.28px;
}


.MainBodyRequestNewFormSubmit .requestNewFormSubmitBtn button {
  border-radius: 10px;
  border: 1px solid var(--accent-comp-low-color);
  background: var(--accent-comp-low-color);
  color: var(--accent-block-color);
  padding: 16px 16px;
  width: 100%;
}

.MainBodyRequestNewFormSubmit .requestNewFormSubmitBtn button:hover,
.MainBodyRequestNewFormSubmit .requestNewFormSubmitBtn button:focus {
  background: var(--bg-primary-color);
  border: 1px solid var(--accent-second-color);
  color: var(--accent-block-color);
  opacity: 0.9;
}

.MainBodyRequestNewFormSubmit .requestNewFormSubmitBtn button:disabled {
  opacity: 0.7;
}

.MainBodyRequestNewFormSubmit .requestNewFormSubmitBtn .requestNewFormSubmitBtnTitle {
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
}
</style>
