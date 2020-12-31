import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Cookies from 'vue-cookies'

// will use this code when started working on project as whole

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"


import config from '../assets/config/config'

Vue.use(Vuex)

const public_http = axios.create()
const private_http = axios.create()

public_http.defaults.baseURL = config.baseURL
private_http.defaults.baseURL = config.baseURL


export default new Vuex.Store({

  // state: {

  // },
  // getters: {

  // },
  // mutations: {

  // },
  // actions: {
  //   signInUser: ({}, payload) => {
  //     return public_http.post('/token/', payload).then(response => {
  //       Cookies.set('access', response.access)
  //       Cookies.set('refresh', response.refresh)
  //       return response
  //     }).catch(error => {
  //       return error
  //     })
  //   }
  // }

  // will use this code when started working on project as whole

    getters,
    mutations,
    state,
    actions,
    strict: process.env.NODE_ENV !== 'production'
})
