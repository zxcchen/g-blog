<template>
  <div v-loading="loading"
    class="card">
    <slot name="header"></slot>
    <div class="box">
      <template v-if="data">
        <el-card class="pro-css"
          v-for="(item,ind) in data"
          :key="ind"
          shadow="always"
          :body-style="{ padding: '0px' }">
          <router-link :to="item.id?routerLink+'?id='+item.id:routerLink">
            <img :src="item.img.length?item.img:'/static/img/food.png'"
              class="pro-css-img">
            <div class="pro-css-tip">
              <h5 class="pro-css-title">{{item.title}}</h5>
              <div class="pro-css-text">
                <time class="pro-css-time">{{item.time}}</time>
                <el-button type="text"
                  class="pro-css-btn">阅读更多</el-button>
              </div>
            </div>
          </router-link>
        </el-card>
      </template>
      <div v-else>空空如也~</div>
      <div v-if="data"
        class="pro-css-footer"
        @click="getData">换一换</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      loading: false
    };
  },
  props: {
    data: {
      type: Array,
      required: false
    },
    routerLink: {
      type: String,
      required: false
    }
  },
  methods: {
    getData() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    }
  }
};
</script> 

<style lang="less" scoped>
@bg: #333;
@font-color: #fff;
@white: #fff;
@green: #42b983;

.card {
  .card-header {
    background: @bg;
    color: @font-color;
    font-size: 0.18rem;
    text-align: left;
    text-indent: 1em;
  }
}
.pro-css-footer {
  width: 100%;
  margin-top: 0.1rem;
  cursor: pointer;
}
.pro-css {
  flex: 1;
  min-width: 24%;
  max-width: 24%;
  margin-right: 1%;
  margin-bottom: 1%;
  text-align: left;
  padding: 0;
  border: none;
  & :hover {
    opacity: 0.8;
    background-color: @white;
  }
  .pro-css-img {
    width: 100%;
  }
  .pro-css-tip {
    padding: 0.1rem;
  }
  .pro-css-title {
    text-align: left;
    font-size: 0.16rem;
  }
  .pro-css-text {
    overflow: hidden;
  }
  .pro-css-time {
    float: left;
    font-size: 0.12rem;
  }
  .pro-css-btn {
    float: right;
  }
}
</style>
