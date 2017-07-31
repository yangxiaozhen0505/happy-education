<template>
  <div>
    <m-header title="直播列表页"></m-header>
    <ul class="list">
      <li v-for="s in music">
        <div v-if="!s.pay">
          <router-link :to="{path:'/detail/'+s.id}">
            <div>
              <strong>{{s.id}}</strong>
              <span > {{s.name}}</span>
            </div>
            <p> {{s.singer}}</p>
            <hr>

          </router-link>
        </div>
        <div v-if="s.pay">
        <div>
          <strong>{{s.id}}</strong>
         <span > {{s.name}}</span>
          <img :src="s.pay" alt="">
          <div class="layer">
            <div class="mask"></div>
            <div class="layer-cont">
              <h3>提示</h3>
              <p>唱片公司要求该作品不提供免费服务 <br>请在音乐APP内付费后畅享</p>
              <span>
                 <button class="cancel" @click="dis">取消</button>
                 <router-link :to="{path:'/detail/'+s.id}" tag="button" class="download">下载音乐</router-link>
               </span>
            </div>
          </div>
        </div>
        <p> {{s.singer}}</p>
        </div>
        <hr>
      </li>
    </ul>
  </div>
</template>
<script>
  import MHeader from '../components/MHeader'
  import {getSong} from '../api/index'
  export default {
    created(){
      getSong().then(res => {
        this.music = res.data;
        console.log(res.data);
      }).catch(err => {
        console.log(err);
      })
    },
    data(){
      return {
        music: []
      }
    },
    computed: {},
    components: {MHeader},
    methods: {
      dis(event){
        event = event ? event : window.event;
        let el = event.srcElement ? event.srcElement : event.target;
        let $el = $(el);
        $el.parent().parent().parent().css("display",'none');
      }
    }
  }
</script>
<style scoped>

  .list {
    margin-top: 70px;
    margin-bottom: 65px;
  }
  div strong{
    display:inline-block;
    margin-right:10px;
    font-size:18px;
    color: #999999;
  }

  ul, li {
    list-style: none;
  }
  li>div{
  font-size:18px;
  }
  div+p{
    font-size:14px;
  }
  img {
    display: inline-block;
    width: 50px;
    height: 20px;
    margin-left: 10px;
  }

  .list li .layer {
    display: none;
  }

  .list li:hover .layer {
    display: block;
  }

  .layer .mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .65);
  }

  .list li .layer .layer-cont {
    position: fixed;
    top: 170px;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 998;
    width: 287px;
    height: 230px;
    border-top: 2px solid #ff5800;
    background: #fff;
  }

  .list li .layer h3 {
    width: 287px;
    height: 51px;
    line-height: 51px;
    background: #eeeded;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
  }

  .list li .layer p {
    padding-top: 26px;
    width: 100%;
    height: 85px;
    line-height: 20px;
    font-size: 14px;
    text-align: center;
    box-sizing: border-box;
  }

  .list li .layer span {
    display: block;
    width: 245px;
    height: 50px;
    line-height: 50px;
    margin: 0 auto;
  }

  .list li .layer .cancel {
    display: block;
    float: left;
    width: 108px;
    height: 42px;
    line-height: 42px;
    border: 1px solid #f60;
    border-radius: 10px/10px;
    background: #fff;
    color: #f60;
    text-align: center;
  }

  .list li .layer .download {
    display: block;
    float: right;
    width: 108px;
    height: 42px;
    line-height: 42px;
    border: .02rem solid #f60;
    border-radius: 10px/10px;
    background: #f60;
    color: #fff;
    text-align: center;
  }
</style>
