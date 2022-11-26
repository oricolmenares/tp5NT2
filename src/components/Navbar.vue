<template>

  <section class="src-components-navigator">
    <div class="nav">
      <button id="reset" @click="resetear()">{{ messageRestart }}</button>
      <span class="mensaje"> {{ message }} </span>

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
    mounted() {
      this.createbuttons(this.colorCount)
    },
    components: {
      Container
    },
    data () {
      return {
        isHard: true,
        buttons: [],
        colorCount: 6,
        hardColor: 6,
        easyColor: 3,
        pickedColor: "",
        message: "",
        messageRestart: "New Colors!"
      }
    },
    methods: {
      createbuttons(n) {
        var arr = [];
        for (var i = 0; i < n; i++) {
          arr.push(this.createRandomStringColor());
        }
        this.buttons = arr
        this.pickedColor = arr[Math.floor(Math.random() * this.colorCount)]
        this.$emit("picked-color", this.pickedColor)
      },
      buttonHard() {
        if (!this.isHard) {
          this.isHard = true
          this.colorCount = this.hardColor;
          this.resetear()
        }
      },
      buttonEasy() {
        if (this.isHard) {
          this.isHard = false
          this.colorCount = this.easyColor;
          this.resetear()
        }
      },
      createRandomStringColor(){
        var newColor = "rgb(" + this.randomNumber() + ", " + this.randomNumber() + ", " + this.randomNumber() + ")" ;
        return newColor;
      },
      randomNumber(){
        return Math.floor(Math.random() * 256);
      },
      resetear() {
        this.createbuttons(this.colorCount)
        this.$emit('color-correcto', "steelblue")
        this.message = ""
      },
      setAllColorsTo(color) {
        let arr = []
        for (let i = 0; i < this.buttons.length; i++) {
          arr[i] = color
        }
        this.buttons = arr
        this.message = "You Picked Right!"
        this.restartMessage = "Try Again!"
        this.$emit('color-correcto', color)
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