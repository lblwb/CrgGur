<template>
  <div class="mobileBottomNavbar">
    <div class="mobileBottomNavbarWrapper">
      <!--  -->
      <div class="navbarPageBtn" :class="{_Active:this.$route.name === 'index'}">
        <button @click="showRoutePage({ name: 'index' })">
          <div class="navbarPageBtnWrapper">
            <div class="navbarPageBtnIcon">
              <!--              <img src="~/assets/images/page_cards/sidebar/games-slots.svg" alt=""/>-->
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 15C13.79 16.333 10.208 16.333 8 15M19 8.71001L13.667 4.56201C13.199 4.19792 12.623 4.00024 12.03 4.00024C11.4371 4.00024 10.861 4.19792 10.393 4.56201L5.05903 8.71001C4.73847 8.9593 4.47912 9.27854 4.30078 9.64336C4.12245 10.0082 4.02984 10.4089 4.03003 10.815V18.015C4.03003 18.5454 4.24074 19.0542 4.61582 19.4292C4.99089 19.8043 5.4996 20.015 6.03003 20.015H18.03C18.5605 20.015 19.0692 19.8043 19.4442 19.4292C19.8193 19.0542 20.03 18.5454 20.03 18.015V10.815C20.03 9.99201 19.65 9.21501 19 8.71001Z"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="navbarPageBtnHeading">
              <div class="navbarPageBtnHeadingTitle">Главная</div>
            </div>
          </div>
        </button>
      </div>
      <div class="navbarPageBtn"
           :class="{_Active:this.$route.name === 'order-request-new' || this.$route.name === 'order-request-slug-checkout' || this.$route.name === 'order-request-slug-pay' || this.$route.name === 'order-request-slug'}">
        <button @click="showRoutePage({ name: 'order-request-new' })">
          <div class="navbarPageBtnWrapper">
            <div class="navbarPageBtnIcon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.75 17.438C5.75 17.9684 5.96071 18.4771 6.33579 18.8522C6.71086 19.2273 7.21957 19.438 7.75 19.438C8.28043 19.438 8.78914 19.2273 9.16421 18.8522C9.53929 18.4771 9.75 17.9684 9.75 17.438M5.75 17.438C5.75 16.9076 5.96071 16.3988 6.33579 16.0238C6.71086 15.6487 7.21957 15.438 7.75 15.438C8.28043 15.438 8.78914 15.6487 9.16421 16.0238C9.53929 16.3988 9.75 16.9076 9.75 17.438M5.75 17.438H3.75V6.43799C3.75 6.17277 3.85536 5.91842 4.04289 5.73088C4.23043 5.54335 4.48478 5.43799 4.75 5.43799H13.75V17.438M9.75 17.438H15.75M15.75 17.438C15.75 17.9684 15.9607 18.4771 16.3358 18.8522C16.7109 19.2273 17.2196 19.438 17.75 19.438C18.2804 19.438 18.7891 19.2273 19.1642 18.8522C19.5393 18.4771 19.75 17.9684 19.75 17.438M15.75 17.438C15.75 16.9076 15.9607 16.3988 16.3358 16.0238C16.7109 15.6487 17.2196 15.438 17.75 15.438C18.2804 15.438 18.7891 15.6487 19.1642 16.0238C19.5393 16.3988 19.75 16.9076 19.75 17.438M19.75 17.438H21.75V11.438M21.75 11.438H13.75M21.75 11.438L18.75 6.43799H13.75"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="navbarPageBtnHeading">
              <div class="navbarPageBtnHeadingTitle">Доставка</div>
            </div>
          </div>
        </button>
      </div>
<!--      <div class="navbarPageBtn"-->
<!--           :class="{_Active:this.$route.name === 'map'}">-->
<!--        <button @click="showRoutePage({ name: 'map' })">-->
<!--          <div class="navbarPageBtnWrapper">-->
<!--            <div class="navbarPageBtnIcon">-->
<!--              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                <path-->
<!--                  d="M9.5 4.43799L3.5 7.43799V20.438L9.5 17.438M9.5 4.43799L15.5 7.43799M9.5 4.43799V17.438M15.5 7.43799L21.5 4.43799V17.438L15.5 20.438M15.5 7.43799V20.438M15.5 20.438L9.5 17.438"-->
<!--                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--              </svg>-->

