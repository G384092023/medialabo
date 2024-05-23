
// 答えl
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）


// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
hantei();
hantei();


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = 4;
  
  let kaisu = 0;
  kaisu +=1;
  console.log(kaisu+'回目の予想: 4');
  let h = document.querySelector('span#kaisu'); 
  h.textContent=kaisu;

  let h1 = document.querySelector('span#answer');
  h1.textContent='4';
  let h2 = document.querySelector('p#result'); 

  if(kaisu<4){
    if(yoso===kotae){
        console.log('正解です．おめでとう!');
        h2.textContent= '正解です．おめでとう!';  
      }
      else if(yoso>kotae){ //answer:smaller
        console.log('まちがい．答えはもっと小さいですよ');
        h2.textContent= 'まちがい．答えはもっと小さいですよ';
      }
      else if(yoso<kotae){ // answer:bigger
        console.log('まちがい．答えはもっと大きいですよ'); 
        h2.textContent= 'まちがい．答えはもっと大きいですよ';
      }
 
      
  }else{
    console.log('答えは '+kotae+' でした．すでにゲームは終わっています');
    h2.textContent= '答えは ' + kotae + ' でした．すでにゲームは終わっています';
  }
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}

