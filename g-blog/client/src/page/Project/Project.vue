<template>
  <div class="project">
    <!-- 操作按钮 -->
    <div class="btn-box">
      <el-button type="primary"
        @click="dialogFormVisible = true"
        icon="el-icon-plus"></el-button>
    </div>
    <!-- 操作按钮 -->

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
            :file-list="form.img"
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
        img: []
      }
    };
  },
  components: {
    "v-card": Card
  },
  created() {
    this.getProjectList();
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    setItemForm() {},
    getProjectList() {
      this.axios
        .get("/api/project/projectList",{
          params: {
            type: 1
          }
        })
        .then(({ data: { code, data, message } }) => {
          if (code === 1000) {
            this.cardData.forEach(item=>item.img.split(','));
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
      this.form.img = this.form.img.join(',');
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
            this.cardData = data;
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
