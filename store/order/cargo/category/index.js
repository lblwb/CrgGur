// store/order/cargo/category/index.js

export const state = () => {
  return {
    cargo: {
      categories: {
        data: []
      }
    }
  }
}

export const mutations = {
  SET_CARGO_CATEGORIES_AND_TYPES(state, payload = {categories: {data: null}}) {
    state.cargo.categories.data = payload.categories.data
  }
}

export const actions = {
  async fetchCargoCategoriesWithTypes({commit}) {
    try {
      const {result} = await this.$axios.$get("/api/v1/cargo/cat/get", {})
      commit("SET_CARGO_CATEGORIES_AND_TYPES", {categories: {data: result}});
    } catch (e) {
      return e
    }

  }
}

export const getters = {
  getCargoCategories(state) {
    return state.cargo.categories.data
  }
}
