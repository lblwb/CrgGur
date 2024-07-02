// store/user/account.js

export const state = () => {
  return {
    User: {
      Data: {}, //
      Account: {
        Account_Role: {
          name: "Покупатель"
        }
      }
    }, Telegram: {
      UserId: 0
    }
  }
}

export const mutations = {
  SET_TG_USER_ID(payload = {id: 0}) {
    this.state.Telegram.UserId = payload.id
  }, //Set user role
  SET_USER_ACCOUNT_ROLE_NAME(payload = {name: "Покупатель"}) {
    this.state.User.Account.Account_Role.name = payload.name
  }
}

export const actions = {
  async fetchUserAccountByTgId(action_payload = {initData: null, tgId: 0}) {
    try {
      if (action_payload.initData !== null || action_payload.tgId !== 0) {
        this.SET_TG_USER_ID({id: action_payload.tgId});
        this.state.User.Data = await this.$axios.$post("/api/account/checkAccount", {
          hashAccId: this.state.Telegram.UserId,
          hash: "" //Хэш нужный для сверки
        })
      } else {
        console.error("[App][FetchUserAccount] Not Found Tg Id")
      }
    } catch (e) {
      console.error("[App][FetchUserAccount] Error:", e)
    }

  }
}

export const getters = {}
