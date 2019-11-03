<template>
  <div class="project">
    <!-- 操作按钮 -->
    <div class="btn-box">
      <el-button type="primary"
        @click="dialogFormVisible = true"
        icon="el-icon-plus"></el-button>
    </div>
    <!-- 操作按钮 -->

    <el-form :model="form"
      style="border:1px solid;margin-bottom:1rem;padding:0.2rem;">
      <el-form-item label="指标名称"
        label-width="80px">
        <el-input placeholder="请输入指标名称"
          :validate-event="true "
          v-model="quotaValue"
          clearable />
        <el-input placeholder="请输入指标代码"
          v-model="quotaCode"
          clearable />
      </el-form-item>
      <el-form-item label="按钮类型"
        label-width="80px">
        <el-radio-group v-model="selectType">
          <el-radio label="select">select</el-radio>
          <el-radio label="radio">radio</el-radio>
          <el-radio label="checkbox">checkbox</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="指标名称"
        label-width="80px">
        <div style="border:1px solid #d3d3d3;padding:0.2rem;">
          
          <hr style="margin:0.2rem 0;"/>
          <el-cascader :options="options1"
          ref="ooo"
          :props="{ checkStrictly: true }"
          @change="handleChange"
          filterable
          clearable />
          <hr style="margin:0.2rem 0;"/>
          <div v-for="item in rows"
          style="border:1px solid #d3d3d3;margin-bottom:0.2rem;padding:0.1rem;"
          :key="item.value">
          <span style="display:inline-block;min-width:2rem;">{{item.value}}</span>
          <span>
            <el-select v-model="item.selectType"
              placeholder="请选择">
              <el-option v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </span>
        </div>
        </div>
      </el-form-item>
      <el-form-item label=""
        label-width="80px">
        <el-button type="primary"
          @click="produceConfig">提 交</el-button>
      </el-form-item>
    </el-form>

    <div style="margin-bottom: 0.5rem;padding:0.2rem;border:0.01rem solid #333;">
      <h4 style="margin:-0.2rem -0.2rem 0;background:#333;color:#fff;text-index:2em;">每日一图</h4>
      · <router-link to="/Project/KnowledgeMap/WindowPerformance"
        style="color: #409EFF;">WindowPerformance</router-link>
    </div>

    <!-- 项目详情 -->
    <v-card :data="cardData"
      routerLink="/Project/ProjectView">
      <h4 slot="header"
        class="card-header">天气预报</h4>
    </v-card>
    <!-- 项目详情 -->

    <!-- 新建的项目信息 -->
    <el-dialog class="form"
      title="项目信息"
      :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="标题"
          label-width="40px">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="路径"
          label-width="40px">
          <el-input v-model="form.src"></el-input>
        </el-form-item>
        <el-form-item label="分类"
          label-width="40px">
          <el-input v-model="form.type"></el-input>
        </el-form-item>
        <el-form-item label="配图"
          label-width="40px">
          <el-upload class="upload-demo"
            action="http://localhost:3000/api/public/upload"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-success="handleSuccess"
            :limit="1"
            :file-list="fileList"
            list-type="picture">
            <el-button size="small"
              type="primary">点击上传</el-button>
            <div slot="tip"
              class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer"
        class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary"
          @click="addProject">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 新建的项目信息 -->
  </div>
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "Project",
  data() {
    return {
      cardData: [],
      dialogFormVisible: false,
      form: {
        title: "",
        src: "",
        type: "",
        img: ""
      },
      fileList: [],
      selectType: "select",
      options:[
        {
          value: "select",
          label: "select",
        },
        {
          value: "radio",
          label: "radio",
        },
        {
          value: "checkbox",
          label: "checkbox",
        }
      ],
      options1: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致"
                },
                {
                  value: "fankui",
                  label: "反馈"
                },
                {
                  value: "xiaolv",
                  label: "效率"
                },
                {
                  value: "kekong",
                  label: "可控"
                }
              ]
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航"
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航"
                }
              ]
            }
          ]
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局"
                },
                {
                  value: "color",
                  label: "Color 色彩"
                },
                {
                  value: "typography",
                  label: "Typography 字体"
                },
                {
                  value: "icon",
                  label: "Icon 图标"
                },
                {
                  value: "button",
                  label: "Button 按钮"
                }
              ]
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框"
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框"
                },
                {
                  value: "input",
                  label: "Input 输入框"
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器"
                },
                {
                  value: "select",
                  label: "Select 选择器"
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器"
                },
                {
                  value: "switch",
                  label: "Switch 开关"
                },
                {
                  value: "slider",
                  label: "Slider 滑块"
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器"
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器"
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器"
                },
                {
                  value: "upload",
                  label: "Upload 上传"
                },
                {
                  value: "rate",
                  label: "Rate 评分"
                },
                {
                  value: "form",
                  label: "Form 表单"
                }
              ]
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格"
                },
                {
                  value: "tag",
                  label: "Tag 标签"
                },
                {
                  value: "progress",
                  label: "Progress 进度条"
                },
                {
                  value: "tree",
                  label: "Tree 树形控件"
                },
                {
                  value: "pagination",
                  label: "Pagination 分页"
                },
                {
                  value: "badge",
                  label: "Badge 标记"
                }
              ]
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告"
                },
                {
                  value: "loading",
                  label: "Loading 加载"
                },
                {
                  value: "message",
                  label: "Message 消息提示"
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框"
                },
                {
                  value: "notification",
                  label: "Notification 通知"
                }
              ]
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单"
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页"
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑"
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单"
                },
                {
                  value: "steps",
                  label: "Steps 步骤条"
                }
              ]
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框"
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示"
                },
                {
                  value: "popover",
                  label: "Popover 弹出框"
                },
                {
                  value: "card",
                  label: "Card 卡片"
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯"
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板"
                }
              ]
            }
          ]
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components"
            },
            {
              value: "sketch",
              label: "Sketch Templates"
            },
            {
              value: "jiaohu",
              label: "组件交互文档"
            }
          ]
        }
      ],
      rows: [],
      quotaValue: "",
      quotaCode: "",
      config:{},
    };
  },
  components: {
    "v-card": Card
  },
  created() {
    this.getProjectList();
  },
  methods: {
    handleChange(value) {
      this.$nextTick(() => {
        this.rows.push({
          value: this.$refs.ooo.$data.presentText,
          label: value,
          selectType: "select"
        });
      });
    },
    produceConfig(){
      let o = {
        label:'',
        value:'',
        type:'',
        children:[],
        rule:'',
      };
      o.label = this.quotaValue;
      o.value = this.quotaCode;
      o.type = this.selectType;

      // this.config = o;
      console.log(o)
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleSuccess(response) {
      let {
        data: { src: path }
      } = response;
      this.form.img = path;
    },
    getProjectList() {
      this.axios
        .get("/api/project/projectList", {
          params: {
            type: 1
          }
        })
        .then(({ data: { code, data, message } }) => {
          if (code === 1000) {
            data.forEach(
              item =>
                (item.img = "http://localhost:3000/staticResource/" + item.img)
            );
            this.cardData = data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getProject() {
      this.axios
        .get("/api/project/project", {
          params: {
            id: this.currId
          }
        })
        .then(({ data: { code, data, message } }) => {
          if (code === 1000) {
            this.$message({
              message,
              type: "success"
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    addProject() {
      this.axios
        .post("/api/project/project", {
          ...this.form
        })
        .then(({ data: { code, data, message } }) => {
          if (code === 1000) {
            this.$message({
              message,
              type: "success"
            });
            this.dialogFormVisible = false;
            data.forEach(
              item =>
                (item.img = "http://localhost:3000/staticResource/" + item.img)
            );
            this.cardData.push(...data);
          } else if (code === 1001) {
            this.$confirm("游客无权限发表文章", "提示", {
              confirmButtonText: "去登录",
              cancelButtonText: "再逛逛"
            })
              .then(() => {
                this.$router.push({ name: "Login" });
              })
              .catch(() => {});
            return;
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

.project {
  text-align: left;
  .btn-box {
    position: fixed;
    right: 0.5rem;
    top: 2.5rem;
    z-index: 1501;
  }
}
</style>
