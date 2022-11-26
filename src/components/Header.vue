<template>

  <section class="src-components-header">

    <div class="header" :style="{'background': colorCorrecto}">
      <h3>The Great RBG</h3>
        <h2>{{ pickedColor }}</h2>
      <h3>Guessing Game</h3>
    </div>

    <Navbar @picked-color="pickedColor=$event" @color-correcto="cambioColor($event)"/>
  </section>

</template>

<script>
  import Navbar from './Navbar.vue'
  export default  {
    name: 'src-components-header',
    props: [],
    components: {
      Navbar
    },
    mounted () {
    
    },
    data () {
      return {
        pickedColor: "",
        colorCorrecto: "steelblue"
      }
    },
    methods: {
      cambioColor(color) {
        this.colorCorrecto = color
      }
    },
    computed: {
    }
  }
</script>

<style scoped lang="css">
  .src-components-header {

  }

  .header {
    transition: all 0.3s;
    background: steelblue;
    text-transform: uppercase;
    text-align: center;
    margin: 0;
    color: white;
  }
  
</style>