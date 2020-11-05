import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import './assets/app.css'
import './assets/styles.scss'
import Vuex from 'vuex'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import vuetify from './plugins/vuetify';


Vue.use(Vuesax, {
  // options here
})
Vue.use(Vuetify)

Vue.config.productionTip = false;

Vue.use(Vuex)

const opts = {}

export default new Vuetify(opts)

const store = new Vuex.Store({
  state: {
      count: 0,
      recCPU: [],
      recGPU: [],
      recMotherboard: [],
      recRAM: [],
      recCooling: [],
      recSSD: [],
      recHDD: [],
      recPowerSupply: [],
      recMouse: [],
      recKeyboard: [],
      recMonitor: [],
      recCase: [],
      idxPic: 0,
      answers: [],
      budget: '',
      a1: '',
      a2: '',
      a3: '',
  },
  
  getters: {
    getA1: state =>{
      return state.a1
    },
    getA2: state =>{
      return state.a2
    },
    getA3: state =>{
      return state.a3
    },
    getCount: state => {
      return state.count
    },
    getrecCPU: state => {
      return state.recCPU
    },
    getrecGPU: state => {
      return state.recGPU
    },
    getrecMotherboard: state => {
      return state.recMotherboard
    },
    getrecRAM: state => {
      return state.recRAM
    },
    getrecSSD: state => {
      return state.recSSD
    },
    getrecHDD: state => {
      return state.recHDD
    },
    getrecPowerSupply: state => {
      return state.recPowerSupply
    },
    getrecMouse: state => {
      return state.recMouse
    },
    getrecKeyboard: state => {
      return state.recKeyboard
    },
    getrecMonitor: state => {
      return state.recMonitor
    },
    getrecCase: state => {
      return state.recCase
    },
    getidxPic: state => {
      return state.idxPic
    },
    getAnswers: state =>{
      return state.answers
    },
    getBudget: state =>{
      return state.budget
    }

  },
  mutations: {
    setA1(state,n){
      state.a1 = n
    },
    setA2(state,n){
      state.a2 = n
    },
    setA3(state,n){
      state.a3 = n
    },
    setBudget(state, n){
      state.budget = n
    },
    pushAnswers (state,n){
      state.answers.push(n)
    },
    emptyAnswers(state){
      state.answers = []
    },
    increment (state) {
      state.count++
    },
    changeValue (state,n){
      state.count = n
    },
    addrecCPU(state,n){
      state.recCPU.push(n)
    },
    addrecGPU(state,n){
      state.recGPU.push(n)
    },
    addrecMotherboard(state,n){
      state.recMotherboard.push(n)
    },
    addrecRAM(state,n){
      state.recRAM.push(n)
    },
    addrecSSD(state,n){
      state.recSSD.push(n)
    },
    addrecHDD(state,n){
      state.recHDD.push(n)
    },
    addrecPowerSupply(state,n){
      state.recPowerSupply.push(n)
    },
    addrecMouse(state,n){
      state.recMouse.push(n)
    },
    addrecKeyboard(state,n){
      state.recKeyboard.push(n)
    },
    addrecMonitor(state,n){
      state.recMonitor.push(n)
    },
    addrecCase(state,n){
      state.recCase.push(n)
    },
    setidxpic(state,n){
      state.idxPic = n
    }

  }
})

new Vue({
  render: h => h(App),
  store: store,
  router,
  vuetify,
  Vuetify
}).$mount('#app')

