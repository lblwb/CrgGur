<template>
  <TwaMainLt>
    <template #Body>

      <div class="orderCargoMeBody">
        <div class="orderCargoMeBodyTabs">
          <TabList>
            <template #tabItems>
              <TabListItem tabId="1" tabTitle="Активные грузы"
                           :tabSelected="getCurrentTabId === '1'"
                           @callSelectId="selectTab"/>
              <TabListItem tabId="2" tabTitle="Архив"
                           :tabSelected="getCurrentTabId === '2'"
                           @callSelectId="selectTab"
              />
            </template>
          </TabList>
        </div>

        <div class="orderCargoMeBodyTabMain" v-if="getCurrentTabId === '1'">

          <div class="orderCargoMeBodyWrapper">
            <div class="orderCargoMeBodyList" v-if="ordersMeList.length > 0">
              <CargoOrdersBlockItem v-for="(order, index) in ordersMeList" :order="order" :key="index" />
              <!--     -->
            </div>
            <div class="orderCargoMeNotOrders" v-else>
              <div class="orderCargoMeNotOrdersBlock">
                <div class="orderCargoMeNotOrdersBlockTitle">
                  Активным грузов нет
                </div>
              </div>
              <div class="orderCargoMeNotOrdersBtn" @click="$router.push({name:'order-request-new'})"
                   style="padding: 18px 24px; border: solid 1px var(--accent-block-color); border-radius: 16px;">
                <div class="orderCargoMeNotOrdersBtnWrapper"
                     style="display: flex; align-items: center; justify-content: space-between;">
                  <div class="orderCargoMeNotOrdersBtnTitle">
                    Добавить новый груз
                  </div>
                  <div class="orderCargoMeNotOrdersBtnIcon">
                    <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 18.938H21M18 15.938V21.938M9 18.938C9 20.1199 9.23279 21.2902 9.68508 22.3821C10.1374 23.4741 10.8003 24.4662 11.636 25.3019C12.4718 26.1377 13.4639 26.8006 14.5558 27.2529C15.6478 27.7052 16.8181 27.938 18 27.938C19.1819 27.938 20.3522 27.7052 21.4442 27.2529C22.5361 26.8006 23.5282 26.1377 24.364 25.3019C25.1997 24.4662 25.8626 23.4741 26.3149 22.3821C26.7672 21.2902 27 20.1199 27 18.938C27 16.551 26.0518 14.2619 24.364 12.574C22.6761 10.8862 20.3869 9.93799 18 9.93799C15.6131 9.93799 13.3239 10.8862 11.636 12.574C9.94821 14.2619 9 16.551 9 18.938Z"
                        stroke="#324186" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="orderCargoMeBodyTabMain" v-if="getCurrentTabId === '2'">
          <div class="orderCargoMeNotOrders">
            <div class="orderCargoMeNotOrdersBlock">
              <div class="orderCargoMeNotOrdersBlockTitle">
                Архив пуст.
              </div>
            </div>
          </div>
        </div>

      </div>
    </template>
  </TwaMainLt>
</template>
<script>
import TwaMainLt from "~/layout/twaMainLt.vue";
import TabList from "~/components/twa/body/widget/Tab/TabList.vue";
import TabListItem from "~/components/twa/body/widget/Tab/TabListItem.vue";
import CargoOrdersBlockItem from "~/components/app/Main/Orders/Block/CargoOrdersBlockItem.vue";

