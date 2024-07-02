// store/order/cargo/wgh_size/index.js

export const state = () => {
  return {
    cargo: {
      weights: {
        gr_data: {
          data: []
        }
      }
      // packages: {
      //   types: {
      //     data: []
      //   }
      //
      // }
    }
  }
}

export const mutations = {
  SET_CARGO_WEIGHTS_N_GROUP_DATA(state, payload = {weights: {gr_data: {data: null}}}) {
    state.cargo.weights.gr_data.data = payload.weights.gr_data.data
  }
}

export const actions = {
  async fetchCargoWeightsGrouped({commit}) {
    try {
      const {result} = await this.$axios.$get("/api/v1/cargo/wgh_size/grouped/get", {})
      commit("SET_CARGO_WEIGHTS_N_GROUP_DATA", {weights: {gr_data: {data: result}}});
    } catch (e) {
      return e
    }

  }
}

export const getters = {
  getWeightsGrouped(state) {
    return state.cargo.weights.gr_data.data
  }
}
