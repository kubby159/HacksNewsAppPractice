
const container = document.getElementById('root');
const ajax = new XMLHttpRequest(); //출력결과를 반환시켜줌
const NEWSURL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';
const content = document.createElement('div');


function getData(url){
    ajax.open('GET',url,false); //false: 해당 주소의 데이터를 동기적으로 처리하겠다는 옵션.
    ajax.send(); //send: date를 가져옴.


    return JSON.parse(ajax.response);
}


function newsFeed() {
    const newsFeed = getData(NEWSURL);//응답값을 객체로 바꾸기.
    const newList = [];

    newList.push('<ul>');
    for (let i = 0; i < newsFeed.length; i++) {
        newList.push(`
        <li>
        <a href='#${newsFeed[i].id}'> ${newsFeed[i].title} (${newsFeed[i].comments_count})</a> 
        
        </li>
        `);
         
    }
    newList.push('</ul>');
    
    
    container.innerHTML = newList.join('');
    //join 은 여러 개의 배열데이터를 하나의 문자열로 만들어주는 기능을 재공함.
    //join 의 첫 번째 요소로 구분자를 입력받게 되어있다. default 는 , 이다.
}




const ul = document.createElement('ul');
function newsDetail() {
    const id = location.hash.substr(1);
    const newsContent = getData(CONTENT_URL.replace('@id',id));
    const title = document.createElement('h1');
    
    container.innerHTML = `
    <h1>${newsContent.title}</h1>
    <div>
    <a href = '#'> 목록 </a>
    </div>
    `
    
    }



//라우터
function router() {

    const routePath = location.hash;
    if(routePath === '') {

        newsFeed();
        
    } else {
        newsDetail();
    }

}
window.addEventListener('hashchange', router);

router();
