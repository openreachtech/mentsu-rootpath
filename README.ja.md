# mentsu-rootpath

# 概要

ECMAScript Modules の開発環境で、プロジェクトルートからの相対位置でディレクトリやファイルを生成するクラスを提供します。

# インストール

Node.jsが必要です。まだインストールされていない場合は、先にインストールしてください。

| ツール | バージョン |
| :-- | :-- |
| Node.js | ^20.14.0 |
| npm | ^10.9.2 |

## `.npmrc` のセットアップ

プロジェクトのルートディレクトリに `.npmrc` ファイルを作成し、必要な設定を追加してください。

`.npmrc` ファイルに以下の行を追加してください。

```
@openreachtech:registry=https://npm.pkg.github.com
```

## コマンド

以下のコマンドで `mentsu-rootpath` をインストールできます：

```
npm install @openreachtech/mentsu-rootpath
```

# 使い方

プロジェクトルートが `/User/your-name/project-name/` とします。

```
const rootPath = RootPath.create()

console.log(
  rootPath.to('app/tools/')
)
// '//User/your-name/project-name/app/tools'
```

```
const rootPath = RootPath.create()

console.log(
  rootPath.to('app/tools/target.js')
)
// '//User/your-name/project-name/app/tools/target.js'
```

# ライセンス

このプロジェクトは MIT ライセンスの下でリリースされています。

詳細は [LICENSE](./LICENSE) をご覧ください。

# コントリビューション

バグレポート、機能リクエスト、コード貢献を歓迎します。

GitHub の Issues を通じてお気軽にご連絡ください。


```sh
git clone https://github.com/openreachtech/mentsu-rootpath.git
cd mentsu-rootpath
npm install
npm run lint
npm test
```

# 開発者

[Open Reach Tech inc.](https://openreach.tech)

# 著作権

© 2025 Open Reach Tech inc.
