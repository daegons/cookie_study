//라이브버리를 이용한 JS쿠키 - js - cookie

//[1] js-cookie 기본적인 생성법--> Cookies.set('쿠키명','쿠키값');
Cookies.set('userid','qzom1425');

//[2] js-cookie 기본정인 생성법 + 만료일 지정--> Cookies.set('쿠키명','쿠키값',{expires:7});
Cookies.set('username','poky',{expires:7});

//[3] js-cookie 생성 + 만료일 + 패스--> Cookies.set('쿠키명','쿠키값',{expires:7, path:'/'});
Cookies.set('user','eunjoo',{expires:7, path:'/'});

//[4] js-cookie 읽기
const cookie_userid = Cookies.get('userid');
console.log(cookie_userid); //qzom1425 출력
console.log(Cookies.get('sdf')); //undefined 출력

//[5] js-cookie 모두읽기
const allCookes = Cookies.get();
console.log(allCookes); //{쿠키명:'쿠키값',..}이런식의 객체 형태로 모두 리턴.
console.log(typeof allCookes); //object로 출력

//[6] js-cookie 삭제
// Cookies.remove('userid');
// const allCookes2 = Cookies.get();
// console.log(allCookes2); 
//{username: 'poky', user: 'eunjoo'} 출력


//쿠키 삭제 함수
const delCookie = function(cname) {
    event.preventDefault();

    cname = document.getElementById('cname');
    let cval = cname.value;
    console.log(cval);

    Cookies.remove(cval);
    cname.value = '';
    cname.focus();
    alert(`${cval}쿠키를 삭제하였습니다.`);
}

const form = document.getElementById('form');
form.addEventListener('submit', delCookie);


//[6-1] 쿠키 생성시 옵션 지정과 함께 생성되었다면 삭제시에도-->똑같이 필요..???
console.clear();
// Cookies.set('dog', 'poky',{expires:7,path:'/'});
// Cookies.remove('dog'); 
//삭제시 {path:'/'}defult값으로 자동 삭제

// Cookies.set('catid', 'cat1004', {expires:6,path:'/accordion_mini_project-main/'});
// Cookies.remove('catid'); //catid 안지워짐
// Cookies.remove('catid', {path:"/accordion_mini_project-main/"}); 
//path 붙이면 catid 쿠키 지워짐


//[7] JS-cookie전체 삭제-->불가능!!
// 쿠키 전체 삭제를 하려면?
console.clear();
Cookies.get();
const cName = Object.keys(Cookies.get()); //쿠키 이름만 가져올 때

function allDelCookies() {

        Object.keys(Cookies.get()).forEach(function(cName) {
        //할 일 처리
        let neededOptions = {
            // domain:'test.com' 이렇게 지정하면 쿠키 삭제 안됨
            domain:'127.0.0.1' //현재 도메인 쓰면 삭제됨
        };
        Cookies.remove(cName,neededOptions);
    });
    alert(`쿠키가 전체 삭제되었습니다.`)
}

//[8] userGetCookie함수 만들기-일반적인 For반복문으로 순회하면서 처리
console.clear();
console.log(document.cookie); //userid=qzom1425; username=poky; user=eunjoo출력됨

//쿠키 읽기
const userGetCookie = function(cname){
    
    let name = cname+'=';
    console.log(name); //user= 출력

    let allCookie = decodeURIComponent(document.cookie).split('; '); //'; '한 칸 띄어쓰기 주의!!!
    console.log(allCookie);

    //encodeURIComponent는 JS에서 string을 UTF-8로 인코딩해주는 함수.
    //decodeURIComponent는 encodeURI..로 escape된 문자열을 다시 원래의 문자열로 리턴
    //비슷한 메서드--> encodeURI,decodeURI, escape, unescape

    let cval = [];
    for(let i = 0; i < allCookie.length; i++) {
        console.log(allCookie[i].indexOf(name));
        //indexOf메서드의 리턴값-->배열일경우-->검색된항목의index값
        //문자열일 경우-->검색된 문자열의 첫 글자의 index값
        //검색 결과가 없을 경우--> -1리턴
    }
}
console.log('userGetCookie함수로 리턴된 값은='+userGetCookie('user'));


//[8-1] userGetCookie 함수만들기 연습 --> oneGetCookie

