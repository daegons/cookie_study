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

        //if조건문-->['userid=qzom1425', 'username=poky', 'user=eunjoo']
        if(allCookie[i].indexOf(name)==0) {
            cval = allCookie[i].split('=');
            console.log(cval); // ['userid', 'qzom1425']출력
            console.log(cval[1]); // ['qzom1425']출력
            console.log(cval.length); //2출력-->배열의 0과1 -->0:쿠키명,1:쿠키값
        }
    }
    return (cval.length>0)?cval[1] : 'nothing';
}
console.log('userGetCookie함수로 리턴된 값은='+userGetCookie('user'));
//userGetCookie함수로 리턴된 값은=eunjoo 출력


//[8-1] userGetCookie함수 만들기 연습-->oneGetCookie
console.clear();

const oneGetCookie = function(cname) {
    let name = cname+'=';
    
}
