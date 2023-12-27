# Home (Kerusuのホームページ)

## 1. 開発環境の準備
asdfを入れてnodejsを入れる

```
asdf install
```
corepackを有効にしてyarnを入れる

```
corepack enable
asdf reshim nodejs
yarn
```
.envを作成する

```
cp .env.example .env
```
MICROCMS_SERVICE_DOMAINはxxx.microcms.ioのxxxの部分を入れる


## 2. ローカルで動かす

```
yarn dev
```