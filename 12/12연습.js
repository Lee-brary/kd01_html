let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1]

let isFlag = false ; // 안섞인거


document.addEventListener('DOMContentLoaded', () => {
    const cols = document.querySelectorAll('.col') ;

    // 보드에 숫자 쓰기
        // 각 col 요소에 1부터 순차적으로 숫자 표시
    for(let [idx, col] of cols.entries()) {
        col.innerHTML = idx + 1;            // 인덱스 + 1 값을 내용으로 설정
    
    } ;

    // 각 col 요소에 클릭 이벤트 리스너 추가
    for(let [idx, col] of cols.entries()) {
        col.addEventListener('click', () => {
            console.log(col.innerHTML)  ;
        })

    } ;

     if( !isFlag ) {
        n = Math.floor(Math.random()*9) + 1 ;  // 1~9까지
        isFlag = true ;
        txt1.value = '';
        imgs.setAttribute('src', '../img/boom.png') 
        txt1.computedStyleMap.display = 'inline' ;
        bt.innerHTML = '확인' ;
        return ;
        }

        console.log('n = ', n, 'is Flag = ', isFlag) ;




    imgs.setAttribute('src', '../img/heart.png') ;


    //배열 셔플
    arr.sort(() => Math.random() - 0.5 ) ;  // arr 배열을 무작위로 섞음
    console.log(arr) ;                      // 섞인 배열을 콘솔에 출력


}) ;










