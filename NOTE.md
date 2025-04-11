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