<!--            </div>-->
<!--            <div class="navbarPageBtnHeading">-->
<!--              <div class="navbarPageBtnHeadingTitle">Пункты</div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </button>-->
<!--      </div>-->
      <div class="navbarPageBtn"
           :class="{_Active:this.$route.name === 'order-cargo-me' || this.$route.name === 'order-cargo-slug-view'}">
        <button @click="showRoutePage({ name: 'order-cargo-me' })">
          <div class="navbarPageBtnWrapper">
            <div class="navbarPageBtnIcon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.75 7.93799L12.75 3.43799L4.75 7.93799M20.75 7.93799V16.938L12.75 21.438M20.75 7.93799L12.75 12.438M12.75 21.438L4.75 16.938V7.93799M12.75 21.438V12.438M4.75 7.93799L12.75 12.438M8.95001 10.238L16.55 5.638"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="navbarPageBtnHeading">
              <div class="navbarPageBtnHeadingTitle">Грузы</div>
            </div>
          </div>
        </button>
      </div>
      <!--  -->


      <div class="navbarPageBtn" :class="{_Active:this.$route.name === 'app-more'}">
        <button @click="showRoutePage({name: 'app-more'})">
          <div class="navbarPageBtnWrapper">
            <div class="navbarPageBtnIcon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 12.438C4 12.7032 4.10536 12.9576 4.29289 13.1451C4.48043 13.3326 4.73478 13.438 5 13.438C5.26522 13.438 5.51957 13.3326 5.70711 13.1451C5.89464 12.9576 6 12.7032 6 12.438C6 12.1728 5.89464 11.9184 5.70711 11.7309C5.51957 11.5433 5.26522 11.438 5 11.438C4.73478 11.438 4.48043 11.5433 4.29289 11.7309C4.10536 11.9184 4 12.1728 4 12.438Z"
                  stroke="#7A90F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path
                  d="M11 12.438C11 12.7032 11.1054 12.9576 11.2929 13.1451C11.4804 13.3326 11.7348 13.438 12 13.438C12.2652 13.438 12.5196 13.3326 12.7071 13.1451C12.8946 12.9576 13 12.7032 13 12.438C13 12.1728 12.8946 11.9184 12.7071 11.7309C12.5196 11.5433 12.2652 11.438 12 11.438C11.7348 11.438 11.4804 11.5433 11.2929 11.7309C11.1054 11.9184 11 12.1728 11 12.438Z"
                  stroke="#7A90F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path
                  d="M18 12.438C18 12.7032 18.1054 12.9576 18.2929 13.1451C18.4804 13.3326 18.7348 13.438 19 13.438C19.2652 13.438 19.5196 13.3326 19.7071 13.1451C19.8946 12.9576 20 12.7032 20 12.438C20 12.1728 19.8946 11.9184 19.7071 11.7309C19.5196 11.5433 19.2652 11.438 19 11.438C18.7348 11.438 18.4804 11.5433 18.2929 11.7309C18.1054 11.9184 18 12.1728 18 12.438Z"
                  stroke="#7A90F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <!--            <div class="navbarPageBtnHeading">-->
            <!--              <div class="navbarPageBtnHeadingTitle"></div>-->
            <!--            </div>-->
          </div>
        </button>
      </div>


      <!--      <div class="navbarPageBtn" :class="{_Active:this.$route.name === 'user-account'}">-->
      <!--        <button @click="showUserProfileBtn">-->
      <!--          <div class="navbarPageBtnWrapper">-->
      <!--            <div class="navbarPageBtnIcon navbarPageBtnIconFill">-->
      <!--              &lt;!&ndash;              <img src="~/assets/images/page_cards/sidebar/profile.svg" alt=""/>&ndash;&gt;-->
      <!--              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
      <!--                <path fill-rule="evenodd" clip-rule="evenodd"-->
      <!--                      d="M4.96447 15.4645C5.90215 14.5268 7.17392 14 8.5 14H16.5C17.8261 14 19.0979 14.5268 20.0355 15.4645C20.9732 16.4021 21.5 17.6739 21.5 19V21C21.5 21.5523 21.0523 22 20.5 22C19.9477 22 19.5 21.5523 19.5 21V19C19.5 18.2044 19.1839 17.4413 18.6213 16.8787C18.0587 16.3161 17.2956 16 16.5 16H8.5C7.70435 16 6.94129 16.3161 6.37868 16.8787C5.81607 17.4413 5.5 18.2044 5.5 19V21C5.5 21.5523 5.05228 22 4.5 22C3.94772 22 3.5 21.5523 3.5 21V19C3.5 17.6739 4.02678 16.4021 4.96447 15.4645Z"-->
      <!--                      fill="#676D75"/>-->
      <!--                <path fill-rule="evenodd" clip-rule="evenodd"-->
      <!--                      d="M12.5 4C10.8431 4 9.5 5.34315 9.5 7C9.5 8.65685 10.8431 10 12.5 10C14.1569 10 15.5 8.65685 15.5 7C15.5 5.34315 14.1569 4 12.5 4ZM7.5 7C7.5 4.23858 9.73858 2 12.5 2C15.2614 2 17.5 4.23858 17.5 7C17.5 9.76142 15.2614 12 12.5 12C9.73858 12 7.5 9.76142 7.5 7Z"-->
      <!--                      fill="#676D75"/>-->
      <!--              </svg>-->
      <!--            </div>-->
      <!--            <div class="navbarPageBtnHeading">-->
      <!--              <div class="navbarPageBtnHeadingTitle">Аккаунт</div>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </button>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script>

