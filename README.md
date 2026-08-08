# Misora Sugiyama — Research Website

杉山未空 / Misora Sugiyama の日英研究ウェブサイトです。Hugoで生成し、Vercelで `misorasugiyama.com` に公開します。

## ローカルで確認

```bash
hugo server
```

表示されたURLをブラウザで開きます。公開用ファイルを確認する場合は次を実行します。

```bash
hugo --gc --minify
```

## 内容を更新

- 英語: `data/en/home.yaml`
- 日本語: `data/ja/home.yaml`
- デザイン: `assets/css/main.css`
- サイト設定: `hugo.yaml`

論文タイトル、著者、arXivリンクが決まったら、日英それぞれの `publications.items` を更新します。

## 公開

現在の本番サイトはVercelで公開しています。手動で最新版を公開する場合は次を実行します。

Vercelの Production・Preview・Development には、ビルド用の環境変数 `HUGO_VERSION=0.164.0` を設定しています。

```bash
npx vercel@latest deploy --prod
```

GitHubから自動公開するには、Vercelアカウントの Login Connections でGitHubを接続した後、次を一度実行します。接続後は `main` ブランチへの変更をVercelが自動でビルドし、`https://misorasugiyama.com/` へ公開します。

```bash
npx vercel@latest git connect
```
