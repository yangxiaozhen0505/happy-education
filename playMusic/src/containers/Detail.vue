<template>
  <div>
    <m-header title="播放页"></m-header>
    <div class="top">
      <div class="panel panel-warning">
        <div class="panel panel-heading">
          {{s.name}}
        </div>
        <div class="panel panel-body text-center">
          <span class="f">
            <i></i>
            <!--<audio src="../assets/music.mp3" autoplay="autoplay"-->
                   <!--controls="controls"-->
                   <!--preload="auto" id="audioBox"></audio>-->
            <audio autoplay preload="auto" controls loop id="audio">
  <source src="http://dl.stream.qqmusic.qq.com/C400000kLePd1VMhnI.m4a?fromtag=38&vkey=7E8B8936DC05944A1045FCF430C8E3A85DC3344D6B46E5FE3665FED63F333C29EE459757A099D54B12BB3D5CEC2A55689A3A60AA34017FD5&guid=6799681970" type="audio/mpeg" />
</audio>
          </span>
          <img :src="s.url" alt="">
        </div>
        <div class="panel panel-footer">
          {{s.singer}} <span></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import MHeader from '../components/MHeader'
  import {getOneSong} from '../api/index'
  export default {
    created(){
        this.getSong()
    },
    data(){
      return {
       s: {
           name:'',
           url:'',
           singer:'',
           pay:''
       },
        isPlaying:false
      }
    },
    computed: {},
    components: {MHeader},
    methods:{
      getSong(){
        getOneSong(this.$route.params.id).then(res => {
          this.s = res.data;
          console.log(res.data);
        }).catch(err => {
          console.log(err);
        })
      },
      play(){
        var audio = document.querySelector('#audioBox');
        if (this.isPlaying) {
          audio.play();
          this.isPlaying = true;
        }
      },
      stop(){
        var audio = document.querySelector('#audioBox');
        if (!this.isPlaying) {
          audio.pause();
          audio.currentTime = 0;
        }
      },
    },
    activated(){
    this.getSong();
    }
  }
</script>
<style scoped>
  .top{
    margin-top: 70px;
  }
  .panel-heading{
    font-size:16px;
  }
  img {
    display: inline-block;
    width: 50px;
    height: 20px;
    margin-left: 10px;
  }
  .panel.panel-body{
    position:relative;
  }
  .panel.panel-body img{
    width: 200px;
    height: 200px;
  }
  .panel.panel-body .f{
    position:absolute;
    top:50%;
    left:50%;
    margin-left:-100px;
    margin-top:-100px;
    width: 200px;
    height: 200px;
    display:block;
    background:rgba(0,0,0,.1);
  }
  .panel.panel-body .f i{
    display:block;
    position:absolute;
    top:50%;
    left:50%;
    margin-left:-22.5px;
    margin-top:-17.5px;
    width: 45px;
    height: 35px;
    background: url(../images/dd.png) no-repeat;
  }
  .panel.panel-body:hover .f{
    background:transparent;
  }
  .panel.panel-body:hover .f i{
    background: url(../images/dd.png) no-repeat -42px 0;
  }
  .panel-footer>span{
    display:inline-block;
    width: 45px;
    height: 35px;
    margin-left:300px;
    background: url(../images/d.png) no-repeat -82px 0;
  }
  audio{
    position:absolute;
    top:90%;
    left:-25%;

  }
</style>
