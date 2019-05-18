<template>
  <section id="app-component">
    <FixedHeader></FixedHeader>
    <div class="app-component-wrapper">
      <div class="cursel-center-tit fadein">
        <div class="cursel-center-tit-outline"><h2 class="load">{{ name }}<br><TextScrambler :text="verb"/><br><TextScrambler :text="noun"/></h2></div>
        <div class="cursel-center-tit-base"><h2 class="load">{{ name }}<br><TextScrambler :text="verb"/><br><TextScrambler :text="noun"/></h2></div>
      </div>

      <div class="flexbox-container">
        <div class="left">

        </div>
        <div class="right">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import FixedHeader from './FixedHeader.vue'
  import TextScrambler from './TextScrambler.vue'

  export default {
    name: 'appComponent',
    data() {
      return {
        name: 'Caleb',
        text: 'meh',
        verb: 'Inspires',
        noun: 'Creativity',
        counter: 0,
        verbs: [
          'Inspires',
          'Empowers',
          'Challenges',
          'Organizes',
          'Loves',
          'Codes',
          'Plays Music With',
          'Challenges',
          'Churns and Burns'
        ],
        nouns: [
          'Creativity',
          'The Team',
          'Everything',
          'Stuff by Color',
          'Randomizers',
          'Like a damn boss',
          'Sexbruise?',
          'The Game',
          'Turtles',
          'Crabigator'
        ]
      }
    },
    mounted: function() {
      const self = this;
      setInterval(() => {
        ["noun", "verb"].forEach((key) => {
          const arr = self[key + "s"]
          self[key] = arr ? arr[Math.floor(Math.random()*arr.length)] : "";
        })
      }, 2000)
    },
    components: { FixedHeader, TextScrambler }
  }
</script>

<style lang="scss" scoped>
.app-component-wrapper {
  padding: 150px;
}

.cursel-center-tit {
  .cursel-center-tit-outline {
    h2 {
      min-height: 150px;
      line-height: 100%;
      font-size: 6vw;
      font-weight: 800;
      font-style: normal;
      color: transparent;
      -webkit-text-stroke: 1px #1a1427;
      z-index: 2;
      transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
  }

  .cursel-center-tit-base h2 {
    min-height: 150px;
    line-height: 100%;
    font-size: 6vw;
    font-family: Harbour, sans-serif;
    font-weight: 800;
    font-style: normal;
    opacity: 0;
    color: #fed8f9;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-stroke: none;
    z-index: -1;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  h2 {
    position: absolute;
    top: 50%;
    left: 7%;
    transform: translateY(-50%);
    opacity: 0;
    letter-spacing: 20px;

    &.load {
      opacity: 1;
      left: 16%;
      letter-spacing: 0px;
    }
  }
}

.flexbox-container {
  height: 500px;
  width: 70%;
  margin: 0 30%;
  box-shadow: 0 0 15px 2px rgba(0,0,0,0.3);
  background: #fed8f9;
  z-index: 1;

  .left, .right {
    width: 100%;
  }

  .left {
    box-shadow: 0 0 15px 2px rgba(255, 183, 225, 0.377);
    background: #fed8f9;
  }

  .right {
    background: #fed8f9;
  }
}
</style>