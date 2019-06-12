<template>
  <div class="resume">
    <el-row :gutter="20" class="header">
      <el-col :span="24">Resume</el-col>
    </el-row>
    <br/>
    <el-row :gutter="20">
      <el-col :span="6">
        <img class="head-portrait" src="/static/img/food.png" />
      </el-col>
      <el-col :span="18">
        <p>陈琪</p>
        <p>13269044321 | 2812349771@qq.com</p>
      </el-col>
    </el-row>
    <br />
    <el-row :gutter="20">
      <el-col :span="24"
        class="title">个人总结</el-col>
    </el-row>
    <hr />
    <el-row :gutter="20">
      <el-col :span="24">掌握移动端和PC端开发，有微信及小程序开发经验。工作积极主动，热爱造轮子，专研前端技术。</el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="10">github:<a href="https://github.com/zxcchen">https://github.com/zxcchen</a></el-col>
      <el-col :span="10">技术博客:<a href="http://www.bling.ink">http://www.bling.ink</a></el-col>
    </el-row>
    <br />
    <el-row :gutter="20">
      <el-col :span="24"
        class="title">工作技能</el-col>
    </el-row>
    <hr />
    <el-row :gutter="20">
      <el-col :span="24">
        <ol>
          <li>掌握HTML5、CSS3，了解常用布局，了解常用样式框架，能脱离框架精准还原UI设计图并兼容主流浏览器; </li>
          <li>掌握Vue，日常结合ElementUI+Vue+ES6+Webpack+Node.js开发; </li>
          <li>掌握移动端开发，如:微信、小程序开发;掌握PC开发，开发并兼容iphone、Android、windows、ios平台; </li>
          <li>掌握面向对象，掌握ES6语法，熟练使用常用框架，熟悉node及相关构建工具，如npm、webpack; </li>
          <li>掌握主流插件，能脱离插件使用JavaScript原生实现;</li>
          <li>熟练使用各类工具辅助开发及测试; </li>
          <li>喜欢阅读源码，善于优化代码，具有良好编写规范，注重交互及用户体验;</li>
        </ol>
      </el-col>
    </el-row>
    <br />
    <el-row :gutter="20">
      <el-col :span="24"
        class="title">工作经历</el-col>
    </el-row>
    <hr />
    <el-row :gutter="20">
      <el-col :span="10">平安科技</el-col>
      <el-col :span="10">2018.07-至今</el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">1.内部审批系统:多角色在线审批保单的平台，开发团队:1人。</el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">
        <p>工作内容:</p>
        <ol>
          <li>负责内部审批系统的基础框架搭建，ElementUI+Vue+ES6+Webpack搭建框架环境。</li>
          <li>编写前端文档;维护系统的持续开发迭代，项目上线部署等工作。</li>
          <li>平台支持多角色多权限控制页面;支持在线导入10万条数据，高效利用缓存进行大数据量的存储分配。</li>
          <li>前端实现在线动态分页、增删查改及排序功能。结合animate优化用户体验。</li>
        </ol>
      </el-col>
    </el-row>
    <br />
    <el-row :gutter="20">
      <el-col :span="24">2.月报系统:多重数据与图表结合分析平台，开发团队:8人。</el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">
        <p>工作内容:</p>
        <ol>
          <li>负责月报系统的基础框架搭建，ElementUI+Vue+ES6+Webpack搭建框架环境。</li>
          <li>构建项目基础模块、封装公共组件、确立代码规范。</li>
          <li>负责核心代码编写，将多重数据与页面图表结合，包含地图多级下钻联动，菜单多级下钻联动图标等功能。 </li>
          <li>负责与中台、数据库、产品等多部门联调协作，参与前端文档编写、接口文档编写。 </li>
          <li>指导组员在项目上进行二次开发，定期优化、审查项目代码。</li>
        </ol>
      </el-col>
    </el-row>
    <br />
    <el-row :gutter="20">
      <el-col :span="10">社源传媒有限公司</el-col>
      <el-col :span="10">2016.07-2018.07</el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">1.音频小程序+后台管理系统:支持在线音频直播、在线聊天室、有声阅读等功能。</el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">参与页面结构规划。全栈开发系统，负责从nginx配置、mysqli建表、页面编写、部分接口编写、联调测试等工作。实现后台管理系统与小程序的数据联立，状态联立。</el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">2.微信开发:活动吧+后台管理系统</el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">负责页面布局，处理表单交互、跨域、实现不同机型下兼容。实现后台管理系统查看用户信息、一键导出用户数据、互动留言等功能。在项目中我负责重构代码，对项目中的逻辑从新梳理，做到优化代码结构，抽离公共逻辑，实现代码高复用 。</el-col>
    </el-row>
    <br/>
    <el-row :gutter="20">
      <el-col :span="10">技术博客</el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">以node为后台，从零开发博客系统，博客覆盖了一个健全的web应用所应有的基本后端功能，包括内容管理，角色管理，资源cache控制，应用数据cache，无缝热更新。</el-col>
    </el-row>
    <br/>
    <el-row :gutter="20">
      <el-col :span="24"
        class="title">教育背景</el-col>
    </el-row>
    <hr />
    <el-row :gutter="20">
      <el-col :span="10">江汉大学</el-col>
      <el-col :span="10">2013.3-2015.7</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name:"Resume",
  data() {
    return {};
  },
  methods: {}
};
</script> 

<style lang="less" scoped>
@bg: #333;
@font-color: #fff;
@white: #fff;
@green: #42b983;

.resume {
  text-align: left;
  .header{
    background: @bg;
    color: @white;
  }
  .head-portrait{
    width: 1.5rem;
  }
  .title {
    border-left: 0.05rem solid @bg;
    font-weight: bolder;
  }
  ol{
    margin-left: .5rem;
  }
}
</style>