const oneGetCookie = function(cname) {
    
    let name = cname+'=';
    let allCookie = decodeURIComponent(document.cookie).split(';');

    let cval = [];
    for(let i = 0; i < allCookie.length; i++) {
        if(allCookie[i].trim().indexOf(name)==0) { //userid=qzom1425
            cval = allCookie[i].trim().split('=');
        }
    }
    return (cval.length > 0)? cval[1]:'no result';
}
console.clear();
console.log('oneGetCookie함수로 리턴되는 값은='+ oneGetCookie('guest'));

//-------------------------------------------------------------------------------------------
//[9] forEach메서드를 이용한 userGetCookie2 함수 만들기
console.clear();
console.log(document.cookie); //userid=qzom1425; username=poky; user=eunjoo

const userGetCookie2 = (cname) => {
    //1.객체변수선언
    let cookie = {}; //{userid:"qzom1425",username:"poky",user:"eunjoo"}<--이렇게 저장시키려고한다

    //2.반복처리-forEach()
    document.cookie.split(';').forEach(function(element){

        //할 일 처리
        element = element.trim(); // ";"위에서 공백처리 안해서 여기서 trim()으로 처리
        console.log(element);

        let [k,v] = element.trim().split('=');
        console.log(k);
        // console.clear();

        cookie[k] = v;
        console.log(cookie);
    });

    // return cookie[cname]; //qzom1425 출력
    return(cookie[cname]!=undefined)?cookie[cname]:'no result';
    //cname이 undefined가 아니라면 cname출력 이외에는 No result출력
}

console.log('userGetCookie2함수로 리턴된 값은='+userGetCookie2('userid'));





console.clear();



//[10]ES6버전으로 userGetCookie3 함수 만들기


console.log(document.cookie); //userid=qzom1425; username=poky; user=eunjoo

const userGetCookie3 =function(cname){
    //1.cname수정
    cname = cname + '='; //userid=     이렇게 만들어짐
    //2.문자열(쿠키명)찾기
    const str = document.cookie;
    const isCookieIdx = str.indexOf(cname);
    // boolean isCookie = str.contains(cname);//JAVA에서는 contains()사용-->js는 indexOf()메서드 사용.
    // console.log(isCookieIdx);
    //3.쿠키 가져와서 분리-->처리
    let result = "no result";
    if(isCookieIdx >= 0) {
        //할 일 처리
        result = document.cookie.split('; ')    //userid=qzom1425; username=poky; user=eunjoo
        .find(item =>item.startsWith(cname)).split('=')[1]; //startsWith() 특정 문자열로 시작하는지 체크->true나false 반환
                                                        //구형 브라우저에서는 지원x            
        
    }
    return result;
}

console.log('userGetCookie3함수로 리턴된 값은='+userGetCookie3('userid'));

function showCval(cname) {
    const rst = document.getElementById('cval');
    // rst.textContent = userGetCookie3(cname);
    rst.value = userGetCookie3(cname);
}

function clearCval() {
    const remove = document.getElementById('cval');
    // remove.textContent = "";
    remove.value = "";
}
//JS .value vs .textContent 차이점
// input과 같은 form요소에는 -->.value 메서드 사용.
//div, span등의 요소에는     -->.textContent메서드 사용.


//[10-1] startsWith()사용법
//문자열 검색시 특정 문자열로 시작하는지 체크--> true 또는 false로 반환.
//즉, 검색할 문자열로 시작하면 true, 아니면 false.
//str.startsWith(검색문자열 [,position])   [] <--생략이 가능한 옵션.
//position 옵션은 검색문자열을 탐색할 위치 지정. 기본값0
//대소문자 구분.

//문자열인 경우
console.clear();
const str = "가나 다라 마바 사아 자차 카타 파하";
console.log(str.startsWith('마바',6));
//배열인 경우
console.clear();
const ar = "dog=5; cat=7; hippo=9; lion=4; tiger=2";
console.log(typeof ar);
const ar2 = ar.split('; ');
console.log(ar2); //['dog=5', 'cat=7', 'hippo=9', 'lion=4', 'tiger=2'] 배열로 출력

const ar3 = ar2.find(item => item.startsWith('hippo='));
console.log(ar3); //hippo=9출력

const ar4 = ar3.split('=');
console.log(ar4); //['hippo', '9']출력
console.log(ar4[1]); //9

const ar5 = ar2.findIndex(item => item.startsWith('hipp'));//조건에 만족하는 첫 번째 요소index반환 없으면-1
console.log(ar5);

//배열 요소의 위치를 찾고자 하면-->.indexOf()
//배열 요소가 해당 배열에 존재하는지 체크하려면-->.indexOf() 또는 .includes()