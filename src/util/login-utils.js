// 로그인 한 유저의 데이터 객체를 변환하는 함수
export const getLoginUserInfo = () => {
    return {
        token : localStorage.getItem('ACCESS_TOKEN'),
        userName : localStorage.getItem('LOGIN_USERNAME'),
        role : localStorage.getItem('USER_ROLE')
    };
};

// 로그인 여부를 확인하는 함수

/*
const token = localStorage.getItem('ACCESS_TOKEN');
if(token === null) return false;
return true;
*/

// !! => 논리값으로 변경하는 문법
// 토큰이 존재하면 true, 존재하지 않는다면 false
export const isLogin = () => !!localStorage.getItem('ACCESS_TOKEN');




