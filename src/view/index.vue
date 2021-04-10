<template >
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
    }
  },
  mounted () {
    console.log(11111111)
  }
}
</script>
<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
</style>