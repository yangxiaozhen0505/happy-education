<template>
    <div class="header">
      {{title}}
    </div>
</template>
<script>
    export default {
        props:['title'],
        data(){
            return {}
        },
        computed: {},
        components: {},
        methods: {}
    }
</script>
<style scoped>
  .header{
    position:fixed;
    left:0;
    top:0;
    width: 100%;
    font-size:20px;
    background: #f1f1f1;
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #666;
  }
</style>
