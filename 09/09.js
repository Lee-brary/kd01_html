//dom 로드 > 요소 > 

// DOM 로드가 되었을 때
document.addEventListener('DOMcontentLoaded', () => {   
      
        const imgs = document.querySelector('img');
        const bts = document.querySelectorAll('button');
        const msg = document.querySelector('#msg');

        for(let bt of bts){
            bt.addEventListener('click', () => {
                
            //computer 숫자와 그림 변경
            let comN = Math.floor(Math.random()*6) + 1 ;
            img[0].setAttribute('src', `../img/${comN}.png`)
            img[0].setAttribute('art', `${comN}`)        

            //user의 숫자와 그림 변경
            let userN = parseInt(bt.textContent.slice(0, 1)) ; 
            img[1].setAttribute('src', `../img/${comN}.png`) ;
            img[1].setAttribute('art', `${comN}`) ;

            // computer와 user 숫자 비교
            if (comN == userN) msg.innerHTML = '맞음' ;
            else msg.innerHTML = '틀림' ;


            })
        }})
