# hello-pages

一个用于验证 GitHub Pages 部署链路的「你好」测试页面。

## 本地预览

直接双击 `index.html` 即可打开，无需构建和依赖。

## 部署

推送到 `main` 分支后，`.github/workflows/deploy.yml` 会自动通过 GitHub Actions 发布页面。也可以在仓库的 Actions 页面手动运行该工作流。

站点文件为 `index.html`、`styles.css`、`script.js`，纯静态，无第三方依赖。
