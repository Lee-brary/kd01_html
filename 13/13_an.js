// 1. HTML 요소들이 로드된 후 이벤트를 설정함 (DOMContentLoaded)
// 2. 사용자가 날짜를 선택하면 (imput type = "date")
// 3. 선택한 날짜를 YYYYMMDD 형식으로 변환하여 API에 요청
// 4. API에서 응답받은 데이터를 화면에 표시

// 동작 ::
// 1. 사용자가 날짜를 선택(input[type=])
// 2. 선택한 날짜를 YYYYMMDD 형식으로 변환
// 3. 해당 날짜의 박스오피스 데이터를 가져오기 위해 API 호출
// 4. 응답을 받아서 영화 순위를 <ul> 리스트로 화면에 표시

// -------------------------------------------------------------

// --- 3. getFetch(dt, ul) 함수  ::  API 호출 및 화면 업데이트 ---
const getFetch = async (dt, ul) => {
            // YYYYMMDD 형식, 데이터를 표시할 <ul> 요소


// --- 4. API 요청 URL 생성 ---
    let apiKey = 'a2949e70164e48c671c08ce6a567e7aa';
    let baseurl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?' ;
    let url = `${baseurl}key=${apiKey}&targetDt=${dt}`;
                                    // & (O)
    console.log('getFetch', url);


//  --- 5. API 요청 및 응답 처리 ---
    try {
     const response = await fetch(url)      // API에 요청을 보냄 (비동기, 네트워크 요청)     
     const data = await response.json()     // 응답데이터를 JSON 형태로 변환  
     console.log(data.boxOfficeResult.dailyBoxOfficeList) 
                                            // 박스오피스 영화 리스트 출력   
        

// --- 6. 가져온 데이터를 <ul>에 추가 ---
     let tags = '' ;
     for(let item of data.boxOfficeResult.dailyBoxOfficeList) {
        tags = tags +
            `<li>
                <span class ="sp">${item.rank}</span>
                ${item.movieNm}
            </li>` ;
     }
        // for문을 사용해서 영화 순위를 <li> 태그로 생성
        // item.rank    : 영화순위
        // item.movieNM : 영화 제목
     ul.innerHTML = tags ;
        // 리스트에 추가된 HTML을 적용해서 화면에 출력


// --- 7. 오류 처리 :: API 요청이 실패하면 오류를 콘솔에 출력 ---
    } catch (error) {
        console.log(error)
    }

}





//  --- 1. DOM 리드 후 ---
document.addEventListener('DOMContentLoaded', () => {

    // 필요한 요소 가지고 오기
    const dt = document.querySelector('#dt');   // 선택하는 날짜 입력 필드 (<input type = "date">)
    const ul = document.querySelector('ul');  // (날짜)를 가져오고  ul(리스트)을 가져옴



// --- 2. 날짜 선택하면 실행되는 이벤트리스너 ---
    dt.addEventListener('change', (e) => {
        e.preventDefault() ;   // 기본 동작 방지(불필요한 경우지만 안전하게)
        
        console.log(dt.value) ;   // 사용자가 선택한 날짜 확인
                    // "YYYY-MM-DD"
        getFetch(dt.value.replaceAll('-', ''), ul)    // 날짜 포맷 변환 후 API
        // "YYYYMMDD" 로 변환한 날짜 값을 getFetch 함수에 전달해서 API 요청 보냄
    }) ;


}) ;
