<template>
  <nav>
    <router-link to="/" :exact="true">
      <i class="iconfont icon-list"></i><span>直播列表页</span>
    </router-link>
  </nav>
</template>
<script>
  export default {
    data(){
      return {}
    },
    computed: {},
    components: {},
    methods: {}
  }
</script>
<style scoped>
  nav {
    width: 100%;
    height: 60px;
    display: flex;
    flex: 1;
    position: fixed;
    left: 0;
    bottom: 0;
    border-top: 1px solid #ccc;
    align-items: center;
    background: #e8e8e8;
  }

  nav i.iconfont {
    font-size: 20px;
  }

  nav a {
    font-size: 18px;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
  }

  nav .active {
    color: orange;
  }
</style>

