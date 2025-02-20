// 단위변환
const unitChange = (s1, s2, txt1, txt2, sps) => {
            // 두개의 select요소, 두개의 input요소, 한개의 span요소를 받음
            // span태그들의 텍스트를 새로운 단위로 업데이트


    // 단위 변환 로직
    if (s1.value == "℃") s2.value = "℉" ; 
    else s2.value = "℃" ;  
  
    // 화면 표시 업데이트
    sps[0].textContent = s1.value;
    sps[1].textContent  = s2.value;
    
    
    // 입력필드를 초기화하고 첫 번째 입력 필드에 포커스
    txt1.value = "" ;
    txt2.value = "" ;
    txt1.focus();
  }
  
  // DOM 생성 후
  document.addEventListener('DOMContentLoaded',()=>{
    // DOM 요소 가져오기
            // getEle~, querySelector를 사용해 필요한 돔 요소를 변수에 할당
    
    //select box
    const sel1 = document.getElementById('sel1') ;
    const sel2 = document.querySelector('#sel2') ;
  
    //input box
            // 인풋박스에 숫자만 입력되도록 설정
                
    // const txt1 = document.querySelector('input') ;
    // const txt2 = document.querySelector('input[readonly]');
    const txt1 = document.querySelector('.unit input') ;
    const txt2 = document.querySelector('.unit input[readonly]') ;
  
    //span -> node list
    const sps = document.querySelectorAll('span') ;
  
    
    
    // console.log(txt1.value)
    // console.log(txt2.value)
    // console.log(sps[0].textContent)
    // console.log(sps[1].inn)
  


    // 첫번째 select 값이 변경이 되었을때
    // select 박스에 change 이벤트리스너를 추가
    sel1.addEventListener('change',()=>{
      console.log("sel1", sel1.value)
      unitChange(sel1, sel2, txt1, txt2, sps) ;
      
    });
  
    // 두번째 select 값이 변경이 되었을때
    sel2.addEventListener('change',()=>{
      unitChange(sel2, sel1, txt1, txt2, sps) ;
    });
  }) ;