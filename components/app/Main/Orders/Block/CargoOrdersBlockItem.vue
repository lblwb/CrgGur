<script>
import {mapActions, mapState} from 'vuex';

export default {
  props: {
    activeBtn: {type: Boolean, default: false},
    order: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      block: {
        btn: {
          active: false
        }
      }
    };
  },
  computed: {
    // ...mapState('auth', ['checkAuthUser']),
  },
  methods: {
    // ...mapActions('auth', ['setStatusShowModalSignIn']),
    getFormatDate(date) {
      try {
        if (date !== undefined && date !== null) {
          const currentDate = new Date(date);
          return currentDate.toLocaleDateString('en-GB').replace(/\//g, '-');
        } else {
          throw new Error(`"not avial date": ${date}`);
        }
      } catch (e) {
        console.error(e);
        return "--";
      }
    },
    createOrViewOffer(order) {
      // if (this.checkAuthUser) {
      this.$router.push({
        name: 'delivery-orders-info-id',
        params: {id: order.idx}
      });
      // } else {
      //   this.setStatusShowModalSignIn(true);
      // }
    },
    onMouseEnterToBlock(status) {
      setTimeout(() => {
        this.block.btn.active = status;
      }, 200);
    }
  },
  mounted() {
    this.block.btn.active = this.activeBtn;
  }
};
</script>
<template>
  <div class="deliveryBodyCargsItem" v-if="order !== undefined &&  order !== null">
    <div class="deliveryBodyCargsItemBlock"
         style="" @mouseenter="onMouseEnterToBlock(true)" @mouseleave="onMouseEnterToBlock(false)">
      <!--              {{ order.idx }}-->

      <div class="deliveryBodyCargsItemInfo">
        <div class="deliveryBodyCargsItemInfoWrapper" style="display: flex; flex-flow: row wrap; gap: 8px;">
          <div class="cargsItemInfoDate CargoWidgetBlock" style=""
               v-if="order.cargo_deliv_start_at !== null">
            <div class="cargsItemInfoDateWrapper CargoWidgetBlockWrapper">
              <div class="CargoWidgetBlockIcon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C10.8181 3 9.64778 3.23279 8.55585 3.68508C7.46392 4.13738 6.47177 4.80031 5.63604 5.63604C4.80031 6.47177 4.13738 7.46392 3.68508 8.55585C3.23279 9.64778 3 10.8181 3 12Z"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 17L11 13L7 12L16 8L12 17Z" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>

            <div class="CargoWidgetBlockValue">
              Дата: {{ order.cargo_deliv_start_at ? getFormatDate(order.cargo_deliv_start_at) : null }}
            </div>
            </div>
          </div>
          <div class="cargsItemInfoWeight CargoWidgetBlock" style=""
               v-if="order.cargo_inf_wht !== null">
            <div class="cargsItemInfoWeightWrapper CargoWidgetBlockWrapper">
              <div class="CargoWidgetBlockIcon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.99988 6C8.99988 6.79565 9.31595 7.55871 9.87856 8.12132C10.4412 8.68393 11.2042 9 11.9999 9C12.7955 9 13.5586 8.68393 14.1212 8.12132C14.6838 7.55871 14.9999 6.79565 14.9999 6C14.9999 5.20435 14.6838 4.44129 14.1212 3.87868C13.5586 3.31607 12.7955 3 11.9999 3C11.2042 3 10.4412 3.31607 9.87856 3.87868C9.31595 4.44129 8.99988 5.20435 8.99988 6Z"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path
                    d="M6.8349 9H17.1649C17.3991 8.99996 17.6259 9.08213 17.8057 9.23216C17.9855 9.3822 18.107 9.59059 18.1489 9.821L19.7859 18.821C19.8121 18.9651 19.8064 19.1133 19.769 19.2549C19.7317 19.3966 19.6637 19.5283 19.5698 19.6408C19.4759 19.7532 19.3585 19.8437 19.2258 19.9058C19.0931 19.9679 18.9484 20 18.8019 20H5.1979C5.05141 20 4.9067 19.9679 4.77401 19.9058C4.64131 19.8437 4.52388 19.7532 4.43001 19.6408C4.33615 19.5283 4.26813 19.3966 4.23079 19.2549C4.19345 19.1133 4.18768 18.9651 4.2139 18.821L5.8509 9.821C5.89283 9.59059 6.01429 9.3822 6.19411 9.23216C6.37393 9.08213 6.60071 8.99996 6.8349 9Z"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="CargoWidgetBlockValue">
                Вес груза: {{ order.cargo_inf_wht ? order.cargo_inf_wht : 0 }}
              </div>
            </div>
          </div>
          <div class="cargsItemInfoSize CargoWidgetBlock" v-if="order.cargo_inf_size !== null">
            <div class="cargsItemInfoSizeWrapper CargoWidgetBlockWrapper">
              <div class="CargoWidgetBlockIcon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 8V10M6 8V11M12 8V11M18 8V11M15 8V10M19.875 8C20.496 8 21 8.512 21 9.143V14.857C21 15.488 20.496 16 19.875 16H4C3.73478 16 3.48043 15.8946 3.29289 15.7071C3.10536 15.5196 3 15.2652 3 15V9.143C3 8.512 3.504 8 4.125 8H19.875Z"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="CargoWidgetBlockValue">
                Объем груза: {{ order.cargo_inf_size ? order.cargo_inf_size : 0 }}
              </div>
            </div>
          </div>
        </div>


      </div>
      <!--              -->
      <div class="deliveryBodyCargsItemBody">
        <div class="cargsItemBodyRoute">
          <div class="cargsItemBodyRouteWrapper">
            <div class="cargsItemBodyRouteTitle">
              Тип груза:
            </div>
            <div class="cargsItemBodyRouteValue">
              <template v-if="order.type_cargo">
                {{ order.type_cargo }}
              </template>
              <template v-else>
                Не определенно
              </template>
            </div>
          </div>
        </div>
        <div class="cragsItemBodyType" style="">
          <div class="cragsItemBodyTypeWrapper">
            <div class="cragsItemBodyTypeTitle">
              Маршрут груза:
            </div>
            <div class="cragsItemBodyTypeValue">

              <template v-if="order.cargo_inf_from && order.cargo_inf_to">
                {{ order.cargo_inf_from }} — {{ order.cargo_inf_to }}
              </template>
              <template v-else>
                Не определенно
              </template>

            </div>
          </div>

        </div>

      </div>
      <div class="deliveryBodyCargsItemDesc">
        <div class="cargsItemDescHeading">
          <div class="cargsItemDescHeadingTitle">
            Требуется:
          </div>
          <div class="cargsItemDescHeadingText">
            <template v-if="order.description">
              {{ order.description }}
            </template>
            <template v-else>
              Описание отсутствует
            </template>
          </div>
        </div>
      </div>
      <!--      <div class="deliveryBodyCargsItemAction">-->
      <!--        <div class="deliveryBodyCargsItemActionBtn">-->
      <!--          <button @click="createOrViewOffer(order)" v-if="block.btn.active">-->
      <!--                    <span class="itemActionBtnWrapper" style="">-->
      <!--                           <span class="itemActionBtnIcon">-->
      <!--                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
      <!--                        <path-->
      <!--                          d="M3.5 12C3.5 13.1819 3.73279 14.3522 4.18508 15.4442C4.63738 16.5361 5.30031 17.5282 6.13604 18.364C6.97177 19.1997 7.96392 19.8626 9.05585 20.3149C10.1478 20.7672 11.3181 21 12.5 21C13.6819 21 14.8522 20.7672 15.9442 20.3149C17.0361 19.8626 18.0282 19.1997 18.864 18.364C19.6997 17.5282 20.3626 16.5361 20.8149 15.4442C21.2672 14.3522 21.5 13.1819 21.5 12C21.5 10.8181 21.2672 9.64778 20.8149 8.55585C20.3626 7.46392 19.6997 6.47177 18.864 5.63604C18.0282 4.80031 17.0361 4.13738 15.9442 3.68508C14.8522 3.23279 13.6819 3 12.5 3C11.3181 3 10.1478 3.23279 9.05585 3.68508C7.96392 4.13738 6.97177 4.80031 6.13604 5.63604C5.30031 6.47177 4.63738 7.46392 4.18508 8.55585C3.73279 9.64778 3.5 10.8181 3.5 12Z"-->
      <!--                          stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>-->
      <!--                        <path d="M12.5 17L11.5 13L7.5 12L16.5 8L12.5 17Z" stroke="white" stroke-width="2"-->
      <!--                              stroke-linecap="round"-->
      <!--                              stroke-linejoin="round"/>-->
      <!--                      </svg>-->

      <!--                    </span>-->
      <!--                    <span class="itemActionBtnTitle">Отправить ком. предложение</span>-->

      <!--                    </span>-->

      <!--          </button>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
  </div>
