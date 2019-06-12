<template>
  <div class="float-meau">
    <!-- <div></div>
    <div></div>
    <div></div> -->
  </div>
</template>
<style lang="less" scoped>
@bg: #333;
@font-color: white;

.float-meau {
  position: fixed;
  bottom: 1rem;
  right: .5rem;
  width: .5rem;
  height: .5rem;
  background-color: @bg;
  color: @font-color;
  & > div{
    border: 1px solid @font-color;
  }
}
</style>
