// store/order/cargo/category/index.js

export const state = () => {
  return {
    cargo: {
      packages: {
        types: {
          data: []
        }

      }
    }
  }
}

export const mutations = {
  SET_CARGO_PKG_TYPES_DATA(state, payload = {packages: {types: {data: null}}}) {
    state.cargo.packages.types.data = payload.package.types.data
  }
}

export const actions = {
  async fetchCargoPkgTypes({commit}) {
    try {
      const {result} = await this.$axios.$get("/api/v1/cargo/pkg/types/get", {})
      commit("SET_CARGO_PKG_TYPES_DATA", {package: {types: {data: result}}});
    } catch (e) {
      return e
    }

  }
}

export const getters = {
  getPkgTypes(state) {
    return state.cargo.packages.types.data
  }
}
