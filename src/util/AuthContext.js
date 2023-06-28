import React, { useEffect, useState } from "react";


// 새로운 전역 Context를 생성
const AuthContext = React.createContext({
    isLoggedIn: false, //로그인 했는지의 여부
    userName: '',
    onLogout: () => {}, // 더미 함수를 넣으면 자동완성 시 편함.
    onLogin: (email, password) => {},
    setUserInfo: () => {}
});


// 위에서 생성한 Context를 제공할 수 있는 provider
// 이 컴포넌트를 통해 자식 컴포넌트들에게 인증 상태와 관련된 함수들을 전달할 수 있음.
export const AuthContextProvider = props => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');


    // 컴포넌트가 렌더링 될 때 localStorage에서 로그인 정보를 가지고 와서 상태를 설정.
    useEffect(() => {
        if(localStorage.getItem('isLoggedIn') === '1') {
            setIsLoggedIn(true);
            setUserName(localStorage.getItem('LOGIN_USERNAME'));
        }
    }, []);


    // 로그아웃 핸들러
    const logoutHandler = () => {
        localStorage.clear();
        setIsLoggedIn(false);
    };


    // 로그인 핸들러
    const loginHandler = (token, userName, role) => {
        localStorage.setItem("isLoggedIn", "1");
        // json에 담긴 인증 정보를 클라이언트에 보관
        // 1. 로컬 스토리지 - 브라우저가 종료되어도 보관이 가능.
        localStorage.setItem('ACCESS_TOKEN', token) // key, value
        localStorage.setItem('LOGIN_USERNAME', userName) // key, value
        localStorage.setItem('USER_ROLE', role) // key, value

        /*
        2. 세션 스토리지 - 브라우저가 종료되면 사라짐.        
        sessionStorage.setItem('ACCESS_TOKEN', token) // key, value
        sessionStorage.setItem('LOGIN_USERNAME', userName) // key, value
        sessionStorage.setItem('USER_ROLE', role) // key, value
        */

        setIsLoggedIn(true);
        setUserName(userName);
    };

    // 토큰 및 로그인 유저 데이터를 브라우저에 저장하는 함수
    const setLoginUserInfo = ({ token, userName, role }) => {
        localStorage.setItem('ACCESS_TOKEN', token) // key, value
        localStorage.setItem('LOGIN_USERNAME', userName) // key, value
        localStorage.setItem('USER_ROLE', role) // key, value
    }


    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            userName, // key값과 value값이 같으면 변수 생략가능
            onLogout: logoutHandler,
            onLogin: loginHandler,
            setUserInfo: setLoginUserInfo
        }}>
            {props.children}
        </AuthContext.Provider>
    );

};

export default AuthContext;