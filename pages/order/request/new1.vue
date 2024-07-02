<template>
  <TwaMainLt>
    <template #Body>
      <div class="MainBodyRequestNewWrapper">
        <div class="MainBodyRequestNewWarnBlock">
          <InfoWarnBlockBtn
            titleWarn="Ознакомиться с требованиями"
            descWarn="Описание тарифов и требований"
            @callClick="showModalTariffsInfo"
          />
        </div>
        <!-- Tabs -->
        <div class="MainBodyRequestNewTabs">
          <TabList>
            <template #tabItems>
              <TabListItem tabId="1" tabTitle="Выкупаем мы"
                           :tabSelected="getCurrentTabId === '1'"
                           @callSelectId="selectTab"/>
              <TabListItem tabId="2" tabTitle="Само-выкуп"
                           :tabSelected="getCurrentTabId === '2'"
                           @callSelectId="selectTab"
              />
            </template>
          </TabList>
        </div>
        <!--        {{getCurrentTabId}}-->
        <!-- Form -->
        <template v-if="getCurrentTabId === '1'">
          <TabWeBuy :form="form"/>
        </template>
        <div class="MainBodyRequestNewForm" v-if="getCurrentTabId === '2'">
          Tab2
        </div>

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

export default {
  name: "OrderRequestNew",
  data() {
    return {
      form: {
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
    selectTab(Id) {
      this.tab.select.id = Id;
    },
    showModalTariffsInfo() {
      // alert("Требования!");
      this.modals.demands.status = true;
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

  },
  components: {
    FormDataDemandsModal,
    TabWeBuy, InputSelectBlock, InputTextBlock, TabListItem, TabList, InfoWarnBlockBtn, TwaMainLt
  }
}
</script>

<style scoped>
.MainBodyRequestNewWarnBlock {
  margin-bottom: 18px;
}
</style>
