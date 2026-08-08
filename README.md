# Misora Sugiyama — Research Website

杉山未空 / Misora Sugiyama の日英研究ウェブサイトです。Hugoで生成し、Vercelで `misorasugiyama.com` に自動公開します。

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

GitHubリポジトリはVercelプロジェクトに接続されています。`main` ブランチへ変更を送ると、VercelがHugoをビルドして `https://misorasugiyama.com/` へ自動公開します。
