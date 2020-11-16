import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        idxPic: 0,
        answers: [],
        budget: '',
        a1: '',
        a2: '',
        a3: '',
        InterSelection: [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        InterIDBuild: -1,
        authenticated: false,
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
      getInterSelection: state =>{
        return state.InterSelection
      },
      getCount: state => {
        return state.count
      },
      
      getidxPic: state => {
        return state.idxPic
      },
      getAnswers: state =>{
        return state.answers
      },
      getBudget: state =>{
        return state.budget
      },
      getInterIDBuild: state =>{
        return state.InterIDBuild
      },
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
      setInterSelection(state,n){
        state.InterSelection[n[0]] = n[1]
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
      setidxpic(state,n){
        state.idxPic = n
      },
      setInterIDBuild(state,n){
        state.InterIDBuild = n
      },
      setAuthentication(state, status) {
        state.authenticated = status;
      }
  
    }
})