export default {
  name: "footerNavMobileFixed",
  //   props: {
  //     modal_show: false
  //   },
  data() {
    return {
      modal: {
        show: true,
      },
    };
  },
  methods: {

    toggleMobileMenu() {
      // this.$store.dispatch("primary/showMobilesideMenu", {
      //   status: false,
      // });
      // return this.mainStore.mobileToggleSidebar();
    },
    showSingInModal() {
      this.toggleMobileMenu();

      this.$store.dispatch(
        "cabinet/auth/modal/singIn/modalShowSingInSetStatus",
        {
          status: true,
        }
      );
    },

    showUserCartBtn() {
      this.showRoutePage({name: 'shop-user-cart'});
    },
    showUserProfileBtn() {
      this.$router.push({
        name: "user-account",
      });
      //   this.$toast.show("Корзина пуста!");
      // if (this.$auth.loggedIn) {
      //   this.$router.push({
      //     name: "user-account",
      //   });
      // } else {
      //   this.$toast.show('Войдите в аккаунт!');
      //   this.showSingInModal();
      // }
    },
    showSupportBtn() {
      this.$toast.show("Раздел в разработке!");
    },
    showRoutePage(router_option = {}) {
      // let type_sport = this.panel_sports_data[0].uuid;

      this.$router.push(router_option);
      // this.toggleMobileMenu();
    },
  },
  computed: {},
  async mounted() {
    // await this.fetchSports();
    // this.$store.dispatch("sports/types/fetchSports");
    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start();
    //   setTimeout(() => this.$nuxt.$loading.finish(), 500);
    // });
  },
  // components: { PanelSportsTours },
};
</script>

<style>
.mobileBottomNavbar {
  display: none;
  position: fixed;
  bottom: 32px;
  left: 0;
  right: 0;
  box-sizing: border-box;
  /*background: var(--bg-primary-color);*/
  background: #fff;
  border: solid 1px #E4E9FF;
  max-height: 72px;
  min-height: 72px;
  height: 100%;
  width: 100%;
  z-index: 40;
  max-width: 93%;
  margin: 0 auto;
  border-radius: 16px;
}

@media screen and (max-width: 1140px) {
  .mobileBottomNavbar {
    display: block;
  }
}

.mobileBottomNavbar .mobileBottomNavbarWrapper {
  padding: 14px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  /* height: unset; */
  box-sizing: border-box;
  height: 100%;
  gap: 0 6px;
}

.mobileBottomNavbar .navbarPageBtn {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
}

.mobileBottomNavbar .navbarPageBtn._Active {
  border: solid 2px var(--accent-comp-high-color);
  padding: 10px 12px;
  border-radius: 16px;
  display: flex;
  align-items: center;
}

.mobileBottomNavbar .navbarPageBtn button {
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  width: 100%;
  cursor: pointer;
  color: var(--accent-comp-high-color);
}


.mobileBottomNavbar .navbarPageBtn .navbarPageBtnWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.mobileBottomNavbar .navbarPageBtn .navbarPageBtnIcon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-second-color);
  margin: 0;
}

.mobileBottomNavbar .navbarPageBtn._Active button .navbarPageBtnIcon{
  color: currentColor !important;
}


.mobileBottomNavbar .navbarPageBtn. button .navbarPageBtnIcon svg path {
  stroke: currentColor!important;
}

.mobileBottomNavbar .navbarPageBtn._Active button .navbarPageBtnIcon svg path {
  stroke: currentColor !important;
}

.mobileBottomNavbar .navbarPageBtn._Active .navbarPageBtnIcon.navbarPageBtnIconFill svg path {
  stroke: none !important;
  fill: currentColor !important;
}

.mobileBottomNavbar .navbarPageBtn .navbarPageBtnIcon img {
  /*min-width: 36px;
  min-height: 36px;
  max-width: 36px;
  max-height: 36px;*/
  min-width: 24px;
  max-width: 24px;
  max-height: 24px;
  min-height: 24px;
}

.mobileBottomNavbar .navbarPageBtn .navbarPageBtnHeading {
}

.mobileBottomNavbar .navbarPageBtn .navbarPageBtnHeading .navbarPageBtnHeadingTitle {
  font-style: normal;
  font-size: 12px;
  line-height: 10px;
  text-align: center;
  /*color: var(--text-second-color);*/
  //color: var(--accent-second-color);
  font-weight: 600;
  display: none;
}

.mobileBottomNavbar .navbarPageBtn._Active .navbarPageBtnHeading .navbarPageBtnHeadingTitle {
  /*color: var(--text-primary-color) !important;*/
  display: block !important;
}

</style>
