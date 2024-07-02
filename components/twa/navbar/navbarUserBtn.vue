<template>
  <div class="NavbarUser" @click="showUserProfileBtn">
    <div class="NavbarUserWrapper" v-if="tgUserFirstname !== null">
      <div class="NavbarUserImage">
        <img :src="tgAvatarImage" class="imgAva imgBordered">
      </div>
      <div class="NavbarUserInfo">
        <div class="NavbarUserInfoUsername">
          <div class="NavbarUserInfoUsernameWrapper">
            <div class="NavbarUserInfoUsernameTitle">
              <!--              {{ userData.fullname }}-->
              {{ tgUserFirstname }}
            </div>
          </div>
        </div>
<!--        {{userData}}-->
        <div class="NavbarUserInfoType">
          <div class="NavbarUserInfoTypeBox">
            <div class="InfoTypeBox badgeText">
              <div class="InfoTypeBoxWrapper">
                <div class="InfoTypeBoxTitle">
                  {{
                    $store.state.user.account.User.Account.Account_Role && $store.state.user.account.User.Account.Account_Role.name
                  }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "navbarUserBtn",
  props: {
    // userData: {
    //   default: null
    // }
  },
  methods: {
    async showUserProfileBtn() {
      await this.$router.push({
        name: "user-account"
      });
    }
  },
  computed: {
    ...mapGetters({
      tgAvatarImage: 'getUserAvatarImg',
      tgUserFirstname: 'getUserFirstName',
      userData: 'getUserData',
    })
  }
}
</script>

<style scoped>

.NavbarUser {
  cursor: pointer;
  display: flex;
}

.NavbarUser:focus,
.NavbarUser:hover {
  filter: opacity(0.6);
}

.NavbarUser .NavbarUserWrapper {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

.NavbarUser .NavbarUserImage {
  margin-right: 1.6vh;
}

.NavbarUser .NavbarUserImage img {
  max-width: 40px;
}

.NavbarUser .NavbarUserInfoUsername {
  margin-bottom: 0.6vh;
}

.NavbarUserInfoUsername .NavbarUserInfoUsernameTitle {
  font-size: 14px;
  font-weight: 600;
}

.NavbarUserInfoType {

}

.NavbarUserInfoType .NavbarUserInfoTypeBox {
  display: flex;
}

.NavbarUserInfoType .NavbarUserInfoTypeBox .InfoTypeBox {
  display: flex;
}

.NavbarUserInfoType .NavbarUserInfoTypeBox .InfoTypeBox .InfoTypeBoxWrapper {
  display: flex;
}

.NavbarUserInfoType .NavbarUserInfoTypeBox .InfoTypeBox .InfoTypeBoxTitle {
  font-size: 9px;
  font-weight: 500;
  display: flex;
}
</style>
