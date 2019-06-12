export const toolbars = {
    bold: true, // 粗体
    italic: true, // 斜体
    header: true, // 标题
    underline: true, // 下划线
    strikethrough: true, // 中划线
    mark: true, // 标记
    superscript: true, // 上角标
    subscript: true, // 下角标
    quote: true, // 引用
    ol: true, // 有序列表
    ul: true, // 无序列表
    link: true, // 链接
    imagelink: true, // 图片链接
    code: true, // code
    table: true, // 表格
    fullscreen: false, // 全屏编辑
    readmodel: true, // 沉浸式阅读
    htmlcode: true, // 展示html源码
    help: true, // 帮助
    undo: true, // 上一步
    redo: true, // 下一步
    trash: true, // 清空
    save: true, // 保存（触发events中的save事件）
    navigation: true, // 导航目录
    alignleft: true, // 左对齐
    aligncenter: true, // 居中
    alignright: true, // 右对齐
    subfield: true, // 单双栏模式
    preview: true // 预览
};

export const options = [
  {
    value: "HTML",
    type: 1
  },
  {
    value: "CSS",
    type: 2
  },
  {
    value: "JavaScript",
    type: 3
  },
  {
    value: "vue",
    type: 4
  }
];

export const pageType = [
  {
    value: 1,
    label: "前端"
  },
  {
    value: 2,
    label: "后台"
  },
  {
    value: 3,
    label: "生活"
  }
];