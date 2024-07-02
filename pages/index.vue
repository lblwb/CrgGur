<template>
  <TwaMainLt>
    <template #Body>
      <div class="MainBodyWrapper">
<!--        <div class="MainBodyCurrency">-->
<!--          <CurrencyRateBlock/>-->
<!--        </div>-->
        <div class="MainBodyAddRequest">
          <AddNewRequestBtn/>
        </div>
        <div class="MainBodyRequestsInfo">
          <div class="MainBodyRequestsInfoWrapper">
            <MainReqCountBlock/>
          </div>
        </div>
        <div class="MainBodySupportTicket">
          <SupportTicketBtn/>
        </div>
      </div>
    </template>
  </TwaMainLt>
</template>

<script>
import TwaMainLt from "~/layout/twaMainLt.vue";
import CurrencyRateBlock from "~/components/twa/body/currency/CurrencyRateBlock.vue";
import SupportTicketBtn from "~/components/twa/body/support/btn/SupportTicketBtn.vue";
import AddNewRequestBtn from "~/components/twa/body/order/request/AddNewRequestBtn.vue";
import {mapGetters} from "vuex";
import MainReqCountBlock from "~/components/twa/body/order/request/MainReqCountBlock.vue";

export default {
  async asyncData({store}) {
    // console.log(store.state);
    return {};
  },
  methods: {
    showPopup() {
      console.log(this.$TgTwa.WApp);
      // this.$TgTwa.WApp.HapticFeedback.selectionChanged()
      // this.$TgTwa.WApp.setHeaderColor("green");
      // this.$TgTwa.WApp.showPopup("test", () => alert("открыл попап"))
    },
    closeApp() {
      console.log(this.$TgTwa.WApp);
      alert("Приложение было закрыто!")
      this.$TgTwa.WApp.close();
    }
  },
  computed: {
    ...mapGetters({
      tgWebApp: 'getStTgWebApp',
      tgUserInitData: 'getTgUserInitData',
      //
      userData: 'getUserData',
      //
      tgAvatarImage: 'getUserAvatarImg',
      tgUserFirstname: 'getUserFirstName',
      checkTgInitData: 'checkTgInitData'
    })
  },
  components: {
    MainReqCountBlock,
    SupportTicketBtn,
    AddNewRequestBtn,
    CurrencyRateBlock,
    // StoriesMainBlock,
    TwaMainLt,
    // SearchMainInput
  },
}
</script>

<style scoped>
.MainBodyWrapper {
  margin-bottom: 56px;
}

.MainBodyCurrency {
  margin-bottom: 16px;
}

.MainBodyAddRequest {
  margin-bottom: 16px;
}

.MainBodyRequestsInfo {
  margin-bottom: 16px;
}

</style>
