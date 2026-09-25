# mentsu-rootpath

ECMAScript Modules の開発環境で、プロジェクトルートからの相対パスを絶対パスに解決するクラスを提供します。

## インストール

Node.js 20.x が必要です（CI がビルド対象とするバージョン）。

```sh
npm install @openreachtech/mentsu-rootpath
```

ES モジュール（`"type": "module"`）です。ESM の `import` 構文でインポートしてください。

## 使い方

default export は、`process.cwd()` を基準に解決する `RootPath` のインスタンスです。基準はパッケージを最初にインポートした時点で決まります。同じインスタンスは `rootPath` としても export されています。

プロジェクトルートが `/User/your-name/project-name/` とします。

```
import rootPath from '@openreachtech/mentsu-rootpath'

console.log(
  rootPath.to('app/tools/')
)
// '/User/your-name/project-name/app/tools'
```

別のディレクトリを基準にする場合は、`base` を渡してインスタンスを生成します。

```
import { RootPath } from '@openreachtech/mentsu-rootpath'

const alphaRootPath = RootPath.create({
  base: '/User/your-name/another-project/',
})

console.log(
  alphaRootPath.to('app/tools/target.js')
)
// '/User/your-name/another-project/app/tools/target.js'
```

## コントリビューション

バグ報告・機能要望・コード貢献を歓迎します。

GitHub Issues からお気軽にご連絡ください。

```sh
git clone https://github.com/openreachtech/mentsu-rootpath.git
cd mentsu-rootpath
npm install
npm run lint
npm test
```

## ライセンス

本プロジェクトは Apache License 2.0 で公開されています。

詳細は [LICENSE ファイル](./LICENSE) を参照してください。

## 開発者

[Open Reach Tech Inc.](https://openreach.tech)

## 著作権

© 2025 Open Reach Tech Inc.
