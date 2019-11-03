<template>
  <div class="resume">
    <el-row :gutter="20"
      class="header">
      <el-col :span="24">Resume</el-col>
    </el-row>
    <br />
    <el-row :gutter="20">
      <el-col :span="6">
        <img class="head-portrait"
          src="/static/img/person.png" />
      </el-col>
      <el-col :span="18">
        <p>陈琪</p>
        <p>13269044321 | 2812349771@qq.com</p>
        <br />
        <p>
          <span>github : <a href="https://github.com/zxcchen">https://github.com/zxcchen</a></span>
          <span>技术博客 : <a href="http://www.bling.ink">http://www.bling.ink</a></span>
        </p>
      </el-col>
    </el-row>
    <br />
    <el-row :gutter="20">
      <el-col :span="24"
        class="title">工作技能</el-col>
    </el-row>
    <hr />
    <br />
    <el-row :gutter="20">
      <el-col :span="24">
        <ol>
          <li>基础扎实，熟练使用各种前端技术，包括HTML(5)/CSS(3)/JavaScript(ES6);</li>
          <li>熟悉组件化开发，熟悉使用Vue，了解其基本原理; </li>
          <li>熟练使用前端自动化构建工具，熟悉Webpack/Babel/ESlint; </li>
          <li>日常结合ElementUI/Vue/ES6/Webpack/Node.js开发; </li>
          <li>了解HTTP协议，了解TCP的基本工作原理，熟悉各种浏览器平台的特性，能够很好的解决兼容问题，了解前端安全知识，对页面性能优化有一定的见解; </li>
          <li>分析能力强，善于沟通，喜欢阅读源码，善于优化代码，具有良好编写规范，注重交互及用户体验;</li>
        </ol>
      </el-col>
    </el-row>
    <br />
    <el-row :gutter="20">
      <el-col :span="24"
        class="title">工作经历</el-col>
    </el-row>
    <hr />
    <br />
    <el-row :gutter="20">
      <el-col :span="10"><b>稿定科技</b></el-col>
      <el-col :span="10">2019.08-至今</el-col>
    </el-row>
    <br />
    <!-- <el-row :gutter="20">
      <el-col :span="24">1.图标组件</el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">
        <p>工作内容:</p>
        <ol>
          <li>...</li>
        </ol>
      </el-col>
    </el-row> -->
    <el-row :gutter="20">
      <el-col :span="24">1.PPT组件</el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">
        <p>工作内容:</p>
        <ol>
          <li>结合Add-ins开发PPT插件</li>
        </ol>
      </el-col>
      <el-col :span="24">
        <p>工作难点:</p>
        <ol>
          <li>Add-ins。</li>
        </ol>
      </el-col>
      <el-col :span="24">
        <p>工作成果:</p>
        <ol>
          <li>...</li>
        </ol>
      </el-col>
    </el-row>
    <br />
    <el-row :gutter="20">
      <el-col :span="10"><b>平安科技</b></el-col>
      <el-col :span="10">2018.07-2019.08</el-col>
    </el-row>
    <br />
    <el-row :gutter="20">
      <el-col :span="24">1.财务系统:多重数据与图表结合分析平台，开发团队:8人。</el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">
        <p>工作内容:</p>
        <ol>
          <li>负责报表系统的基础框架搭建，ElementUI+ECharts+Vue+Webpack+Node.js搭建框架环境。</li>
          <li>构建项目基础模块、封装公共组件。</li>
          <li>确立代码规范，结合husky+ESlint+Stylelint进行检验。</li>
          <li>使用gitlab管理代码，使用docker发布代码。</li>
          <li>负责与中台、数据库、产品等多部门联调协作，参与前端文档编写、接口文档编写。 </li>
          <li>负责核心代码编写，将多重数据与页面图表结合，包含地图多级下钻联动，菜单多级下钻联动图标等功能。 </li>
          <li>指导组员在项目上进行二次开发，定期优化、审查项目代码，定期参与与组织技能分享会。</li>
          <li>通过阅读框架源码，攻克框架在不同平台上出差异性。</li>
          <li>二期对该平台进行全面重构，最终实现动态配置管理。</li>
        </ol>
      </el-col>
      <el-col :span="24">
        <p>工作难点:</p>
        <ol>
          <li>多系统嵌入，多角色管理。</li>
          <li>业务模块下钻多个指标，维护指标之间的关联状态(多对多)。</li>
          <li>新增指标，根据在线录入的公式，动态生成公式图谱。 </li>
          <li>一键修改主题。</li>
        </ol>
      </el-col>
      <el-col :span="24">
        <p>工作成果:</p>
        <ol>
          <li>单点登陆，解决跨平台二次登陆问题。</li>
          <li>剥离强耦合在代码中的业务指标规则，动态建立树形结构的关联表，大量减少打包的代码体积，实现平台数据配置化关联。</li>
          <li>代码打包体积减小26.7%。</li>
        </ol>
      </el-col>
    </el-row>
    <br />
    <el-row :gutter="20">
      <el-col :span="24">2.内部审批系统:多角色在线审批保单的平台，开发团队:1人。</el-col>
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
      <el-col :span="10"><b>社源传媒有限公司</b></el-col>
      <el-col :span="10">2016.07-2018.07</el-col>
    </el-row>
    <br />
    <el-row :gutter="20">
      <el-col :span="24">1.音频小程序+后台管理系统:支持在线音频直播、在线聊天室、有声阅读等功能。</el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">
        <p>工作内容:</p>
        <ol>
          <li>参与页面结构规划。全栈开发系统，负责从nginx配置、mysqli建表、页面编写、部分接口编写、联调测试等工作。</li>
          <li>实现后台管理系统与小程序的数据联立，状态联立。</li>
        </ol>
      </el-col>
    </el-row>
    <br />
    <el-row :gutter="20">
      <el-col :span="24">2.微信开发:活动吧+后台管理系统</el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">
        <p>工作内容:</p>
        <ol>
          <li>负责页面布局，处理表单交互、跨域、实现不同机型下兼容。实现后台管理系统查看用户信息、一键导出用户数据、互动留言等功能。</li>
          <li>重构代码，对项目中的逻辑从新梳理，做到优化代码结构，抽离公共逻辑，实现代码高复用 。</li>
        </ol>
      </el-col>
    </el-row>
    <br />
    <el-row :gutter="20">
      <el-col :span="10"><b>技术博客</b></el-col>
    </el-row>
    <br />
    <el-row :gutter="20">
      <el-col :span="24">
        <p>工作内容:</p>
        <ol>
          <li>以node为后台，从零开发博客系统，博客覆盖了一个健全的web应用所应有的基本后端功能。包括内容管理，角色管理，资源cache控制，应用数据cache，无缝热更新功能。</li>
        </ol>
      </el-col>
    </el-row>
    <br />
    <el-row :gutter="20">
      <el-col :span="24"
        class="title">教育背景</el-col>
    </el-row>
    <hr />
    <br />
    <el-row :gutter="20">
      <el-col :span="10">江汉大学</el-col>
      <el-col :span="10">2013.3-2015.7</el-col>
      <el-col :span="4">专升本</el-col>
    </el-row>
    <br />
    <el-row :gutter="20">
      <el-col :span="24"
        class="title">喜欢阅读的书籍及网站</el-col>
    </el-row>
    <hr />
    <br />
    <el-row :gutter="20">
      <el-col :span="24">书籍：JavaScript高级程序设计、Node.js高级编程、重构、数据结构与算法描述、JavaScript模式</el-col>
      <el-col :span="24">网站：MDN、掘金、Segmentfault、github</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped>
@bg: #333;
@font-color: #fff;
@white: #fff;
@green: #42b983;

.resume {
  margin-top: 1rem;
  text-align: left;

  .header {
    background: @bg;
    color: @white;
  }

  .head-portrait {
    width: 1.5rem;
  }

  .title {
    border-left: 0.05rem solid @bg;
    font-weight: bolder;
  }

  ol {
    margin-left: 0.5rem;
  }
}
</style>
