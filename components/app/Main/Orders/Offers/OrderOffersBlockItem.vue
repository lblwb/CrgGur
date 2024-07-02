<template>
  <div class="deliveryBodyOfferInfoBlock">
    <div class="deliveryBodyCargsItem">
      <div class="deliveryBodyCargsItemBlock">
        <div class="deliveryBodyCargsItemHeading">
          <div class="cargsItemHeadingTitle">
            Предложения
          </div>
        </div>

        <div class="deliveryBodyCargsItemBlockList" v-if="offersItems && offersItems.length > 0">
          <div class="blockListItem" v-for="offer in offersItems" :key="offer.id"
               style="margin-bottom: 10px; padding: 16px; background: var(--primary-bg-color); border-radius: var(--main-border-radius); color: var(--navbar-fcs-text-color)">

            <div class="blockListItemWrapper" style="display: flex; justify-content: space-between; align-items: center;">
              <div class="blockListItemPre">
                <div class="blockListItemPreWrapper" style="display:flex; gap: 16px; align-items: center">
                  <div class="blockListItemUser" style="display: flex; align-items: center; gap: 10px;">
                    <div class="blockListItemUserIcon" style="display: flex;">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M5 17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19C7.53043 19 8.03914 18.7893 8.41421 18.4142C8.78929 18.0391 9 17.5304 9 17M5 17C5 16.4696 5.21071 15.9609 5.58579 15.5858C5.96086 15.2107 6.46957 15 7 15C7.53043 15 8.03914 15.2107 8.41421 15.5858C8.78929 15.9609 9 16.4696 9 17M5 17H3V6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5H13V17M9 17H15M15 17C15 17.5304 15.2107 18.0391 15.5858 18.4142C15.9609 18.7893 16.4696 19 17 19C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17M15 17C15 16.4696 15.2107 15.9609 15.5858 15.5858C15.9609 15.2107 16.4696 15 17 15C17.5304 15 18.0391 15.2107 18.4142 15.5858C18.7893 15.9609 19 16.4696 19 17M19 17H21V11M21 11H13M21 11L18 6H13"
                          stroke="#FF9863" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div class="blockListItemUserHeading">
                      <div class="blockListItemUserHeadingTitle"
                           style="font-size: 14px; font-weight: 600; color: var(--navbar-fcs-text-color)">
                        {{ offer.courier ? offer.courier.username : "--" }}
                      </div>
                    </div>
                  </div>

                  <div class="blockListItemAmount" style="font-size: 14px; font-weight: 600;">
                    {{ offer.offer_amount ? Number(offer.offer_amount).toFixed(0) : '--' }} Руб.
                  </div>
                </div>
              </div>

              <div class="blockListItemAction">
                <div class="blockListItemActionWrapper" style="display:flex; gap: 16px; align-items: center">
                  <div class="blockListItemDate" style="">
                    <div class="blockListItemDateWrapper" style="text-align: right;">
                      <div class="blockListItemDateTitle" style="font-size: 11px; font-weight: 500;">
                        Создан:
                      </div>
                      <div class="blockListItemDateValue" style="font-size: 12px; font-weight: 600;">
                        {{ getFormatDate(offer.offer_date) }}
                      </div>
                    </div>
                  </div>

                  <div class="blockListItemActionBtnWrapper" style="display: flex; gap: 6px;">
                    <div class="blockListItemBtn">
                      <button style="padding: 10px 14px; background: transparent; color: var(--brand-primary-color); border-radius: var(--main-border-radius); border: solid 1px var(--brand-primary-color); font-size: 12px; font-weight: 500;">
                        Отмена
                      </button>
                    </div>
                    <div class="blockListItemBtn">
                      <button style="padding: 10px 14px; background: var(--brand-primary-color); color: var(--brand-fcs-color); border-radius: var(--main-border-radius); border: none; font-size: 12px; font-weight: 500;">
                        Принять
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="deliveryBodyCargsItemBlockNotAvail" style="font-size: 16px;" v-else>
          <div class="blockListItem" style="font-size: 16px; color: var(--btn-text-color);">Откликов еще нет!</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['offersItems'],

  methods: {
    getFormatDate(date) {
      try {
        if (date !== undefined && date !== null) {
          const currentDate = new Date(date);
          return currentDate.toLocaleDateString('en-GB').replace(/\//g, '-');
        } else {
          throw `"not avial date": ${date}`;
        }
      } catch (e) {
        console.error(e);
        return "--";
      }
    }
  }
};
</script>

<style scoped>

.deliveryBodyCargsItem .deliveryBodyCargsItemBlock {
  background: #FFFFFF;
  padding: 24px;
  width: 100%;
  height: auto;
  border-radius: var(--main-border-radius)
}

.CargoWidgetBlock .CargoWidgetBlockWrapper {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 8px;
}

.cargsItemHeadingTitle {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: #000000;
  margin-bottom: 24px;
}
</style>
