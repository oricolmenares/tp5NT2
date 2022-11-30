<template>

  <section class="src-components-navigator">
    <div class="nav">
      <button id="reset" @click="resetear()">{{ messageRestart }}</button>
      <span class="mensaje"> {{ $store.state.mensaje }} </span>

      <button id="easy" :class="!isHard" @click="buttonEasy()">easy</button>
      <button id="hard" :class="isHard" @click="buttonHard()">hard</button>
    </div>
    <Container :buttons="buttons" :color-picked="pickedColor" 
      @color-correcto="setAllColorsTo(pickedColor)" 
    />
  </section>
  
</template>

<script>
  import Container from './Container.vue'
  export default  {
    name: 'src-components-navigator',
    props: [],
    beforeMount () {
      this.buttonHard()
    },
    mounted() {
      
    },
    components: {
      Container
    },
    data () {
      return {
        messageRestart: "New Colors!"
      }
    },
    methods: {

      buttonEasy() {
        this.$store.dispatch("buttonEasy")
      },

      buttonHard() {
        this.$store.dispatch("buttonHard")
      },

      resetear() {
        this.$store.dispatch("restart")
      }, 

      setAllColorsTo(color) {
        this.$store.dispatch("changeColorsTo", color)
      },
    },
    computed: {
      
    }
}
</script>

<style scoped lang="css">
  .nav {
    background: #ffffff;
    height: 30px;
    text-align: center;
    margin: 0;
    margin-top: -30px;
  }
  .mensaje {
    color: #000000;
    display: inline-block;
    width: 20%;
  }
  button {
    border: none;
    background-color: white;
    font-family: "Montserrat", "Avenir";
    text-transform: uppercase;
    height: 100%;
    font-weight: 700;
    letter-spacing: 1px;
    color: steelblue;
    transition: all 0.3s;
    outline: none;
  }
  button:hover {
    color: white;
    background-color: steelblue;
  }
  .selected {
    background-color: steelblue;
    color: white;
  }
</style>