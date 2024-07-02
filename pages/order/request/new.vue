<template>
  <TwaMainLt>
    <template #Body>
      <div class="MainBodyHeading">
        <div class="MainBodyHeadingTitle">
          Создание заявки
        </div>
      </div>
      <div class="MainBodyRequestNewWrapper">

        <div class="MainBodyRequestNewWarnBlock">
          <InfoWarnBlockBtn
            titleWarn="Ознакомиться с требованиями"
            descWarn="Описание тарифов и требований"
            @callClick="showModalTariffsInfo"
          />
        </div>


        <div class="MainBodyReqSend">
          <div class="MainBodyReqSendBlock">
            <div class="MainBodyReqSendBlockHeading">
              <div class="reqSendBlockHeadingDesc">
                Задайте параметры о грузе и точке назначения
              </div>
            </div>
            <div class="MainBodyReqSendBlockBody">
              <div class="reqSendBlockBodyForm">
                <div class="reqSendBlockBodyFormWrapper">

                  <SelectBtnCityList :citySelected.sync="form.cityFrom.value"
                                     :selectDefTitle="'Пункт отправки'"
                                     :cities="cities"
                  />

                  <SelectBtnCityList :citySelected.sync="form.cityTo.value"
                                     :selectDefTitle="'Пункт назначения'"
                                     :cities="citiesExcept(form.cityFrom.value)"
                  />

                  <!--                  <div class="reqSendBlockBodyFormSelect __Main"></div>-->
                  <!--                  <div class="reqSendBlockBodyFormSelect"></div>-->
                  <div class="reqSendBlockBodyFormSelectGr" style="display: flex; flex-flow: row wrap; align-items: stretch">
                    <SelectBtnCount placeholderText="Вес груза" :size-count.sync="form.weight.value" qtyName="КГ">
                      <template #Icon>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M8.99988 6C8.99988 6.79565 9.31595 7.55871 9.87856 8.12132C10.4412 8.68393 11.2042 9 11.9999 9C12.7955 9 13.5586 8.68393 14.1212 8.12132C14.6838 7.55871 14.9999 6.79565 14.9999 6C14.9999 5.20435 14.6838 4.44129 14.1212 3.87868C13.5586 3.31607 12.7955 3 11.9999 3C11.2042 3 10.4412 3.31607 9.87856 3.87868C9.31595 4.44129 8.99988 5.20435 8.99988 6Z"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path
                            d="M6.8349 9H17.1649C17.3991 8.99996 17.6259 9.08213 17.8057 9.23216C17.9855 9.3822 18.107 9.59059 18.1489 9.821L19.7859 18.821C19.8121 18.9651 19.8064 19.1133 19.769 19.2549C19.7317 19.3966 19.6637 19.5283 19.5698 19.6408C19.4759 19.7532 19.3585 19.8437 19.2258 19.9058C19.0931 19.9679 18.9484 20 18.8019 20H5.1979C5.05141 20 4.9067 19.9679 4.77401 19.9058C4.64131 19.8437 4.52388 19.7532 4.43001 19.6408C4.33615 19.5283 4.26813 19.3966 4.23079 19.2549C4.19345 19.1133 4.18768 18.9651 4.2139 18.821L5.8509 9.821C5.89283 9.59059 6.01429 9.3822 6.19411 9.23216C6.37393 9.08213 6.60071 8.99996 6.8349 9Z"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </template>
                    </SelectBtnCount>

                    <SelectBtnCount placeholderText="Объем груза" :size-count.sync="form.size.value" qtyName="м2">

                      <template #Icon>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9 8V10M6 8V11M12 8V11M18 8V11M15 8V10M19.875 8C20.496 8 21 8.512 21 9.143V14.857C21 15.488 20.496 16 19.875 16H4C3.73478 16 3.48043 15.8946 3.29289 15.7071C3.10536 15.5196 3 15.2652 3 15V9.143C3 8.512 3.504 8 4.125 8H19.875Z"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </template>

                    </SelectBtnCount>
                  </div>
                </div>
                <div class="reqSendBlockBodyFormBtn">
                  <button @click="createReqOrder" :disabled="!isFormValid">
                    <span class="formBtnWrap" style="">
                      <span class="formBtnTitle">
                        Получить предложение на доставку
                      </span>
                      <span class="formBtnIcon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M5 17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19C7.53043 19 8.03914 18.7893 8.41421 18.4142C8.78929 18.0391 9 17.5304 9 17M5 17C5 16.4696 5.21071 15.9609 5.58579 15.5858C5.96086 15.2107 6.46957 15 7 15C7.53043 15 8.03914 15.2107 8.41421 15.5858C8.78929 15.9609 9 16.4696 9 17M5 17H3V6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5H13V17M9 17H15M15 17C15 17.5304 15.2107 18.0391 15.5858 18.4142C15.9609 18.7893 16.4696 19 17 19C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17M15 17C15 16.4696 15.2107 15.9609 15.5858 15.5858C15.9609 15.2107 16.4696 15 17 15C17.5304 15 18.0391 15.2107 18.4142 15.5858C18.7893 15.9609 19 16.4696 19 17M19 17H21V11M21 11H13M21 11L18 6H13"
                          stroke="#728AFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

<!--        {{ form }}-->

        <FormDataDemandsModal v-if="modals.demands.status" @modalClose="modals.demands.status = false"/>
      </div>
    </template>
  </TwaMainLt>
