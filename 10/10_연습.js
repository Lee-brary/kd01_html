
// 단위변경
const unitChange = () {

}




// 돔 생성 후 이벤트 감지
document.addEventListener('DOMContentLoaded', () => {


    // 돔 요소 가져오기
            // querySelctor~는 Node List 객체를 반환
            // getElement~는 HTML Collection 객체를 반환

    const sel1 = document.getElementById('sell') ;
    const sel2 = document.querySelector('#sel2') ;



    // intput box

    const txt1 = document.querySelector('.unit input') ;
    const txt2 = document.querySelector('.unit input[readonly]') ;



    // span -> node list

    const sp1 = document.querySelectorAll('span') ;



    // console.log(sel1.value) ;
    // console.log(sel2.value) ;
    // console.log(txt1.value) ;
    // console.log(txt2.value) ;
    // console.log(sps[0].textContent) ;
    // console.log(sps[1].textContent) ;

    // 첫번째 select 값이 변경 되었을 때
    sel1.addEventListener('change', () => {
        console.log(sel1.value) ;
    
        if(sel1.value == "℃") sel1.value = "℉" ;
        else sel2.value = "℃" ;

        sps[0].textContent = sel1.value ;
        sps[1].textContent = sel2.value ;

        txt1.value = "" ;
        txt2.value = "" ;
            


        for(let i=0; i<sps.length; i++) {
            sps[i].textContent = sel`${i+1}`.value ;
        }



        //     sel2.value = "℉" ;

        //     sps[0].textContent = sel1.value ;
            
        //     sps[1].textContent = sel2.value ;


        // } else {
        //     sel2.value = "℃" ;

        //     sps[0].textContent = sel1.value ;

        //     sps[1].textContent = sel2.value ;

        // }
        


    } ) ;

    // 두번째 select 값이 변경 되었을 때
    sel1.addEventListener('change', () => {
        console.log(sel2.value) ;

        if(sel2.value == "℃"){
            
            sel1.value = "℉" ;

            sps[0].textContent = "℃" ;
            sps[1].textContent = "℉" ;


        } else {
            sel1.value = "℃" ;

            sps[0].textContent = "℉" ;

            sps[1].textContent = "℃" ;


        }
        
        txt1.value = "" ;
        txt2.value = "" ;

    } ) ;

 

}) ;



 

