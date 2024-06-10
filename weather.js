document.addEventListener('DOMContentLoaded', (event) => {
  // Select all elements with the class 'additional-link'
  const additionalLinks = document.querySelectorAll('.additional-link');

  // Function to change the background color
  function changeBackgroundColor(color) {
      document.body.style.backgroundColor = color;
  }

  // Add event listeners to each additional link
  additionalLinks.forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault();  // Prevent default link behavior
          // Change to a random background color for demonstration purposes
          
          const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
          changeBackgroundColor(randomColor);
      });
  });
});

document.querySelectorAll('.additional-link').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();  // Prevent default link behavior
    let divrev = document.querySelector('div#result');
    if (divrev!==null){
      divrev.remove();
    }
    let divfirst = document.querySelector('div#first');
    if (divfirst!==null){
      divfirst.remove();
    }
    // Get the value from data-value attribute
    const value = link.getAttribute('data-value');
    
    // Do something with the value
    console.log('Value:', value);
    sendRequest(value);
    // Your further actions here
  });
});

function sendRequest(u) {
// URL を設定
let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+u+'.json';

// 通信開始
axios.get(url)
  .then(showResult)
  .catch(showError)
  .then(finish);
}

// 通信が成功した時の処理
function showResult(resp) {
// サーバから送られてきたデータを出力
let data = resp.data;

// data が文字列型なら，オブジェクトに変換する
if (typeof data === 'string') {
  data = JSON.parse(data);
}



let h2 = document.querySelector('body');		
let div = document.createElement('div');	
div.id = 'result';
h2.insertAdjacentElement('beforeend', div);	

let name = document.createElement('p');
name.classList.add("name");
name.textContent = data.name;
div.insertAdjacentElement('beforeend', name);

// new div.dropdown
let temp = document.createElement('div');
temp.classList.add("dropdowntemp");
div.insertAdjacentElement('beforeend', temp);
//
let tempdd = document.createElement('p');
tempdd.textContent = '気温 = '+ data.main.temp + '°C';
temp.insertAdjacentElement('beforeend', tempdd);
//new div.dd
let max = document.createElement('div');
max.classList.add("dd");
temp.insertAdjacentElement('beforeend', max);
//max
let tempmax = document.createElement('p');
tempmax.textContent = '最高 = '+data.main.temp_max + '°C';
max.insertAdjacentElement('beforeend', tempmax);
//min
let tempmin = document.createElement('p');
tempmin.textContent = '最低 = ' +data.main.temp_min + '°C';
max.insertAdjacentElement('beforeend', tempmin);


let weather = document.createElement('p');
weather.textContent = '天気 = '+data.weather[0].description ;
div.insertAdjacentElement('beforeend', weather);

let humidity = document.createElement('p');
humidity.textContent = '湿度 = '+data.main.humidity +'%';
div.insertAdjacentElement('beforeend', humidity);

let wind = document.createElement('p');
wind.textContent = '風速 = ' +data.wind.speed + '(m/s)';
div.insertAdjacentElement('beforeend', wind);

}

// 通信エラーが発生した時の処理
function showError(err) {
console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
console.log('Ajax 通信が終わりました');
}





function sendRequest1(cityId, box) {
// URL を設定
let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + cityId + '.json';

// 通信開始
axios.get(url)
    .then(response => showResult1(response, box))
    .catch(showError1)
    .then(finish1);
}

// 通信が成功した時の処理
function showResult1(resp, box) {
// サーバから送られてきたデータを出力
let data = resp.data;

// data が文字列型なら，オブジェクトに変換する
if (typeof data === 'string') {
    data = JSON.parse(data);
}

let name = document.createElement('p');
name.classList.add("name");
name.textContent =data.name;
box.appendChild(name);

let temp1 = document.createElement('p');
temp1.textContent = '気温: ' + data.main.temp + '°C';
box.appendChild(temp1);



let weather = document.createElement('p');
weather.textContent = '天気: ' + data.weather[0].description;
box.appendChild(weather);

let humidity = document.createElement('p');
humidity.textContent = '湿度: ' + data.main.humidity + '%';
box.appendChild(humidity);

let wind = document.createElement('p');
wind.textContent = '風速: ' + data.wind.speed + ' m/s';
box.appendChild(wind);
}

// 通信エラーが発生した時の処理
function showError1(err) {
console.error(err);
}

// 通信の最後にいつも実行する処理
function finish1() {
console.log('Ajax 通信が終わりました');
}

let b = document.getElementById('createBoxesBtn');
b.addEventListener('click', showAll);

function showAll() {

let container = document.getElementById('first');
let cityIds = [360630, 524901, 993800, 1816670, 1850147, 1880252, 2147714, 2643743, 2968815, 3451189, 5368361, 5128581];

container.innerHTML = ''; // Clear any existing boxes
for (let i = 0; i < cityIds.length; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    container.appendChild(box);
    sendRequest1(cityIds[i], box);
}
changeBackgroundColor(); 
}

function getRandomColor() {
const letters = '0123456789ABCDEF';
let color = '#';
for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
}
return color;
}

// Change the background color to a random color
function changeBackgroundColor() {
document.body.style.backgroundColor = getRandomColor();
}

