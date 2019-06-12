<template>
  <el-collapse v-model="active"
    @change="handleChange"
    :accordion="accordion">
    <el-collapse-item v-for="item in data"
      :key="item.ind"
      :name="item.ind"
      :title="item.title">
      <div v-if="item.type=='tabPane'">
        <slot name="tabPane"></slot>
      </div>
      <div v-if="item.type=='card'">
        <slot name="card"></slot>
      </div>
      <div v-else
        v-html="item.content"></div>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
export default {
  data() {
    return {
      active: this.collapseActive
    };
  },
  props: {
    accordion: {
      type: Boolean,
      required: false,
      default() {
        return false;
      }
    },
    collapseActive: {
      type: Array,
      required: false,
      default() {
        return ["1"];
      }
    },
    data: {
      type: Array,
      required: false
    }
  },
  components: {},
  methods: {
    handleChange(val) {
    }
  }
};
</script> 

<style lang="less" scoped>
@bg: #333;
@font-color: #fff;
@white: #fff;
@green: #42b983;

.article-tags {
  margin-bottom: 0.1rem;
  .tag {
    padding: 0 0.05rem;
    background: #a1a6b1;
    text-align: center;
    display: inline-block;
    margin-right: 0.05rem;
    cursor: default;
  }
}
</style>
