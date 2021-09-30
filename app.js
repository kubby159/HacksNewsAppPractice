
const container = document.getElementById('root');
const ajax = new XMLHttpRequest(); //출력결과를 반환시켜줌
const NEWSURL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';
const content = document.createElement('div');
ajax.open('GET',NEWSURL,false); //false: 해당 주소의 데이터를 동기적으로 처리하겠다는 옵션.
ajax.send(); //send: date를 가져옴.


const newsFeed = JSON.parse(ajax.response); //응답값을 객체로 바꾸기.
const ul = document.createElement('ul');


window.addEventListener('hashchange',function () {
const id = location.hash.substr(1);
console.log(id); //해시 데이터를 넘겨줌

ajax.open('GET',CONTENT_URL.replace('@id',id),false);
ajax.send();

const newsContent = JSON.parse(ajax.response);
const title = document.createElement('h1');

title.innerHTML = newsContent.title;
content.appendChild(title);


});


for (let i = 0; i < newsFeed.length; i++) {

    const li = document.createElement('li');
    const a = document.createElement('a');
    // <li><a>title</a></li>
    ul.appendChild(li)
    li.appendChild(a)


    a.href =`#${newsFeed[i].id}`;
    a.innerHTML = `${newsFeed[i].title} (${newsFeed[i].comments_count})`;
    



}

container.appendChild(ul);
container.appendChild(content);