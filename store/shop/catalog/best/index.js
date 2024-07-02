// store/shop/catalog/best/index.js

export const state = () => {
  //TgWebState
  return {
    catalog: {
      best: {}
    }
  }

}

export const mutations = {
  SET_CATALOG_BEST_PRODUCTS(state, payload = {products: {data: null}}) {
    state.catalog.best.data = payload.products.data
  }
}

export const actions = {
  fetchCatalogBestProducts({commit}) {
    commit("SET_CATALOG_BEST_PRODUCTS", {
      products: {
        data: null
      }
    })
  }
}

export const getters = {}
