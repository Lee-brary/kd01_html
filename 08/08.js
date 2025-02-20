// DOM 로드되었을때
document.addEventListener('DOMContentLoaded', () => {
    
    const bt = document.querySelector('button') ;       //요소(버튼과 이미지)
    const img = document.querySelector('img') ;       
    
    bt.addEventListener('click', () => {                //버튼이 클릭
        const img = document.querySelector('img') ;     
        let n = Math.floor(Math.random()*6) +1 ;        
        img.setAttribute('src', `../img/${n}.png`);     //이미지 속성 변경
        img.setAttribute('alt', `${n}`);
    }) ;

});