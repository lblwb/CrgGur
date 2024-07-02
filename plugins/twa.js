import Vue from 'vue'
import WebApp from "@twa-dev/sdk";

//
export default ({app, store}, inject) => {
  if (window.Telegram) {
    const tgWindow = window.Telegram
    // const tgWebApp = tgWindow.WebApp;
    const tgWebApp = WebApp;
    // WebApp.showAlert(`Hello World! Current count is 1`);
    //Initial Store
    store.commit('setTgWebApp', {
      userData: tgWebApp.initDataUnsafe.user,
      webApp: tgWebApp,
    })
    //
    inject('TgTwa', Vue.observable({
      WdTg: tgWindow,
      WApp: tgWebApp
    }));

    //
    inject('TgWApp', Vue.observable(tgWebApp));

    // console.log({
    //   userData: tgWebApp.initDataUnsafe.user,
    //   webApp: tgWebApp,
    // });
  } else {
    console.error('Telegram SDK is not available.');
  }
}


