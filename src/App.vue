<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
  .ivu-table .demo-table-info-cell-age  .ivu-table-cell span{
      background-color: #ff5151 !important;
      color: #fff;
  }
  .ivu-table .demo-table-info-cell-age-adapter  .ivu-table-cell span{
      background-color: #adadad ;
      color: #fff;
  }
</style>
