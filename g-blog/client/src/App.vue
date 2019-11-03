<template>
  <div id="app">
    <v-header :class="headerClass"></v-header>
    <img :class="logoClass"
      src="./assets/logo.png">
    <router-view class="view-box" />
    <v-footer v-show="this.activeIndex !== 'Login'"></v-footer>
    <!-- <float-meau></float-meau> -->
  </div>
</template>

<script>
import Header from "./components/Header";
import HomePage from "./page/HomePage";
import Footer from "./components/Footer";
import FloatMeau from "./components/FloatMeau";
import { mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters("main", {
      activeIndex: "_nav"
    }),
    logoClass() {
      return {
        logo: true,
        "logo-activ":
          this.activeIndex === "Login" ||
          this.$router.currentRoute.name === "HomePage" ||
          this.activeIndex === "Blog" ||
          this.activeIndex === "Project" 
      };
    },
    headerClass() {
      return {
        "unfixed-activ":
          this.activeIndex === "Article"
      };
    },
  },
  components: {
    "v-header": Header,
    "v-footer": Footer,
    FloatMeau,
    HomePage
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less">
@import "../static/css/pulic.less";

#app {
  position: relative;
  min-height: 100vh;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .logo {
    display: none;
    margin: auto;
    margin-top: 0.6rem;
    width: 100%;
    height: 2rem;
  }
  .unfixed-activ{
    position: relative;
  }
  .logo-activ {
    display: block;
    & + .view-box {
      margin-top: 1rem;
    }
  }
}
.view-box {
  margin: 0.1rem 0;
  padding: 0.15rem;
  padding-bottom: 1rem;
}
.box {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin-bottom: 0.15rem;
  padding: 0.1rem;
  padding-right: 0;
  border: 0.01rem solid @bg;
  .n,
  .n2,
  .n3,
  .n4 {
    margin-right: 0.1rem;
    text-align: left;
    padding: 0.1rem;
    border: 0.01rem solid @bg;
  }
  // & > div::before,
  // & > .n::before {//宽高相等
  //   content: "";
  //   padding-top: 100%;
  //   display: block;
  // }
  .n {
    flex: 1;
  }
  .n2 {
    flex: 2;
  }
  .n3 {
    flex: 3;
  }
  .n4 {
    flex: 4;
  }
  .el-collapse-item__content {
    min-height: 1.5rem;
  }
}
.home-collapse {
  .el-collapse-item__header.is-active {
    padding: 0 0.1rem;
    height: 0.32rem;
    background: @bg;
    color: @white;
  }
  .el-collapse-item__wrap:last-child {
    border: none;
  }
  .el-carousel__indicators {
    background: @bg;
    opacity: 0.75;
  }
  .el-collapse-item__header {
    padding: 0 0.1rem;
    height: 0.32rem;
    background: @gray;
  }
  .el-collapse-item__content {
    padding-bottom: 0;
  }
}
</style>
<style>
@media screen and (min-width: 1440px) {
  #app .view-box {
    margin-left: 2rem;
    margin-right: 2rem;
    /* width: 800px; */
  }
}
</style>