export default {
  name: "orderCargoMe",
  data() {
    return {
      tab: {
        select: {
          id: '0'
        }
      },
      ordersMeList: [
        {
          "idx": "0123 – 1G",
          "type_buyback": "we_buy",
          "slug": "we_buy_978c41522a5f1173b9ff760115612872c",
          "weight_sizes": {
            "name": "100-110",
            "price": 1.3
          },
          "type_cargo": "",
          "cargo_inf_from": "",
          "cargo_inf_to": "",
          "cargo_inf_wht": 100,
          "cargo_inf_size": 100,
          "total_amount_price": 1200,
          "product_link_url": "http://product.com.ru/teestw32312/rewwre",
          "status": "sending_accepted",
          "created_at": "2023-12-08T02:12:06.596758Z",
          "cargo_deliv_start_at": "2023-12-08T02:12:06.596758Z",
          "updated_at": "2023-12-08T02:12:06.596758Z"
        },
        // {
        //   "idx": "0118 – 1G",
        //   "user_id": 1248134771,
        //   "type_buyback": "we_buy",
        //   "slug": "we_buy_978c41522af1473b9ff760115612872c",
        //   "cat_id": 1,
        //   "pkg_id": 1,
        //   "weight_sizes": {
        //     "name": "150-180",
        //     "price": 7.3
        //   },
        //   "total_amount_price": 3300,
        //   "product_link_url": "http://product.com.ru/teestw32312/rewwre",
        //   "status": "sending_accepted",
        //   "created_at": "2023-12-08T02:12:06.596758Z",
        //   "updated_at": "2023-12-08T02:12:06.596758Z"
        // },
        // {
        //   "idx": "0104 – 1G",
        //   "user_id": 1248134771,
        //   "type_buyback": "we_buy",
        //   "slug": "we_buy_978c43522af1473b9ff760115312872c",
        //   "cat_id": 1,
        //   "pkg_id": 1,
        //   "weight_sizes": {
        //     "name": "120-130",
        //     "price": 3.3
        //   },
        //   "total_amount_price": 1500,
        //   "product_link_url": "http://product.com.ru/teestw32312/rewwre",
        //   "status": "pending_accepted",
        //   "created_at": "2023-12-08T02:12:06.596758Z",
        //   "updated_at": "2023-12-08T02:12:06.596758Z"
        // }
      ]
    }
  },
  components: {CargoOrdersBlockItem, TabListItem, TabList, TwaMainLt},
  methods: {
    selectTab(Id) {
      this.tab.select.id = Id;
    },
    getStatus(status_type) {

      switch (status_type) {
        case "sending_accepted":
          return {
            title: "В пути",
            type: status_type
          }
        case "pending_accepted":
          return {
            title: "Подтверждается",
            type: status_type
          }

        case "no_payment":
          return {
            title: "Не оплачен",
            type: status_type
          }

        case "canceled":
          return {
            title: "Отменен",
            type: status_type
          }
        default:
          break;
      }
    }
  },
  async asyncData({$axios}) {
    try {
      const {result} = await $axios.$post("/api/v1/auth/profile");
      return {ordersMeList: result && result.user_orders != null ? result.user_orders : []}
    } catch (e) {
      console.log("cargo-me:", e);
      // return {ordersMeList: []}
    }
  },
  async mounted() {
    await this.selectTab('1');
  },
  computed: {
    getCurrentTabId() {
      return this.tab.select.id;
    },
  },
}
</script>


<style scoped>


.orderCargoMeBody .orderCargoMeBodyList .listBlockItem {
  border: 1px solid #EFF3FF;
  background: #FCFCFC;
  border-radius: 10px;
  padding: 14px 24px;
  margin-bottom: 14px;
}

.orderCargoMeBody .orderCargoMeBodyList .listBlockItem .listBlockItemHeading {
  margin-bottom: 12px;
}

.orderCargoMeBody .orderCargoMeBodyList .listBlockItem .listBlockItemHeadingWrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.orderCargoMeBody .orderCargoMeBodyList .listBlockItem .listBlockItemHeadingTitle {
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.18px;
  color: #717171;
}

.orderCargoMeBody .orderCargoMeBodyList .listBlockItem .listBlockItemHeadingStatus {

}

.orderCargoMeBody .orderCargoMeBodyList .listBlockItem .listBlockItemHeadingStatus .listBlockItemHeadingStatusBudge {
  border: solid 1px #eee;
  border-radius: 14px;
  padding: 6px 10px;
  /**/
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.12px;
}


.orderCargoMeBody .orderCargoMeBodyList .listBlockItem .listBlockItemHeadingStatus .listBlockItemHeadingStatusBudge.__sending_accepted {
  border-radius: 14px;
  background: var(--accent-second-color);
  color: var(--text-primary-color);
}

.orderCargoMeBody .orderCargoMeBodyList .listBlockItem .listBlockItemHeadingStatus .listBlockItemHeadingStatusBudge.__pending_accepted {

}

.orderCargoMeBody .orderCargoMeBodyList .listBlockItem .listBlockItemHeadingStatus .listBlockItemHeadingStatusBudge.__canceled {
  color: #000;
  border: 1px solid #000;
}

/**/
.orderCargoMeNotOrdersBlock {
  background: #EFF3FF;
  border-radius: 10px;
  padding: 20px 24px;
  margin-bottom: 14px;
}

.orderCargoMeNotOrdersBlock .orderCargoMeNotOrdersBlockTitle {
  color: var(--text-second-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.14px;
}

</style>