</template>
<script>
import TwaMainLt from "~/layout/twaMainLt.vue";
import InfoWarnBlockBtn from "~/components/twa/body/widget/InfoWarnBlockBtn.vue";
import TabList from "~/components/twa/body/widget/Tab/TabList.vue";
import TabListItem from "~/components/twa/body/widget/Tab/TabListItem.vue";
import InputTextBlock from "~/components/twa/body/Form/InputTextBlock.vue";
import InputSelectBlock from "~/components/twa/body/Form/InputSelectBlock.vue";
import TabWeBuy from "~/components/twa/body/order/request/tabs/weBuy.vue";
import FormDataDemandsModal from "~/components/twa/body/Form/Modal/FormDataDemands.vue";
import SelectBtnCityList from "~/components/app/Main/Form/SelectBtnCityList.vue";
import SelectBtnCount from "~/components/app/Main/Form/SelectBtnCount.vue";

export default {
  name: "OrderRequestNew",
  data() {
    return {
      // Список городов
      cities: [
        {id: 1, name: 'Москва'},
        {id: 2, name: 'Санкт-Петербург'},
        {id: 3, name: 'Новосибирск'},
        // Добавьте остальные города по мере необходимости
      ],
      form: {
        cityFrom: {
          value: null
        },
        cityTo: {
          value: null
        },
        weight: {
          value: null
        },
        size: {
          value: null
        },
        // textMsg: {
        //   value: ""
        // }
      },
      form_test: {

        buyout: {
          weBuy: {
            product_link_url: null,
            category_slug: null,
            pkg_slug: null
          },
          youBuy: {},
        },
      },
      tab: {
        select: {
          id: '0'
        }
      },
      modals: {
        demands: {
          status: false
        }
      }
    }
  },
  methods: {
    citiesExcept(selectedCity) {
      return this.cities.filter(city => !selectedCity || city.id !== selectedCity.id);
    },
    selectTab(Id) {
      this.tab.select.id = Id;
    },
    showModalTariffsInfo() {
      // alert("Требования!");
      this.modals.demands.status = true;
    },

    resetForm() {
      // Очистка полей формы
      for (const field in this.form) {
        this.form[field].value = (field === 'textMsg') ? '' : null;
      }
    },

    createReqOrder() {
      if (this.isFormValid) {
        alert("ok")
        this.resetForm()
      }
    },
  },
  async mounted() {
    await this.selectTab('1');
    //Get Cargo Categories
    await this.$store.dispatch('order/cargo/category/fetchCargoCategoriesWithTypes');
  },
  computed: {
    getCurrentTabId() {
      return this.tab.select.id;
    },
    //
    isFormValid() {
      // Проверяем, что все поля формы не пусты
      for (const field in this.form) {
        if (this.form[field].value === null || this.form[field].value === '') {
          return false; // Если какое-то поле пустое, возвращаем false
        }
      }
      return true; // Если все поля заполнены, возвращаем true
    },
  },
  components: {
    TwaMainLt,
    FormDataDemandsModal,
    TabWeBuy, InputSelectBlock, InputTextBlock, TabListItem, TabList, InfoWarnBlockBtn,
    SelectBtnCount,
    SelectBtnCityList,
  }
}
</script>

<style scoped>

.MainBodyHeading {
  margin-bottom: 24px;
}

.MainBodyHeadingTitle {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #000000;
}

.MainBodyRequestNewWarnBlock {
  margin-bottom: 18px;
}


.MainBodyReqSendBlock {
  padding: 32px 24px;
  background: #fff;
  border-radius: var(--block-brd-rds-main);
}

.MainBodyReqSendBlock .MainBodyReqSendBlockHeading {
  margin-bottom: 36px;
}

.reqSendBlockHeadingDesc {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.04em;
  color: #555555;
}

.reqSendBlockBodyForm {

}

.reqSendBlockBodyForm .reqSendBlockBodyFormWrapper {
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
  margin-bottom: 18px;
}

.reqSendBlockBodyForm .reqSendBlockBodyFormBtn {

}

.reqSendBlockBodyForm .reqSendBlockBodyFormBtn button {
  padding: 10px 16px;
  background: #EEF1FF;
  width: 100%;
  border: none;
  border-radius: var(--btn-brd-rds-main);
}

.reqSendBlockBodyForm .reqSendBlockBodyFormBtn button:hover,
.reqSendBlockBodyForm .reqSendBlockBodyFormBtn button:focus {
  opacity: 0.7;
}

.reqSendBlockBodyForm .reqSendBlockBodyFormBtn button:disabled {
  opacity: 0.5;
}


.reqSendBlockBodyForm .reqSendBlockBodyFormBtn button .formBtnWrap {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
}

.reqSendBlockBodyForm .reqSendBlockBodyFormBtn button .formBtnTitle {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 17px;
  /* identical to box height */
  letter-spacing: 0.02em;
  color: #728AFF;
}


.reqSendBlockBodyForm .reqSendBlockBodyFormBtn button .formBtnIcon {
  color: #728AFF;
}

.reqSendBlockBodyFormSelect {
  border: solid 1px var(--brd-second-color);
  border-radius: var(--btn-brd-rds-main);
  padding: 10px 16px;
  width: 100%;
  min-height: 44px;
}

.reqSendBlockBodyFormSelect.__Main {
  border: solid 1px var(--accent-comp-high-color);
}

.reqSendBlockBodyFormSelectGr {
  display: flex;
  gap: 16px;
  width: 100%;
}

.reqSendBlockBodyFormSelectGr .reqSendBlockBodyFormSelect {
  flex: 1;
}
</style>
