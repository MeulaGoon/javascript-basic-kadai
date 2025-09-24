// HTMLから要素を取得し、定数に代入する
const textElement = document.getElementById('text');
const buttonElement = document.getElementById('btn');

// ボタンがクリックされたときのイベントリスナーを追加
buttonElement.addEventListener('click', function() {
    // テキスト要素の内容を変更
    textElement.textContent = 'ボタンをクリックしました';
});