<template>
  <el-tabs class="n"
    @tab-click="tabClick"
    v-model="seleteTab"
    :tab-position="position">
    <el-tab-pane v-for="(item,ind) in data"
      :key="ind"
      :label="item.label"
      :name="item.name">
      <span slot="label"
        class="tab-label">
        <img class="tab-icon"
          :src="item.icon" />{{item.label}}
      </span>
      <!-- <template v-if="vertical"> -->
      <template v-if="item.article.length">
        <template v-if="item.name==='folder'">
          <div v-for="(i,d) in item.article"
            :key="d"
            class="folder-box">
            <ul>
              <li class="folder-header">{{i.label}}</li>
              <li v-for="(ii,dd) in i.data"
                :key="dd">
                · <router-link :to="'/Blog/Article?id='+ii.id">
                  <span>{{ii.time}}</span> »
                  <span class="title">{{ii.title}}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </template>
        <template v-else>
          <div v-for="i in item.article"
            :key="i.id"
            :label="item.label"
            class="box-card-vertical">
            <div class="article-tags">
              来自于标签:
              <span class="tag"
                v-for="(ii,dd) in i.tags"
                :key="dd"
                @click="tabClick('label')">{{ii.value}}</span>
            </div>
            <router-link :to="i.id?'/Blog/Article?id='+i.id:'/Blog/Article'">
              <h3 class="title">{{i.title}}</h3>
              <div class="content"
                v-html="i.content"></div>
              <div class="article-tags article-tags-msg">
                <span class="tag"><i class="el-icon-message"></i>留言:123</span>
                <span class="tag"><i class="el-icon-view"></i>阅览:123</span>
                <span class="time"><i class="el-icon-date"></i>{{i.time}}</span>
              </div>
            </router-link>
          </div>
        </template>
      </template>
      <template v-else>
        <div>空空如也</div>
        <router-link to="/Blog/Article"
          class="dynamic-link">点击创建新文章吧</router-link>
      </template>
      <!-- </template> -->
      <!-- 幻灯片浏览，暂时放弃 -->

      <!-- <el-card v-else
        class="box-card">
        <el-carousel :interval="5000"
          :autoplay="false"
          arrow="always"
          :loop="true">
          <el-carousel-item v-for="(i,d) in item.article"
            :key="d">
            <h3 class="title">{{i.title}}</h3>
            <div class="article-tags">
              <span class="tag"
                v-for="(ii,dd) in i.tags"
                :key="dd">{{ii}}</span>
            </div>
            <hr />
            <div class="content">{{i.content}}</div>
          </el-carousel-item>
        </el-carousel>
      </el-card> -->

      <!-- 幻灯片浏览 -->
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data() {
    return {
      seleteTab: 'code'
    };
  },
  props: {
    data: {
      type: Array,
      required: false
    },
    position: {
      type: String,
      required: false,
      default() {
        return "top";
      }
    },
    vertical: {
      type: Boolean,
      required: false,
      default() {
        return false;
      }
    }
  },
  computed: {},
  watch: {},
  methods: {
    // 切换左侧菜单
    tabClick(tab) {
      this.$emit("tabActiveInd", tab.name);
    },
    // 跳转到标签页
    linkToPage(type){
      this.seleteTab = type;
    }
  }
};
</script> 

<style lang="less" scoped>
@bg: #333;
@font-color: #fff;
@white: #fff;
@green: #42b983;
@gray: #a1a6b1;
@text: #666;
@tag: #999;
@link: #409eff;

.tab-label {
  margin-right: 0.2rem;
  vertical-align: middle;
}
.tab-icon {
  margin-right: 0.2rem;
  width: 0.2rem;
  height: 0.2rem;
  vertical-align: middle;
}
.article-tags {
  color: @tag;
  .tag {
    text-align: center;
    display: inline-block;
    margin-right: 0.1rem;
    cursor: default;
    i {
      margin-right: 0.02rem;
    }
  }
  .time {
    float: right;
    min-width: 1rem;
    i {
      margin-right: 0.02rem;
    }
  }
}
.article-tags-msg {
  margin-top: 0.15rem;
}
.box-card,
.box-card-vertical {
  display: block;
  // margin-bottom: 0.1rem;
  text-align: left;
  .title {
    margin: 0.05rem 0;
    font-size: 0.24rem;
  }
  .content {
    // border-top: .01rem solid @bg;
    // border-bottom: .01rem solid @bg;
    // min-height: 1rem;
    // 超出部分省略号
    // display: -webkit-box;
    // -webkit-box-orient: vertical;
    // -webkit-line-clamp: 3;
    // overflow: hidden;
    color: @text;
    font-weight: 400;
  }
  .read-more {
    text-align: center;
    margin-top: 1rem;
  }
}
.box-card-vertical {
  margin-bottom: 0.3rem;
  padding: 0.1rem;
  // border: 1px solid #ebeef5;
  // border-radius: 0.05rem;
  // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.folder-box {
  margin-bottom: 0.1rem;
  text-align: left;
  ul {
    a {
      font-size: 0.1rem;
    }
    span {
      display: inline-block;
      min-width: 0.65rem;
      vertical-align: middle;
      &.title {
        color: @link;
        font-size: 0.16rem;
        margin-left: 0.1rem;
      }
    }
  }
  .folder-header {
    margin-bottom: 0.2rem;
    font-size: 0.2rem;
    border-bottom: 0.01rem solid @gray;
  }
}
</style>
<style>
</style>
