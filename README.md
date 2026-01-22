# CookCamp2

CookCamp2 は、料理・レシピ紹介のためのWebページとして作られたプロジェクトです。  

## デモ
https://iris-848.github.io/CookCamp2/

## 動作環境
- Google Chrome / Microsoft Edge / Safari で動作確認済み

## 使用技術
- HTML / CSS / JavaScript

### ライブラリ(CDN)
本プロジェクトはビルド不要で、外部ライブラリを CDN 経由で読み込んでいます。

- jQuery: code.jquery.com
- Slick Carousel: jsDelivr
- Modaal: jsDelivr

## 特徴

- ヘッダー画像の自動再生カルーセル（Slick Carousel）
  - ドットナビ付き
  - 2秒間隔で自動スライド
- レシピサムネイルクリックでモーダル表示（Modaal）
- レシピカテゴリ別のシェア機能
  - シェアボタンクリックでアラート表示
  - 処理を共通関数として実装し、モーダルを自動クローズ
