// const getfet = () => {
//     let apiKey = "a2949e70164e48c671c08ce6a567e7aa";
//     let baseurl = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?"
//     let url = `${baseurl}key=${apiKey}&targetDt=20250219`;


//     //  fetch API 호출
//     fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data.boxOfficeResult.dailyBoxOfficeList))
//     .catch(error => console.log(error))

//     console.log('getfetch', url);
// }


const getfet = async () => {
    let apiKey = "a2949e70164e48c671c08ce6a567e7aa";
    let baseurl = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?"
    let url = `${baseurl}key=${apiKey}&targetDt=20250219`;


    //  fetch API 호출

    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data.boxOfficeResult.dailyBoxOfficeList))
    .catch(error => console.log(error))
    
    try {
    const response = await fetch(url)        // async function to fetch the response, awaits for the promise to resolve
    const data = await response.json()       // awaits for the response to be fully received
    console.log(data.boxOfficeResult.dailyBoxOfficeList)    //data의 dailyBoxOfficeList key를 console.log
    } catch (error) {
        console.log(error)
    }
    console.log('getfetch', url);

document.addEventListener('DOMContentLoaded', () => {
    const bt = document.querySelector('button');


    bt.addEventListener('click', () => {
        getfet()} )
})

}