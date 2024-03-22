<script>
  import AppHeader from './components/appHeader.vue'
  import AppMain from './components/appMain.vue'
  import AppFooter from './components/appFooter.vue'

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter
  }
}
</script>

<template>
  <div>
    <AppHeader />
  </div>
  <div>
    <AppMain />
  </div>
  <div>
    <AppFooter />
  </div>

</template>

<style>

</style>
