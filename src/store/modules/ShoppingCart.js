import Cookies from 'js-cookie'

const state = {
  ShoppingCart: Cookies.get('ShoppingCart') || {}
}

const mutations = {
  AddShoppingCartItem: (state,payload) => {
    state.ShoppingCart = Object.assign(JSON.parse(state.ShoppingCart), payload)
    Cookies.set('ShoppingCart', JSON.stringify(state.ShoppingCart))
  },

  CleanShoppingCart: state => {
    state.ShoppingCart = {}
    Cookies.set('ShoppingCart', JSON.stringify({}))
  }
}

export default {
  namespaced: true,
  state,
  mutations
}