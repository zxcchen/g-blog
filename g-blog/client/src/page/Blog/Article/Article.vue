<template>
  <div class="article">
    <div class="btn-box">
      <el-button type="primary"
        @click="updateArticle"
        icon="el-icon-edit"
        :disabled="!save"></el-button>
      <el-button type="primary"
        @click="addArticle"
        icon="el-icon-plus"
        :disabled="!save"></el-button>
      <el-button type="primary"
        @click="delArticle"
        icon="el-icon-delete"
        :disabled="!save"></el-button>
      <el-button type="primary"
        @click="toback">返回目录</el-button>
    </div>
    <div class="markdown-body"
      v-show="save">
      <h1 v-html="blog.viewTitle"></h1>
      <div class="article-tags">
        <span v-for="item in blog.viewTags"
          :key="item.value"
          class="tag">{{item.value}}</span>
      </div>
      <div v-html="blog.content"></div>
    </div>
    <div v-show="!save">
      <el-row :gutter="20"
        class="header">
        <el-col :span="12"
          :md="8"
          :sm="10">
          标题:
          <el-input v-model="blog.title"
            placeholder="请为文章添加标题"></el-input>
        </el-col>
        <el-col :span="6"
          :md="4"
          :sm="6">
          标签:
          <el-select v-model="blog.tags"
            multiple
            filterable
            allow-create
            default-first-option
            placeholder="请为文章创建索引标签">
            <el-option v-for="item in options"
              :key="item.value"
              :label="item.value"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6"
          :md="4"
          :sm="6">
          分类:
          <el-select v-model="blog.type"
            placeholder="请为文章选择分类">
            <el-option v-for="item in pageType"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6"
          :md="4"
          :sm="6">
          日期:
          <el-date-picker v-model="blog.time"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-col>
      </el-row>
      <mavon-editor class="md-editor"
        ref="md"
        placeholder='Hello World !'
        v-model="blog.markdown"
        :toolbars="toolbars"
        @save="saveContent" />
    </div>
  </div>
</template>

<script>
import { toolbars, options, pageType } from './config/index'

export default {
  name: 'Article',
  data () {
    return {
      save: true,
      options: Object.freeze(options),
      pageType: Object.freeze(pageType),
      toolbars: Object.freeze(toolbars),
      editorState: '',
      blog: {
        id: '',
        title: '',
        tags: [],
        content: '',
        markdown: '',
        time: new Date().getTime(),
        type: 0
      }
    }
  },
  props: {
    collapseData: {
      type: Array,
      required: false
    }
  },
  created () {
    if (this.$router.currentRoute.query.hasOwnProperty('id')) {
      this.blog.id = this.$router.currentRoute.query.id
      this.getArticle()
    } else {
      this.addArticle()
    }
  },
  components: {},
  methods: {
    toback () {
      this.$router.push('/Blog')
    },
    saveContent (value, render) {
      this.blog.markdown = ''
      this.save = true
      const tages = this.options.filter(v => this.blog.tags.includes(v.value))
      this.setArticle({
        title: this.blog.title,
        tags: JSON.stringify(tages),
        content: render,
        markdown: value,
        time: this.blog.time,
        type: this.blog.type
      })
    },
    reset () {
      this.blog = {
        title: '',
        tags: [],
        content: '',
        markdown: '',
        time: new Date().getTime()
      }
    },
    getArticle () {
      this.axios
        .get('/api/page/article', {
          params: {
            id: this.blog.id
          }
        })
        .then(({ data: { code, data, message } }) => {
          if (code === 1000) {
            this.blog.id = data.id
            this.blog.viewTitle = data.title
            this.blog.title = data.title
            this.blog.viewTags = data.tags.map(v => v.value)
            this.blog.tags = this.blog.viewTags
            this.blog.content = data.content
            this.blog.markdown = data.markdown
            this.blog.type = data.type
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    setArticle (obj) {
      const method = this.editorState === 'add' ? 'post' : 'put'
      if (this.editorState === 'update' && this.blog.id) {
        obj.id = this.blog.id
      }
      this.axios({
        method,
        url: '/api/page/article',
        data: obj
      }).then(({ data: { code, data, message } }) => {
        if (code === 1001) {
          this.$confirm('游客无权限发表文章', '提示', {
            confirmButtonText: '去登录',
            cancelButtonText: '再逛逛'
          })
            .then(() => {
              this.$router.push({ name: 'Login' })
            })
            .catch(() => {})
          return
        }
        data.viewTags = data.tags
        data.tags = data.tags
        data.viewTitle = data.title
        this.blog = data
        this.$message({
          message,
          type: 'success'
        })
      })
    },
    addArticle () {
      this.save = false
      this.editorState = 'add'
      this.reset()
    },
    updateArticle () {
      this.save = false
      this.editorState = 'update'
    },
    delArticle () {
      // axios实现delete请求，默认第二个参数是config，其它请求的第二个参数是data，所以delete请求数据需要包裹一层
      this.axios
        .delete('/api/page/article', {
          data: { id: this.blog.id }
        })
        .then(({ data: { code, data, message } }) => {
          if (code === 1000) {
            this.$message({
              message,
              type: 'success'
            })
            this.$router.push({ name: 'Blog' })
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    getMsg () {
      this.axios
        .get('/api/page/msg')
        .then(res => {})
        .catch(err => {
          console.log(err)
        })
    },
    addMsg () {
      this.axios
        .post('/api/page/msg')
        .then(res => {})
        .catch(err => {
          console.log(err)
        })
    },
    updateMsg () {
      this.axios
        .put('/api/page/msg')
        .then(res => {})
        .catch(err => {
          console.log(err)
        })
    },
    delMsg () {
      this.axios
        .delete('/api/page/msg')
        .then(res => {})
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="less" scoped>
@bg: #333;
@font-color: #fff;
@white: #fff;
@green: #42b983;
@gray: #a1a6b1;

.article {
  text-align: left;
  min-height: calc(~"100vh - 64px");
  .btn-box {
    position: fixed;
    right: 0.5rem;
    top: 2.5rem;
    z-index: 1501;
  }
  .el-button {
    display: block;
  }
  .el-button + .el-button {
    margin: 0.1rem 0;
  }
  .markdown-body {
    margin-bottom: 0.2rem;
    .article-tags {
      margin-bottom: 0.1rem;
      .tag {
        padding: 0 0.05rem;
        background: @gray;
        text-align: center;
        display: inline-block;
        margin-right: 0.05rem;
        cursor: default;
      }
    }
  }
  .header {
    margin: 0 !important;
    padding: 0.2rem 0;
    background: @white;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.157), 0 0px 0px rgba(0, 0, 0, 0.227);
  }
  .md-editor {
    height: 5rem;
  }
}
</style>
<style lang="less">
.v-note-wrapper .v-note-op.shadow {
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0.157), 0 1px 4px rgba(0, 0, 0, 0.227) !important;
}
</style>
