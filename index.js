import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Expressサーバーを作る
const app = express();

// __dirnameを作る
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ミドルウェア
// __dirnameで絶対pathを作る
app.use(express.static(path.join(__dirname, 'public')));

// ミドルウェア
// req.bodyを使えるようにする
app.use(express.urlencoded({ extended: false }));

// データを送るためのHTTPメソッド
// 1問目
app.post('/quiz', (req, res) => {
  const answer = req.body.answer;
  let score = 0;
  if (answer === '2') {
    score++;
  }
  res.redirect(`/quiz2.html?score=${score}`);
});

// データを送るためのHTTPメソッド
// 2問目
app.post('/quiz2', (req, res) => {
  const answer = req.body.answer;
  let score = Number(req.body.score);
  if (answer === '3') {
    score++;
  }
  res.redirect(`/quiz3.html?score=${score}`);
});

// データを送るためのHTTPメソッド
// 3問目
app.post('/quiz3', (req, res) => {
  const answer = req.body.answer;
  let score = Number(req.body.score);
  if (answer === '4') {
    score++;
  }
  res.redirect(`/result.html?score=${score}`);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
