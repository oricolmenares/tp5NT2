import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        valor:"",
        correcto:  "You Picked Right!",
        incorrecto:"Try Again!",
        mensaje:   "",
        espera:   "-------",
        buttons:[],
        max:0,

    },

    actions:{ 
      buttonHard({commit}){
        commit('buttonHard')
      },
      buttonEasy({commit}){
        commit('buttonEasy')
      },
      changeColorsTo({commit},color){
        commit('setAllColorsTo',color)
      },
      restart({commit}){
        commit('resetear')
      }
    },

    mutations:{ 
      buttonHard(state){
        state.max=6 
        this.commit('setAllColorsTo',state)
      },
      
      buttonEasy(state){
        state.max=3  
        this.commit('setAllColorsTo',state)
        
      },

      randomNumber(){
        return Math.floor(Math.random() * 256);
      },

      createRandomStringColor(){
        let newColor = "rgb(" + this.randomNumber() + ", " + this.randomNumber() + ", " + this.randomNumber() + ")" ;
        return newColor;
      },
    
      changeColorsTo(state){
        let arr = []
        for (let i = 0; i < state.buttons.length; i++) {
          arr[i] = color
        }
        state.buttons = arr
        state.mensaje=state.correcto
        state.mensaje=state.incorrecto
        this.$emit('color-correcto', color)
      },

      resetear(){
        location.reload()
      },
    
      getRandomInteger(state) {
        state.valor=state.buttons[Math.floor(Math.random() * (state.max - 0)) + 0]
        state.mensaje=state.espera
      },
    }
})