</template>
<style scoped>

.CargoWidgetBlock {
  border: solid 1px #F8F8F8;
  padding: 8px;
  display: flex;
  flex: 1;
  flex-basis: 32vw;
  border-radius: 10px;
  gap: 6px;
  /**/
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.02em;
  color: #000000;
}

.CargoWidgetBlock .CargoWidgetBlockWrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.deliveryBodyCargsItem {
  display: flex;
  flex: unset;
  flex-basis: 30vw;
  width: 100%;
  overflow: hidden;
}

.deliveryBodyCargsItem .deliveryBodyCargsItemBlock {
  background: #FFFFFF;
  padding: 24px;
  width: 100%;
  height: auto;
  min-height: 20.5vw;
}


.deliveryBodyCargsItem .deliveryBodyCargsItemBlock .deliveryBodyCargsItemInfo {
  margin-bottom: 24px
}

.deliveryBodyCargsItem .deliveryBodyCargsItemBlock .deliveryBodyCargsItemBody {
  margin-bottom: 18px;
}

.deliveryBodyCargsItem .deliveryBodyCargsItemBlock .deliveryBodyCargsItemBody .cargsItemBodyRoute {
}

.deliveryBodyCargsItem .deliveryBodyCargsItemBlock .deliveryBodyCargsItemBody .cargsItemBodyRoute .cargsItemBodyRouteWrapper {
  color: #000;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 0 12px;
}

