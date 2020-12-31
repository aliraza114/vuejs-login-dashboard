/*=========================================================================================
  File Name: actions.js
  Description: Vuex Store - actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from 'axios'
import config from '../assets/config/config'
import Cookies from 'vue-cookies'

const public_http = axios.create()
const private_http = axios.create()

public_http.defaults.baseURL = config.baseURL
private_http.defaults.baseURL = config.baseURL

const actions = {

    // /////////////////////////////////////////////
    // COMPONENTS
    // /////////////////////////////////////////////

    signInUser: ({ commit }, payload) => {
      return public_http.post('/token/', payload).then(response => {
        Cookies.set('access', response.access)
        Cookies.set('refresh', response.refresh)
        commit('LOGIN_USER_INFO', response)
        return response
      }).catch(error => {
        return error
      })
    },

    // Vertical NavMenu
    updateVerticalNavMenuWidth({ commit }, width) {
      commit('UPDATE_VERTICAL_NAV_MENU_WIDTH', width)
    },

    // VxAutoSuggest
    updateStarredPage({ commit }, payload) {
      commit('UPDATE_STARRED_PAGE', payload)
    },

    // The Navbar
    arrangeStarredPagesLimited({ commit }, list) {
      commit('ARRANGE_STARRED_PAGES_LIMITED', list)
    },
    arrangeStarredPagesMore({ commit }, list) {
      commit('ARRANGE_STARRED_PAGES_MORE', list)
    },

    // /////////////////////////////////////////////
    // UI
    // /////////////////////////////////////////////

    toggleContentOverlay({ commit }) {
      commit('TOGGLE_CONTENT_OVERLAY')
    },
    updateTheme({ commit }, val) {
      commit('UPDATE_THEME', val)
    },

    // /////////////////////////////////////////////
    // User/Account
    // /////////////////////////////////////////////

    updateUserInfo({ commit }, payload) {
      commit('UPDATE_USER_INFO', payload)
    }
}

export default actions
