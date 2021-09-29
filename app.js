let ajax = new XMLHttpRequest(); //출력결과를 반환시켜줌
const NEWSURL = 'https://api.hnpwa.com/v0/news/1.json';
ajax.open('GET',NEWSURL,false); //false: 해당 주소의 데이터를 동기적으로 처리하겠다는 옵션.
ajax.send(); //send: date를 가져옴.

console.log(ajax.response);

const newsFeed = JSON.parse(ajax.response); //응답값을 객체로 바꾸기.

const ul = document.createElement('ul');

for (let i = 0; i < newsFeed.length; i++) {

    const li = document.createElement('li');

    ul.appendChild(li).innerHTML = newsFeed[i].title



}

document.getElementById('root').appendChild(ul);