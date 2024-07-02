<template>
  <div class="NavbarConnectButton">
    <div class="NavbarConnectButtonWrapper" style="display:flex;">
      <div class="NavbarConnectButtonIconBox">
        <div class="ButtonIconBoxWrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15" stroke="white" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div class="NavbarConnectButtonContent">
        <div class="ConnectButtonContentWrapper">
          <div class="ConnectButtonContentTitle">
            <!--            @uni_shop_ch-->
            {{ "@" + $store.state.shop.contact.tg_channel }}
          </div>
          <div class="ConnectButtonContentDesc">
            Наш телеграмм канал
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbarConnectBtn"
}
</script>

<style scoped>

.NavbarConnectButton {
  border-radius: 12px;
  background: var(--bg-second-color);
  padding: 4px 6px;
  display: flex;
  align-items: stretch;
  cursor: pointer;
}

.NavbarConnectButton:focus,
.NavbarConnectButton:hover {
  filter: opacity(0.7);
}

.NavbarConnectButtonWrapper {
  display: flex;
  align-items: center;
}


.NavbarConnectButtonIconBox {
  border-radius: 10px;
  background: var(--bg-connect-color);
  padding: 4px;
  margin-right: 1vh
}

.NavbarConnectButtonIconBox .ButtonIconBoxWrapper {
  display: flex;
  align-items: center;
}

.NavbarConnectButtonIconBox svg {
  max-width: 24px;
  max-height: 24px;
}

.NavbarConnectButtonContent {
  display: flex;
  align-items: center;
}

.NavbarConnectButtonContent .ConnectButtonContentTitle {
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
}

.NavbarConnectButtonContent .ConnectButtonContentDesc {
  color: var(--text-primary-color);
  font-size: 9px;
  font-weight: 400;
  line-height: normal;
  opacity: 0.6;
}
</style>
