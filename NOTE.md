# Day1

## 【Reactのディレクトリ構成・動作について】
参考記事：https://zenn.dev/somahc/articles/c04c7a2c5e9f9b

* トップページであるindex.htmlが真っ先に呼び出される。
  ```
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
  ```
  `<div id="root"></div>`という要素を起点に、Reactアプリは動いている。

* 次にindex.jsが呼び出される。これが、Reactアプリのスタート地点（エントリーポイント）である。
  * まずReactに関するライブラリ・cssなどのファイルをインポートする。
  * 次に、`id`が`root`の要素に関する埋め込み内容の指定を行っている。

* 次にApp.jsが呼び出される。これはindex.js内に記述している`import App from './App';`によって呼び出されている。App.jsではコンポーネントが定義されている。

## 【Reactの基本概念】
### 🍠PropsとStateについて
* Propsとは、**親コンポーネントから子コンポーネントへ渡される読み取り専用のデータ**である。
  ```
  function Greeting(props) {
    return <p>こんにちは、{props.name}さん！</p>;
  }
  ```
  上記のコードでは、`name`が`props`として渡されている。
* Stateとは、コンポーネント内で管理されるデータのうち、**ユーザーの操作や非同期処理の結果などに応じて、変化する情報**を指す。

# Day2

## 【`useState`とは】
* `useState`は、配列を返す関数である。この配列には2つの要素が含まれている。
  * 現在の状態の値
  * 状態を更新するための関数

  例えば、`const [newTodo, setNewTodo] = useState('');`となっていた場合、`setNewTodo`関数で何らかの新たな値が渡されたら、`newTodo`がその値になり、ページ内の`newTodo`の値が描画され直される。

## 【`useEffect`とは】
* `useEffect`とは、Reactコンポーネントがレンダリングされた後に副作用を実行するためのフックである。具体的な例を用いた方が分かりやすいため、下記で解説。
  * 例えば下記のように`useEffect`を設けているとする。
    ```
    useEffect(() => {
      console.log("updated todos:", todos);
    }, [todos]);
    ```
    `{}`内の引数1が、実行したい関数（副作用関数）である。引数2は依存配列と呼ばれ、ここに指定した値が変わると、第1引数の関数が再実行される。

## 【`Props`とは】
コンポーネント間のデータを受け渡す際のまとまり。
基本的な構文は下記のとおり。
```
# 親コンポーネント

const hogeText = "word";

return (
  <div>
    <ShowText name={hogeText} />
  </div>
)
```

```
# 子コンポーネント
function ShowText (props) {
  return <h1>Hello, {props.name}</h1>
}
```

関数ShowTextは、引数としてpropsを受け取っている。しかし、これだと書き方が煩わしいため、下記のようにすることもできる。

```
# 子コンポーネント
function ShowText ({name}) {
  return <h1>Hello, {name}</h1>
}
```

# Day3

## `Array.prototype.filter()`の使い方
`filter`は、配列の各要素に対して、指定した条件の結果が`true`になるものだけを抽出して、新しい配列を作る。

```
array.filter((element, index, array) => { /* 条件 */ });
```

条件の箇所が`true`であればその要素は除外されない。

## `useState`についての補足
```
const [editingIndex, setEditingIndex] = useState(null);
```

上記のコードのように、`useState`の引数に設定されている値は、`editingIndex`の初期値になる。なお、`editingIndex`は、`setEditingIndex`関数が呼び出されたら、その引数に更新される。

## コードに関する理解
* `editingIndex`は、編集中のtodoの`index`を保存するための状態変数。`setEditingIndex`でこの値を更新できる。
* 今回はもっと言うと、子コンポーネントから`onStartEdit`関数を通して、`setEditingIndex`を動作させる。
* Reactは、「編集中の値はこれ！」「編集後の値はこれ！」といった形で、様々な値を`useState`で状態管理している印象！
* `editingText`は、編集入力フォームに入力された値を保持する。`handleEditingChange`関数によって値の更新が行われる。

## 命名規則について
* ハンドラ関数
  コンポーネント内で、クリック・入力などのイベントが発生した際に実行される関数は、「ハンドラ関数」と呼ばれる。**一連の流れを「処理する」という意味合いが強く、多くの関数に使われる。**関数名の先頭に`handle`をつける。
  * `handleInputChange`: 入力フィールドの変更イベントに対応する関数
  * `handleAddTodos`: Todoを追加する処理を行う関数
* コールバックを子コンポーネントに渡すときの命名規則
  子コンポーネントに渡すプロパティは、何らかのイベント（入力変更・クリックなど）が発生したときに呼ばれる「コールバック関数」であることを示すため、`on`を接頭辞としてつける。

  ※コールバック関数：親コンポーネントが定義して子コンポーネントに渡す関数。子コンポーネント内で何らかのイベント（例えばクリックや入力の変更）が起こった際に、その関数が実行される。
  * `onClick={() => onStartEdit(index)}`: 「子コンポーネント内で、クリックというイベントが発生した際に、親コンポーネントの関数が呼ばれる」ことを示すために、`on`プレフィックスがつく。

