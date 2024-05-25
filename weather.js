let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
console.log(data.name+'の天気');
console.log('タイムゾーン： '+ data.timezone);
console.log('詳細');
console.log('天気 '+' 気温(℃) '+' 視度'+' 空圧'+' 湿度'+' 風速(m/s)');
console.log(data.weather[0].description + ' '+ data.main.temp+' ' + data.visibility+' ' +data.main.pressure+' ' + data.main.humidity+' ' +data.wind.speed );
console.log('座標：'+data.coord.lon +'、'+data.coord.lat);

let h2 = document.querySelector('body');		

let div = document.createElement('div');	
div.id = 'result';
	
h2.insertAdjacentElement('beforeend', div);	