//라이브러리를 이용한 JS쿠키 - jQuery Cookie

//쿠키 읽기
const getCookie = function() {
    //로컬에 저장된 모든 쿠키 읽어오기
    const allCookies = document.cookie; //하나의 문자열로 리턴.
    console.log(allCookies);
    
    //if 조건문 --> 쿠키가 있으면
    if(allCookies !='') {
        alert('저장된 쿠키의 값은 : ' + allCookies);
    } else {
        alert('저장된 쿠키가 없습니다.');
    }
}


//[1] 쿠키생성 -->jQuery Cookie
$.cookie('userid','qzom1425');

//[2] 쿠키생성-->만료일 지정
$.cookie('userid','qzom1425',{expires:7}); //7일 후 만료

//[3] 쿠키생성-->만료일 지정 및 패스 지정-->'/' 지정시 사이트 전체에서 쿠키 유효
$.cookie('uid','antman',{expires:7,path:'/'}); //주의!-->삭제시에도 패스'/' 지정 필요

//[4] 쿠키읽기
console.log($.cookie('userid')); //qzom1425출력
console.log($.cookie('asd')); //undefined 출력

//[5] 모든 쿠키 읽기
console.log($.cookie()); //{cname:'cvalue',cname2:'cvalue2'...} 객체의 형태로 전부 출력

//[6] 쿠키 삭제하기
console.log($.removeCookie('userid')); //true 반환(userid)가 있이 때문
console.log($.removeCookie('id')); //false 반환(id)가 없기 때문
console.log($.cookie()); // {uid: 'antman'} 출력

//[7] 쿠키 생성시 domain, path 지정과 함께 생성되었다면 삭제시에도-->똑같이 필요.
console.clear();
$.cookie('cat','poky',{expires:7,path:'/'});
console.log($.removeCookie('cat'));  //false 출력됨 path:'/'를 추가하지 않아서
console.log($.removeCookie('cat',{path:'/'})); //true로 출력되고 cooki지워짐