const trigger = document.querySelector(".home-1__content");
const topNavIcon = document.querySelector(".menu-icon");
const sideNav = document.querySelector("#side-navigation");
const sideNavIcon = document.querySelector(".side-navigation__buttons")

let isNavOpen = false;

topNavIcon.addEventListener('click', () => {
    // 상태 변수 업데이트
    isNavOpen = !isNavOpen;
    console.log("눌렸어요");
    
    // 사이드 내비게이션 클래스 추가/제거
    if (isNavOpen) {
        sideNav.classList.add('displayNone');
    } else {
        sideNav.classList.remove('displayNone');
    }
});

sideNavIcon.addEventListener('click', () => {
    // 상태 변수 업데이트
    isNavOpen = !isNavOpen;
    console.log("눌렸어요");
    
    // 사이드 내비게이션 클래스 추가/제거
    if (isNavOpen) {
        sideNav.classList.add('displayNone');
    } else {
        sideNav.classList.remove('displayNone');
    }
});