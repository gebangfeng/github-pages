const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "github-pages",
  description: 'vdoing博客主题模板',
  base: '/github-pages/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,
  // vssue 评论插件
  plugins: [
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: "[Comment]<%- frontmatter.title %>",
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: "5630fd6cad52a14efcf4",
        clientSecret: "79081cfbda111a9d4ef52cc097244287dd300267",
        owner: "gebangfeng",
        repo: "github-pages",
      },
    ],
  ],
}
