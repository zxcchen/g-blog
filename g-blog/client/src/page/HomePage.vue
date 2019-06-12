<template>
  <div>
    <!-- 多功能区 -->
    <div class="box">
      <button type="primary"
        @click="getDate">获取时间：</button>
      <input class="input" v-model="dataFromNode"
        placeholder="喵喵喵" />
    </div>
    <!-- 多功能区 -->

    <!-- 一段骚气的介绍 -->
    <div class="box">
      <v-collapse class="n2"
        :collapseActive="collapseActive"
        :data="collapseData"
        :accordion="true">
      </v-collapse>
      <div class="n"></div>
    </div>
    <!-- 一段骚气的介绍 -->

    <!-- 博客&项目 -->
    <v-collapse class="home-collapse"
      :data="collapseData1"
      :collapseActive="['1','2']">
      <template slot="tabPane">
        <router-link class="box dynamic-link"
          to="Blog">(๑•̀ㅂ•́)و✧✧✧✧✧✧ 点我点我点我</router-link>
      </template>
      <template slot="card">
        <v-card :data="cardData"
          routerLink="/Project"></v-card>
      </template>
    </v-collapse>
    <!-- 博客&项目 -->
  </div>
</template>

<script>
import Collapse from "../components/Collapse";
import Card from "../components/Card";
export default {
  name: "HomePage",
  data() {
    return {
      dataFromNode: "empty",
      collapseActive: ["1"],
      collapseActive1: ["1", "2"],
      stepActive: 2,
      collapseData: [
        {
          ind: "1",
          title: "一致性 Consistency",
          content:
            "与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。"
        },
        {
          ind: "2",
          title: "反馈 Feedback",
          content:
            "控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。"
        },
        {
          ind: "3",
          title: "效率 Efficiency",
          content:
            "简化流程：设计简洁直观的操作流程；清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。"
        },
        {
          ind: "4",
          title: "可控 Controllability",
          content:
            "用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。"
        }
      ],
      collapseData1: [
        {
          ind: "1",
          type: "tabPane",
          title: "博客 Blog"
        },
        {
          ind: "2",
          type: "card",
          title: "项目 Project"
        }
      ],
      cardData: [],
    };
  },
  components: {
    "v-collapse": Collapse,
    "v-card": Card
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.getProjectList();
    },
    getDate() {
      this.axios
        .get("/api/public/giveSomeJson")
        .then(res => {
          this.dataFromNode = res.data.timer;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getProjectList() {
      this.axios
        .get("/api/project/projectList",{
          params: {
            type: 1
          }
        })
        .then(({ data: { code, data, message } }) => {
          if (code === 1000 && JSON.stringify(data) !== "{}") {
            this.cardData = data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="less" scoped>
@bg: #333;
@font-color: #fff;
@white: #fff;
@green: #42b983;
.input{
  margin-left: .1rem;
  width: 2rem;
}
</style>
