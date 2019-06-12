<template>
  <div class="projectView">
    <!-- 操作按钮 -->
    <div class="btn-box">
      <el-button type="primary"
        @click="updateProject"
        icon="el-icon-edit"></el-button>
      <el-button type="primary"
        @click="delProject"
        icon="el-icon-delete"></el-button>
    </div>
    <!-- 操作按钮 -->

    <!-- 项目代码 -->
    <!-- <iframe height="600"
      style="width: 100%;"
      scrolling="no"
      title="Day 6: Are You Gonna Eat That? (Interactive pen)"
      src="//codepen.io/dustybutton/embed/ErOYRR/?height=300&theme-id=36183&default-tab=css,result"
      frameborder="no"
      allowtransparency="true"
      allowfullscreen="true">
      See the Pen <a href='https://codepen.io/dustybutton/pen/ErOYRR/'>Day 6: Are You Gonna Eat That? (Interactive pen)</a> by Dusty Button (Tee)
      (<a href='https://codepen.io/dustybutton'>@dustybutton</a>) on <a href='https://codepen.io'>CodePen</a>.
    </iframe> -->
    <!-- 项目代码 -->
  </div>
</template>

<script>
export default {
  name: "ProjectView",
  data() {
    return {};
  },
  props: {},
  created(){
  },
  methods: {
    updateProject() {
      this.axios
        .put("/api/project/project")
        .then(res => {})
        .catch(err => {
          console.log(err);
        });
    },
    delProject() {
      this.axios
        .delete("/api/project/project",{
          data: { id: this.blog.id }
        })
        .then(res => {})
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

.projectView {
  .btn-box {
    position: absolute;
    right: 0.5rem;
    top: 1rem;
    z-index: 1501;
  }
}
</style>
