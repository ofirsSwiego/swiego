window.onload = function() {
    titleBorderView();
    backgroundChange();
    titleMainView();
    titleSubView();
}
function titleBorderView() {
    const targetBackground = document.querySelector('.title--border');
    setTimeout(function() {
        targetBackground.classList.add('is-view');
    },500);
}
function backgroundChange() {
    const targetBackground = document.querySelector('.content');
    setTimeout(function() {
        targetBackground.classList.add('is-change');
    },1500);
}
function titleMainView() {
    const targetTitleMain = document.querySelector('.title--main');
    setTimeout(function() {
        targetTitleMain.classList.add('is-view');
    },1500);
}
function titleSubView() {
    const targetTitleSub = document.querySelector('.title--sub');
    setTimeout(function() {
        targetTitleSub.classList.add('is-view');
    },3000);
}