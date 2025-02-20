
// DOM 로드가 되었을 때
document.addEventListener('DOMcontentLoaded', () => {   
    
    //제어할 요소를 가져오기
    const img = document.querySelector('img');     //요소 (버튼과 이미지)
    const txt1 = document.querySelector('#txt1');
    const bt = document.querySelector('button');

    //랜덤 게임수
    let n ;
    
    //랜덤 수가 생성되었는지 확인
    let isFlag = false ;

    //확인 버튼이 눌러졌을 때
    bt.addEventListener('click', (event) => {
        
        //이게 없으면 자기자신으로 다시오게 됨
        event.preventDefault();

        //랜덤수를 생성할 지 결정
        if( !isFlag ) {
            n = Math.floor(Math.random()*100) + 1 ;  // 1~100까지
            isFlag = true ;
            img.setAttribute('src', '../img/what.png') 
            txt1.value = ''; 
            txt1.style.display = 'inline' ;
            txt1.focus() ;
            bt.innerHTML = '확인' ;
            return ;
        }

        console.log('n = ', n, 'isFlag = ', isFlag) ;


        //숫자 비교
        if(parseInt(txt1.value) > n) {          //입력한 숫자가 n보다 큰 경우 :: down
            
            //이미지 바꾸기
            img.setAttribute('src', '../img/down.png') ;


        }

        else if(parseInt(txt1.value) < n) {     //입력한 숫자가 n보다 작은 경우 :: up
            img.setAttribute('src', '../img/up.png')
        }
        
        else  if(parseInt(txt1.value) == n) {   //숫자를 맞춘 경우
            
            txt1.style.display = 'none' ;
            bt.innerHTML = '다시하기' ;
            isFlag = false ;
            
            img.setAttribute('src', '../img/good.png')
        }
    }) ;
}) ;


    // for(let bt of bts){
    //     bt.addEventListener('click', () => {
    //         // comN 랜덤수 생성 > user 입력 숫자 비교 > 크면 down > 작으면 up 사진
    //     //computer 숫자와 그림 변경
    //     let comN = Math.floor(Math.random()*6) + 1 ;      

    //     //user의 숫자와 그림 변경
    //     let userNum = parseInt(bt.textContent.slice(0, 1)); 

    //     // computer와 user 숫자 비교
    //     if (comN == userNum) {
    //         console.log() ;
    //     }
    //     else msg.innerHTML = '틀림' ;

    //     }) ;
    
    //     console.log("1") ;
 

    //     }} 


    // ) ;

    // document.addEventListener('DOMContentLoaded', () => {
    
    //     const bt = document.querySelector('button') ;       //요소(버튼과 이미지)
    //     const img = document.querySelector('img') ;       
        
    //     bt.addEventListener('click', () => {                //버튼이 클릭
    //         const img = document.querySelector('img') ;     
    //         let n = Math.floor(Math.random()*6) +1 ;        
    //         img.setAttribute('src', `../img/what${n}.png`);     //이미지 속성 변경
    //         img.setAttribute('alt', `${n}`);
    //     })