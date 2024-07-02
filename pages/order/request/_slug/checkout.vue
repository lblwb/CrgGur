<template>
  <TwaMainLt>
    <template #Body>
      <div class="orderCheckoutBody">
        <div class="orderCheckoutBodyWrapper">
          <div class="orderCheckoutBodyHeading">
            <div class="orderCheckoutBodyWarnBlock">
              <InfoWarnBlockBtn
                titleWarn="Ознакомиться с требованиями"
                descWarn="Описание тарифов и требований"
                @callClick="showModalTariffsInfo"
              />
            </div>
          </div>

          <div class="orderCheckoutBodyFormData">
<!--            <inputTextBlock-->
<!--              labelText="Ссылка на содержимое груза"-->
<!--              inputPlaceholder="Введите ссылку на товар"-->
<!--              :inputPasteBtn="true"-->
<!--              :inputValue.sync="form.buyout.weBuy.product_link_url"/>-->
          </div>


          <FormDataDemandsModal v-if="modals.demands.status" @modalClose="modals.demands.status = false"/>
        </div>
      </div>
    </template>
  </TwaMainLt>
</template>
<!-- Подготовка данных перед созданием чека на оплату по id заказа -->
<script>
import TwaMainLt from "~/layout/twaMainLt.vue";
import InfoWarnBlockBtn from "~/components/twa/body/widget/InfoWarnBlockBtn.vue";
import FormDataDemandsModal from "~/components/twa/body/Form/Modal/FormDataDemands.vue";
import InputTextBlock from "~/components/twa/body/Form/InputTextBlock.vue";
import InputSelectBlock from "~/components/twa/body/Form/InputSelectBlock.vue";

export default {
  name: "OrderRequestSlugCheckout",
  data() {
    return {
      modals: {
        demands: {
          status: false
        }
      }
    }
  },
  methods: {
    showModalTariffsInfo() {
      // alert("Требования!");
      this.modals.demands.status = true;
    },
  },
  components: {InputSelectBlock, InputTextBlock, FormDataDemandsModal, InfoWarnBlockBtn, TwaMainLt}
}
</script>

<style scoped>

</style>
