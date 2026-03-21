// 現在のURLの?score=●をparamsに代入
// scoreの値を代入
const params = new URLSearchParams(window.location.search);
const score = params.get('score');

// quiz2ページ、quiz3ページ
// id="score-input"をscoreInputに代入→scoreInputがある場合、空のinputの入力欄に現在のURLの?score=●の●を代入
const scoreInput = document.getElementById('score-input');
if (scoreInput) {
  scoreInput.value = score;
}

// result.htmlページ
// id="score-text"をscoreTextに代入→scoreTextがある場合表示
const scoreText = document.getElementById('score-text');
if (scoreText) {
  scoreText.textContent = `合計点数は${score}点です。`;
}
