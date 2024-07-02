export default function ({app, $axios, $auth, $router, store, redirect}) {


  $axios.onRequest((config) => {
    store._vm.$nuxt.$loading.start();
    // const code = parseInt(error.response && error.response.status);

    // Получаем значение Authorization из Vuex store
    config.headers.common['X-Init-Data'] = store.getters['getTgUserInitData'];

    // console.log(store.getters.getTgUserInitData)

    return config;
  });

  // $axios.setHeader('sessionT', store._vm.getTgUserInitData())

  $axios.onResponse((response) => {


    if (response.status === 401) {
      // if (!app.$auth.loggedIn) {
      console.warn("[auth][Unauthorized] -> reset")
      // Обработка ошибки 401 Unauthorized, например, перенаправление на страницу входа
      redirect('/auth/signin');
      // }
    }

    const statusCode = response.status;

    if (response.data.error) {
      $router.push({name: "auth-signin"});
      return $auth.logout();
    } else if (statusCode === 401) {
      $router.push({name: "auth-signin"});
      return $auth.logout();
    } else {
      setTimeout(() => {
        store._vm.$nuxt.$loading.finish();
      }, 2500);
      return response;
    }
  });

  // $axios.onError((error) => {
  //     const code = parseInt(error.response && error.response.status);
  //
  //     if (code === 401) {
  //         // Обработка ошибки 401 Unauthorized, например, перенаправление на страницу входа
  //         redirect('/login');
  //     }
  //
  //     setTimeout(() => {
  //         store._vm.$nuxt.$loading.finish();
  //     }, 2500);
  //     if (error) {
  //         console.error(error);
  //     }
  //
  //     return Promise.reject(error);
  // });


  //Handle cures
  $axios.onResponseError(({response}) => {
    // console.log(app.router.history.current.path);

    if (app.router && app.router.history && app.router.history.current.path && app.router.history.current.path === "/auth/signin") {
      app.$toast.show("По пробуйте войти позже!", {
        // duration: 58000
        duration: 2800,
      });
    } else {
      //
      // response === undefined ? app.$auth.reset() : null;
      response === undefined ? app.$auth.reset() : null;
      response.status === 401 ? app.$auth.reset() : null;
      app.$toast.show("$@%^!@$^ - Упс! Что-то пошло не так мы, по пробуйте войти позже!", {
        duration: 2800,
        className: "warn"
      })
    }
  });

  //Handle Autification Erro
  $axios.onResponseError(({response}) => {
    if (app.router.history.current.path !== "/auth/signin") {
      return response.status ?? (response.status === $axios.HTTP_STATUS_UNAUTHORIZED ? app.$auth.reset() : null)
    }
  });


  $axios.onError((error) => {
    // const code = parseInt(error.response && error.response.status);

    setTimeout(() => {
      store._vm.$nuxt.$loading.finish();
    }, 2500);


    // if (!app.$auth.loggedIn) {
    //     console.warn("[auth][Unauthorized] -> reset")
    //     // Обработка ошибки 401 Unauthorized, например, перенаправление на страницу входа
    //     redirect('/auth/signin');
    // }

    return Promise.reject(error);
  });
}
