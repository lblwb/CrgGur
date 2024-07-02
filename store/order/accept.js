// store/order/cargo/category/index.js

export const state = () => {
  return {
    request: {
      accept: {
        form: {
          data: [], result_data: []
        }
      }
    }
  }
}

export const mutations = {
  SET_ORDER_ACCEPT_FORM_DATA(state, payload = {request: {accept: {form: {data: null}}}}) {
    state.request.accept.form.data = payload.request.accept.form.data
  },
  SET_ORDER_ACCEPT_FORM_RESULT_DATA(state, payload = {request: {accept: {form: {data: null}}}}) {
    state.request.accept.form.result_data = payload.request.accept.form.data;
  }
}

export const actions = {
  async fetchNewRequestAccept({commit, state}) {
    try {
      const form_data = state.request.accept.form.data;
      const {result} = await this.$axios.$post("/api/v1/orders/requests/accept", form_data)
      commit("SET_ORDER_ACCEPT_FORM_RESULT_DATA", {request: {accept: {form: {data: result}}}});
      return state.request.accept.form.result_data;
    } catch (e) {
      return e
    }

  },
  async setAcceptFormData({commit}, payload = {data: null}) {
    commit("SET_ORDER_ACCEPT_FORM_DATA", {request: {accept: {form: {data: payload.data}}}});
  }
}

export const getters = {}
