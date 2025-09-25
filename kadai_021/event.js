const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = '2秒経ちました！';
    console.log('2秒後にテキストが変更されました（非同期処理）');
  }, 2000);
});