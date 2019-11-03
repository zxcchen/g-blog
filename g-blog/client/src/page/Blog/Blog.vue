<template>
  <div class="blog">
    <v-tabs position="left"
      :data="tabPaneData"
      @tabActiveInd="tabActiveInd"></v-tabs>
    <el-pagination class="pagination"
      background
      :current-page.sync="currentPage"
      @current-change="getArticleList"
      :page-size="5"
      layout="prev, pager, next"
      :total="tabPaneData[tabIndex].total||0">
    </el-pagination>
    <div class="btn-box">
      <el-button type="primary"
        @click="addArticle"
        icon="el-icon-plus"></el-button>
    </div>
  </div>
</template>

<script>
import Tabs from "./Module/Tabs";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Blog",
  data() {
    return {
      tabInd: "code",
      currentPage:1,
      tabPaneData: [
        {
          label: "前端",
          name:"code",
          article: [],
          total:0,
          icon:"/static/img/code.png",
          type:'0'
        },
        {
          label: "后台",
          name:"db",
          article: [],
          total:0,
          icon:"/static/img/db.png",
          type:'1'
        },
        {
          label: "生活",
          name:"life",
          article: [],
          total:0,
          icon:"/static/img/life.png",
          type:'2'
        },
        {
          label: "轨迹",
          name:"folder",
          article: [],
          total:0,
          icon:"/static/img/folder.png",
          type:'3'
        },
        {
          label: "标签",
          name:"label",
          article: [],
          total:0,
          icon:"/static/img/label.png",
          type:'4'
        },
        // idea: {
        //   label: "说说",
        //   name:"idea",
        //   article: [],
        //   total:0,
        //   icon:"/static/img/idea.png",
        //   type:6
        // },
        
      ]
    };
  },
  computed: {
    ...mapGetters("main", {
      activeIndex: "_nav"
    }),
    tabIndex(){
      const [result] = this.tabPaneData.filter(v=>v.name===this.tabInd).map(v=>v.type)
      return result||0;
    }
  },
  mounted() {},
  components: {
    "v-tabs": Tabs
  },
  props: {
    collapseData: {
      type: Array,
      required: false
    }
  },
  created() {
    this.getArticleList(1);
  },
  methods: {
    ...mapMutations("main", ["setNav"]),
    // 获取该
    tabActiveInd(ind) {
      this.tabInd = ind;
      this.getArticleList(this.currentPage);
    },
    getArticleList(currentPage) {
      const type = this.tabIndex;
      this.axios
        .get("/api/page/articleList", {
          params: {
            currentPage,
            pageSize: 5,
            type: parseInt(type)+1
          }
        })
        .then(({ data: { code, data, message } }) => {
          if (code === 1000) {
            this.tabPaneData[type].article = data.article;
            // if(currentPage===1){
            this.tabPaneData[type].total = data.total;
            // }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    addArticle(){
      this.$router.push({name:"Article"})
    }
  }
};
</script> 

<style lang="less" scoped>
@bg: #333;
@font-color: #fff;
@white: #fff;
@green: #42b983;

.pagination {
  margin-top: 0.1rem;
  margin-left: 1.2rem;
}
.blog{
  // width: 80%;
  // margin-left: auto;
  // margin-right: auto;
  .btn-box {
    position: fixed;
    right: 0.5rem;
    top: 2.5rem;
    z-index: 1501;
  }
}
</style>
<style>
.blog .el-tabs__active-bar {
  background-color: #42b983;
}
.blog .el-tabs__item.is-active{
  background: #42b983;
  color: #fff;
}
.blog .el-tabs--left .el-tabs__item.is-left:hover{
  color: #42b983;
}
</style>
