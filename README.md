# React 学習

## react-tutorial
React のチュートリアルを実施するリポジトリです。
https://ja.react.dev/learn/tutorial-tic-tac-toe

### Goal

チュートリアルを最後まで実施し、三目並べ アプリの作成が完了すること。
また、このチュートリアルを通して React の基礎を理解できていること。
深く考えすぎずとにかく手を動かして楽しむ！

### 進捗管理

<details>

<summary>進捗管理の詳細</summary>

- Day 1 (8/5)  
  - 練習用のリポジトリを作成
  - React のプロジェクトを作成
  - [チュートリアルのセットアップ](https://ja.react.dev/learn/tutorial-tic-tac-toe#setup-for-the-tutorial) までできた
- Day 2 
  - [概要](https://ja.react.dev/learn/tutorial-tic-tac-toe#overview)を一通り進めた！
  - [ゲームを完成させる](https://ja.react.dev/learn/tutorial-tic-tac-toe#completing-the-game) の 下記箇所まで進めた
    - https://ja.react.dev/learn/tutorial-tic-tac-toe#completing-the-game:~:text=%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AF%E3%80%81%E4%BB%A5%E4%B8%8B%E3%81%AE%E3%82%88%E3%81%86%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%81%AF%E3%81%9A%E3%81%A7%E3%81%99%EF%BC%9A
- Day 3 
  - いいかんじ！Boardオブジェクトの親 Game オブジェクトを作成し、Boardの処理をpropsで制御できるようにした。
  - 履歴機能を作成しているところ。下記まで実施  
    - https://ja.react.dev/learn/tutorial-tic-tac-toe#completing-the-game:~:text=%E6%AC%A1%E3%81%AB%E3%80%81Game%20%E5%86%85%E3%81%AE%20jumpTo%20%E9%96%A2%E6%95%B0%E3%82%92%E6%9B%B4%E6%96%B0%E3%81%97%E3%81%A6%E3%80%81currentMove%20%E3%82%92%E6%9B%B4%E6%96%B0%E3%81%99%E3%82%8B%E3%82%88%E3%81%86%E3%81%AB%E3%81%97%E3%81%BE%E3%81%99%E3%80%82currentMove%20%E3%82%92%E5%A4%89%E6%9B%B4%E3%81%99%E3%82%8B%E6%95%B0%E5%80%A4%E3%81%8C%E5%81%B6%E6%95%B0%E3%81%AE%E5%A0%B4%E5%90%88%E3%81%AF%E3%80%81xIsNext%20%E3%82%92%20true%20%E3%81%AB%E8%A8%AD%E5%AE%9A%E3%81%97%E3%81%BE%E3%81%99%E3%80%82
- Day 4 
  - 基本を一通り完了！！次は [応用機能] に挑戦する！
  
</details>

### 応用機能

まだ時間がある方や、新しく手に入れた React のスキルを練習したい方向けに、三目並べゲームをさらに改善するためのアイディアをいくつか以下に示します。難易度の低い順にリストアップしています：

1. - [x] Board とか オブジェクトごとにファイルを分ける
1. - [x] 履歴の番号付きリストが '1' から始まっているが、手順の数字と 1 つズレているのでわかりにくいため、 '0' から始まるようにする。→ リストの数字を表示しないようにした
1. - [x] 現在の着手の部分だけ、ボタンではなく “You are at move #…” というメッセージを表示するようにする。
1. - [ ] マス目を全部ハードコードするのではなく、Board を 2 つのループを使ってレンダーするよう書き直す。
1. - [ ] 手順を昇順または降順でソートできるトグルボタンを追加する。
1. - [ ] どちらかが勝利したときに、勝利につながった 3 つのマス目をハイライト表示する。引き分けになった場合は、引き分けになったという結果をメッセージに表示する。
1. - [ ] 着手履歴リストで、各着手の場所を (row, col) という形式で表示する。

### 追加したい機能
- ゲームをクリアするボタン
- ×、○ のセルにそれぞれ違う色を付ける

## React の流儀

このチュートリアルを通じて、React のコンセプトである React 要素、コンポーネント、props、state に触れてきました。ゲーム制作においてこれらの概念がどのように機能するかが分かったので、次は React の流儀をチェックして、アプリの UI を構築する際にこれらの React のコンセプトがどのように機能するのかを確認してください。

https://ja.react.dev/learn/thinking-in-react