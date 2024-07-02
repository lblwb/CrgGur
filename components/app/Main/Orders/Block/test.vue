<template>
<!--  v-for="orderItem in ordersMeList" -->
  <div class="listBlockItem"  @click="$router.push({
                name:'order-cargo-slug-view',
                params:{
                  slug: orderItem.slug
                }
              })">
    <div class="listBlockItemHeading">
      <div class="listBlockItemHeadingWrapper">
        <div class="listBlockItemHeadingTitle">
          №: {{ orderItem.idx }}
        </div>
        <div class="listBlockItemHeadingStatus">
          <div class="listBlockItemHeadingStatusBudge" :class="'__'+ getStatus(orderItem.status).type">
            {{ getStatus(orderItem.status).title }}
          </div>
        </div>
      </div>
    </div>

    <div class="listBlockItemInfo">
      <div class="listBlockItemInfoWrapper" style="display: flex;">
        <div class="listBlockItemInfoRoute" style="flex: 1; margin-right: 14px;">
          <div class="listBlockItemInfoRouteHeading" style="margin-bottom: 10px">
            <div class="infoRouteHeadingTitle">
              Отправление
            </div>
          </div>
          <div class="listBlockItemInfoRouteMap">
            <div class="itemInfoRouteMapFrom" style="margin-bottom: 18px">
              <div class="routeMapFromWrapper" style="display: flex; align-items: center;">
                <div class="routeMapFromIcon"
                     style="border-radius: 10px;background: #F8F9FF; margin-right: 10px; padding: 4px 10px; display: flex; align-items: center; justify-content: center; width: 36px; height: 32px">
                  <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11 9L15 5M15 5L11 1M15 5H4C3.20435 5 2.44129 5.31607 1.87868 5.87868C1.31607 6.44129 1 7.20435 1 8V14"
                      stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="routeMapFromTitle" style="font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.12px; width: 100%">
                  Китай, г.Гаунджоу
                </div>
              </div>
            </div>
            <div class="itemInfoRouteMapFrom">
              <div class="routeMapFromWrapper" style="display: flex; align-items: center">
                <div class="routeMapFromIcon"
                     style="border-radius: 10px;background: #081242; margin-right: 10px; padding: 4px 10px;display: flex; align-items: center; justify-content: center; width: 36px; height: 24px">
                  <svg width="20" height="8" viewBox="0 0 20 8" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 4H19M19 4L16 1M19 4L16 7M5 4C5 4.53043 4.78929 5.03914 4.41421 5.41421C4.03914 5.78929 3.53043 6 3 6C2.46957 6 1.96086 5.78929 1.58579 5.41421C1.21071 5.03914 1 4.53043 1 4C1 3.46957 1.21071 2.96086 1.58579 2.58579C1.96086 2.21071 2.46957 2 3 2C3.53043 2 4.03914 2.21071 4.41421 2.58579C4.78929 2.96086 5 3.46957 5 4Z"
                      stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="routeMapFromTitle" style="font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.12px;width: 100%">
                  Россия, г. Москва
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="listBlockItemInfoCargo" style="flex: 0">
          <div class="listBlockItemInfoCargoHeading" style="margin-bottom: 10px">
            <div class="infoCargoHeadingTitle">
              Информация
            </div>
          </div>
          <div class="infoCargoBody" style="font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: -0.12px;">
            <div class="listBlockItemInfoCargoSize" style="margin-bottom: 10px">
              {{ orderItem.weight_sizes !== null ? orderItem.weight_sizes.name + 'KG' : "" }}
            </div>
            <div class="listBlockItemInfoCargoType" style="margin-bottom: 10px">
              {{ orderItem.cat_id ? orderItem.cat_id : "" }}
            </div>
            <div class="listBlockItemInfoCargoPkgType" style="margin-bottom: 10px">
              {{ orderItem.pkg_id ? orderItem.pkg_id : "" }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--              {{ orderItem }}-->
  </div>

</template>
<script>
export default {
  data(){
    return {
      ordersMeList: []
    }
  }
}
</script>

