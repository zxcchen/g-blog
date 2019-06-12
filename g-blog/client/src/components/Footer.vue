<template>
  <footer class="footer">
    <div>
      <router-link to="ChatRoom">在线聊天室</router-link>
    </div>
    <div class="n3"></div>
    <div>
      <router-link to="Resume">ABOUT ME</router-link>
    </div>
  </footer>
</template>
<style lang="less" scoped>
@bg: #333;
@font-color: white;

.footer {
  position: absolute;
  bottom: -.1rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  height: 0.5rem;
  background-color: @bg;
  color: @font-color;
  z-index: 2000;
  & > div {
    flex: 1;
    height: 100%;
    border-right: 1px solid @font-color;
    a{
      display: inline-block;
      width: 100%;
      height: 100%;
      color: @font-color;
    }
  }
  .n3 {
    flex: 3;
  }
}
</style>
