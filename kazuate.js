
// 答えl
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

let kaisu = 0;

let b = document.querySelector('#print');
b.addEventListener('click', hantei);


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  
  let i = document.querySelector('input[name="number"]');
	let number = i.value;
  number = parseInt(number);
  kaisu +=1;

  
  let h = document.querySelector('span#kaisu'); 
  h.textContent=kaisu;

  let h1 = document.querySelector('span#answer');
  h1.textContent= number;
  let h2 = document.querySelector('p#result'); 
  console.log(kaisu+'回目の予想: ' + number);

  if(kaisu<4){
    if(number===kotae){
        console.log('正解です．おめでとう!');
        h2.textContent= '正解です．おめでとう!';  
      }
      else if(number>kotae){ //answer:smaller
        console.log('まちがい．答えはもっと小さいですよ');
        h2.textContent= 'まちがい．答えはもっと小さいですよ';
      }
      else if(number<kotae){ // answer:bigger
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





