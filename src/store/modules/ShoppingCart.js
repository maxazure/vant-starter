import Cookies from 'js-cookie'

const state = {
  ShoppingCart: JSON.parse(Cookies.get('ShoppingCart')) || {}
}

const mutations = {
  AddShoppingCartItem: (state,payload) => {
    Object.assign(state.ShoppingCart, payload)
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