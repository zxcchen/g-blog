module.exports = {
  dbPath: 'mongodb://localhost:27017/myproject',
  port: '3000',
  table: 'documents',
  articleType: [
    { label: '前端',name:'code' },
    { label: '后台',name:'db' },
    { label: '生活',name:'life' },
    { label: '轨迹',name:'folder' },
    { label: '标签',name:'label' },
    { label: '说说',name:'idea' },
  ]
};