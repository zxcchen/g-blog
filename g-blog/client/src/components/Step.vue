<template>
  <el-steps :active="stepActive"
    align-center>
    <el-step v-for="(item,ind) in stepData"
      :key="ind"
      :title="item.title"
      :description="item.description"></el-step>
  </el-steps>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    stepActive: {
      type: Number,
      required: false,
      default(){
        return 1;
      }
    },
    stepData: {
      type: Array,
      required: false
    }
  },
  methods: {
    handleChange(val) {}
  }
};
</script> 

<style lang="less" scoped>
@bg: #333;
@font-color: #fff;
@white: #fff;
@green: #42b983;
</style>
