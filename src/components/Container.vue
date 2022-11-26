<template>

  <section class="src-components-container">
    <div class="main-container">
      <div class="box" v-for="(color, index) in squares" v-bind:key="index" 
        :style="{'background': color}" @click="validate(color, index)">
      </div>
    </div>
  </section>

</template>

<script>
  export default  {
    name: 'src-components-container',
    props: ["buttons", "color-picked"],
    mounted () {
      
    },
    data () {
      return {
       
      }
    },
    methods: {
      validate(color, index) {
        if(this.pickedColor == color) {
          this.$emit('color-correcto')
        }
        else {
          this.$emit('color-incorrecto', index)
        }
      }
    },
    computed: {
      
    }
}
</script>

<style scoped lang="css">
  .box {
    width: auto;
    float: left;
    margin: 10px;
    border-radius: 5%;
    padding-bottom: 10px;
  }
  .main-container {
    margin: 10px auto;
    padding: 10px;
  }
</style>