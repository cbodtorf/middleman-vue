<template>
  <section id="app-component">
    <fixedHeader></fixedHeader>
    <div class="app-component-wrapper">
      <h1>{{title}}</h1>

      <div class="flexbox-container">
      </div>
    </div>
  </section>
</template>

<script>
  import fixedHeader from './FixedHeader.vue'

  export default {
    name: 'appComponent',
    data() {
      return {
        title: 'Hello from the App Component'
      }
    },
    components: { fixedHeader }
  }
</script>

<style lang="scss" scoped>
.app-component-wrapper {
  padding:20px;
}

.flexbox-container {
  height: 200px;
  border: 5px solid #00c9d3;
}
</style>