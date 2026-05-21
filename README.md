# Duo Hike China

Duolingo 中国徒步地图打卡器。每完成一小关，路线从北京往拉萨前进一步。

## 第一版功能

- 北京到拉萨真实路线叙事
- 每小关推进 2 / 5 / 10 km
- 今日小关、连续天数、总进度
- 路线节点解锁
- 手机响应式布局
- PWA manifest 与离线缓存
- 浏览器本地保存进度

## 本地预览

在项目目录启动一个静态服务器：

```bash
python3 -m http.server 4173
```

然后打开：

```text
http://localhost:4173
```

## Cloudflare Pages

这个项目不需要构建步骤。

- Framework preset: `None`
- Build command: 留空或 `exit 0`
- Build output directory: `/`

把代码推到 GitHub 后，在 Cloudflare Pages 选择该仓库即可自动部署。

## 数据说明

第一版数据保存在当前浏览器的 `localStorage`。换设备或换浏览器不会自动同步。后续可以增加账号同步、GitHub Gist 同步或 Cloudflare KV/D1。
