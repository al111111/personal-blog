<template>
  <div class="main">
    <div class="logo">刘一's World</div>
    <img src="../../../static/img/luffy.jpg" alt="" class="bg-img">
    <el-button type="info" class="login" @click="handleLoginModel">登录</el-button>
    <div class="con">
      <h2 class="my-article">我的文章</h2>
      <router-link to="/list" class="more">更多...</router-link>
      <div class="article">
        <router-link to="/detail" class="title">什么是闭包</router-link>
      </div>
    </div>
    <div class="login-model" v-show="show">
      <input type="text" placeholder="请输入用户名" v-model="username" class="input">
      <input type="password" placeholder="请输入密码" v-model="userpwd" class="input">
      <el-button type="warning" class="btn" @click="handleHideLoginModel">取消</el-button>
      <el-button type="success" class="btn" @click="handleSkipBackstage">登录</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ERR_OK } from '../../common/common.js'
export default {
  name: 'Index',
  data () {
    return {
      username: '',
      userpwd: '',
      show: false
    }
  },
  methods: {
    handleLoginModel () {
      this.show = !this.show
    },
    handleHideLoginModel () {
      this.show = false
    },
    handleSkipBackstage () {
      if (this.username && this.userpwd) {
        axios.post('/users/login', {username: this.username, password: this.userpwd})
          .then(this.handleLoginSucc.bind(this))
          .catch(this.handleLoginErr.bind(this))
      } else {
        alert('请输入帐号密码')
      }
    },
    handleLoginSucc (res) {
      if (res.data && res.data.code === ERR_OK) {
        this.show = false
        this.$router.push({path: '/backstage'})
      }
    },
    handleLoginErr (res) {
      console.log(res)
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/stylus/variable.styl'
  .main
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    .logo
      position: absolute
      top: 20px
      left: 20px
      line-height: 45px
      width: 100px
      text-align: center
      font-size: 30px
      color: $color-text
      font-weight: bold
      z-index: 10
    .bg-img
      height: 100%
      width: 100%
      opacity: .9
    .login
      position: absolute
      right: 20px
      top: 20px
    .con
      position: absolute
      top: 50%
      left: 50%
      transform: translate3D(-50%, -50%, 0)
      min-height: 300px
      width: 400px
      background: #333
      opacity: .5
      .my-article
        line-height: 30px
        padding-left: 10px
        font-size: $font-size-medium-x
      .more
        position: absolute
        top: 10px
        right: 10px
        color: $color-text
      .article
        line-height: 25px
        padding-left: 5px
        font-size: $font-size-medium
        .title
          color: $color-text
    .login-model
      position: absolute
      top: 15%
      left: 50%
      transform: translateX(-50%)
      height: 150px
      width: 300px
      z-index: 2
      background: #fff
      opacity: .8
      .input
        line-height: 30px
        width: 260px
        margin: 10px 20px
        padding-left: 5px
        border: 1px solid #000
        font-size: $font-size-small
      .btn
        float: right
        margin-right: 10px
</style>
