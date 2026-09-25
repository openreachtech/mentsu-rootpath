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

```js
import rootPath from '@openreachtech/mentsu-rootpath'

console.log(
  rootPath.to('app/tools/')
)
// '/User/your-name/project-name/app/tools'
```

別のディレクトリを基準にする場合は、`base` を渡してインスタンスを生成します。

```js
import { RootPath } from '@openreachtech/mentsu-rootpath'

const alphaRootPath = RootPath.create({
  base: '/User/your-name/another-project/',
})

console.log(
  alphaRootPath.to('app/tools/target.js')
)
// '/User/your-name/another-project/app/tools/target.js'
```

## API

クラスメンバーは以下の表記に従って記述します。

| notation | members |
| :-- | :-- |
| `#instanceProperty` | instance property |
| `#instanceMethod()` | instance method |
| `#get:instanceGetter` | instance getter |
| `#set:instanceSetter` | instance setter |
| `.staticProperty` | static property |
| `.staticMethod()` | static method |
| `.get:staticGetter` | static getter |
| `.set:staticSetter` | static setter |

### エクスポート

| export | 説明 |
| :-- | :-- |
| `default` | パッケージを最初にインポートした時点で `RootPath.create()` により生成される `RootPath` のインスタンス。 |
| `rootPath` | `default` と同じインスタンス。 |
| `RootPath` | クラス本体。 |

### `.create()`

新しいインスタンスを返すファクトリーメソッドです。

```js
RootPath.create({ base })
```

| パラメーター | 型 | デフォルト | 説明 |
| :-- | :-- | :-- | :-- |
| `base` | `string` | `process.cwd()` | パスを解決する基準のディレクトリ。 |

`RootPath` のインスタンスを返します。

### `#to()`

[`path.resolve()`](https://nodejs.org/api/path.html#pathresolvepaths) で、`base` を基準にパスを解決します。

```js
rootPath.to(targetPath)
```

| パラメーター | 型 | 説明 |
| :-- | :-- | :-- |
| `targetPath` | `string` | 解決するパス。絶対パスは正規化したうえでそのまま返します。 |

末尾のスラッシュを含まない絶対パスを `string` で返します。

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
