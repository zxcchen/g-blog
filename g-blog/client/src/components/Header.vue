<template>
  <header class="header">
    <el-menu :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#333"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true">
      <el-menu-item index="HomePage"
        :route="{path:'/HomePage'}">
        <div style="width:8ch;"><span class="">Home</span></div>
      </el-menu-item>
      <el-menu-item index="Blog"
        :route="{path:'/Blog'}">博客</el-menu-item>
      <!-- <el-menu-item index="Project"
        :route="{path:'/Project'}">项目</el-menu-item>
      <el-submenu index="3">
        <template slot="title">切换主题</template>
        <el-menu-item index="3-1">简约</el-menu-item>
        <el-menu-item index="3-2">非主流</el-menu-item>
        <el-menu-item index="3-3">月光美少女</el-menu-item>
        <el-menu-item index="3-4">数码宝贝</el-menu-item>
      </el-submenu> -->
    </el-menu>
    <div class="search-from">
      <el-input placeholder="搜索发现新世界 ^_^"
        v-model="searchText"
        size="mini"
        @change="search"
        class="input-with-search">
        <el-button slot="append"
          icon="el-icon-search"
          type="text"
          @click="open"></el-button>
      </el-input>
    </div>
    <div class="login-btn">
      <router-link v-if="!user.userName"
        to="/Login">登录</router-link>
      <div v-else
        @click="logout">{{user.userName}}</div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      searchText: ''
    }
  },
  props: {},
  computed: {
    ...mapGetters('main', {
      activeIndex: '_nav'
    }),
    ...mapGetters('user', {
      user: '_user'
    })
  },
  methods: {
    ...mapMutations('user', ['setUser']),
    handleSelect () {},
    logout () {
      this.axios
        .get('/api/user/login')
        .then(({ data: { code, data } }) => {
          if (code === 1000) {
            this.setUser({})
            this.$router.push({ name: 'Login' })
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    search () {
      this.axios
        .get('/api/public/search')
        .then(res => {
          this.dataFromNode = res.data.timer
        })
        .catch(err => {
          console.log(err)
        })
    },
    open () {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@bg: #333;
@font-color: white;

.header {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: @bg;
  color: @font-color;
  z-index: 2000;

  .el-menu-demo {
    flex: 1;
  }

  .el-menu.el-menu--horizontal {
    margin-right: 0.2rem;
    border-bottom: none;
  }

  .a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  .login-btn {
    text-align: right;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

    a {
      color: @font-color;
    }
  }

  .typing {
    display: inline-block;
    width: 5ch;
    font: bold 200% Consolas, Monaco, monospace; /*等宽字体*/
    overflow: hidden;
    white-space: nowrap;
    font-weight: 500;
    border-right: 1px solid transparent;
    animation: typing 5s steps(5) infinite;
  }

  @keyframes typing {
    from {
      width: 0;
    }
  }
}
</style>