.deliveryBodyCargsItem .deliveryBodyCargsItemBlock .deliveryBodyCargsItemBody .cargsItemBodyRoute .cargsItemBodyRouteTitle {
  font-size: 16px;
  font-weight: 500;
}

.deliveryBodyCargsItem .deliveryBodyCargsItemBlock .deliveryBodyCargsItemBody .cargsItemBodyRoute .cargsItemBodyRouteValue {
  font-size: 14px;
}


.deliveryBodyCargsItem .deliveryBodyCargsItemBlock .deliveryBodyCargsItemBody .cragsItemBodyType {
  color: #000;
  margin-bottom: 14px;
}


.deliveryBodyCargsItem .deliveryBodyCargsItemBlock .deliveryBodyCargsItemBody .cragsItemBodyType .cragsItemBodyTypeTitle {
  font-size: 16px;
  font-weight: 500;
}

.deliveryBodyCargsItem .deliveryBodyCargsItemBlock .deliveryBodyCargsItemBody .cragsItemBodyType .cragsItemBodyTypeWrapper {
  display: flex;
  align-items: center;
  gap: 0 12px;
}

.deliveryBodyCargsItem .deliveryBodyCargsItemBlock .deliveryBodyCargsItemDesc {
  margin-bottom: 18px;
}

.deliveryBodyCargsItem .deliveryBodyCargsItemBlock .deliveryBodyCargsItemDesc .cargsItemDescHeading {
  color: #000;
}


.deliveryBodyCargsItem .deliveryBodyCargsItemBlock .deliveryBodyCargsItemDesc .cargsItemDescHeading .cargsItemDescHeadingTitle {
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 500;
}

.deliveryBodyCargsItem .deliveryBodyCargsItemBlock .deliveryBodyCargsItemDesc .cargsItemDescHeading .cargsItemDescHeadingText {
  font-size: 13px;
  font-weight: 500;
  max-height: 4vw;
  overflow: auto;
}

.deliveryBodyCargsItem .deliveryBodyCargsItemBlock .deliveryBodyCargsItemAction {

}

.deliveryBodyCargsItem .deliveryBodyCargsItemBlock .deliveryBodyCargsItemAction .deliveryBodyCargsItemActionBtn {

}

.deliveryBodyCargsItem .deliveryBodyCargsItemBlock .deliveryBodyCargsItemAction .deliveryBodyCargsItemActionBtn button {
  padding: 8px 10px;
  font-size: 14px;
  background: var(--brand-primary-color);
  color: var(--btn-primary-text-color);
  border: solid 1px transparent;
  border-radius: var(--main-border-radius);
  cursor: pointer;
  width: 100%;
}

.deliveryBodyCargsItem .deliveryBodyCargsItemBlock .deliveryBodyCargsItemAction .deliveryBodyCargsItemActionBtn button:focus,
.deliveryBodyCargsItem .deliveryBodyCargsItemBlock .deliveryBodyCargsItemAction .deliveryBodyCargsItemActionBtn button:hover {
  opacity: 0.7;
}

.deliveryBodyCargsItem .deliveryBodyCargsItemBlock .deliveryBodyCargsItemAction .deliveryBodyCargsItemActionBtn button {
}

.deliveryBodyCargsItem .deliveryBodyCargsItemBlock .deliveryBodyCargsItemAction .deliveryBodyCargsItemActionBtn button .itemActionBtnWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.deliveryBodyCargsItem .deliveryBodyCargsItemBlock .deliveryBodyCargsItemAction .deliveryBodyCargsItemActionBtn button .itemActionBtnIcon {
  display: flex;
}

.deliveryBodyCargsItem .deliveryBodyCargsItemBlock .deliveryBodyCargsItemAction .deliveryBodyCargsItemActionBtn button .itemActionBtnTitle {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
}

.CargoWidgetBlockIcon {
  color: #AAB8FE;
}

.CargoWidgetBlockValue {
  min-width: 24vw;
  font-size: 12px;
  text-align: right;
}
</style>
