<template>
  <div>
    <h4>登录体验更多新奇</h4>
    <el-form ref="form"
      class="form"
      :model="form"
      label-width="80px">
      <el-form-item label="账户">
        <el-input v-model="form.account"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"
          type="password"></el-input>
      </el-form-item>
      <el-form-item class="btn">
        <el-button type="primary"
          @click="onSubmit">登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
      <div v-show="tipsText.state">
        <el-alert class="tipsText"
          :title="tipsText.text"
          :type="tipsText.type"
          show-icon>
        </el-alert>
      </div>
    </el-form>
    <router-link to="HomePage"
      class="dynamic-link">～(￣▽￣～) 不登录，浏览逛逛... (～￣▽￣)～</router-link>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      form: {
        account: "",
        password: ""
      },
      tipsText: {
        state: false,
        text: "账户 or 密码不能为空！",
        type: "warning"
      }
    };
  },
  props: {
    collapseData: {
      type: Array,
      required: false
    }
  },
  computed: {},
  methods: {
    ...mapMutations("user", ["setUser"]),
    onSubmit() {
      if (!this.form.account || !this.form.password) {
        this.tipsText.state = true;
        return;
      }
      this.axios
        .post("/api/user/login", {
          ...this.form
        })
        .then(({ data: { code, data } }) => {
          if (code === 1000) {
            this.setUser(data.user);
            this.$router.push({ name: "HomePage" });
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
@color: #dcdfe6;

.form {
  margin: 0.2rem 2rem;
  padding: 0.5rem 0.5rem 0;
  border: 1px solid @color;
  .tipsText {
    margin-bottom: 0.2rem;
  }
}
</style>
<style lang="less">
.form {
  .el-form-item__label {
    text-align: left;
  }
  .btn {
    .el-form-item__content {
      margin-left: 0px !important;
    }
  }
}
</style>
<style>
</style>
