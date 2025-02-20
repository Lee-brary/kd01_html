let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1];  // 1이 폭탄
let gameOver = false;
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    const cols = document.querySelectorAll('.col');             //cols는 배열
    const scoreDisplay = document.querySelector('#score');
    
    // 보드 초기화 및 배열 섞기
    arr.sort(() => Math.random() - 0.5);
    
    // 각 칸에 이벤트 리스너 추가
    for(let [idx, col] of cols.entries()) {
        col.innerHTML = idx + 1;  // 초기에는 숫자로 표시

        col.addEventListener('click', () => {
            if (gameOver) return;  // 게임이 끝났으면 클릭 무시
            
            if (arr[idx] === 1) {  // 폭탄을 찾은 경우
                col.innerHTML = 'no' ;
                gameOver = true;
                alert('폭탄을 찾았습니다.');
            } else {  // 안전한 칸을 찾은 경우
                col.innerHTML = '<img src="../img/heart.png">' ;
                col.style.backgroundColor = 'green';
                score += 100;
                if (scoreDisplay) scoreDisplay.textContent = `점수: ${score}`;
                
                // 모든 안전한 칸을 찾았는지 확인
                if (score === 800) {  // 8개의 안전한 칸 * 100점
                    gameOver = true;
                    alert('모든 안전한 칸을 찾았습니다!');
                }
            }})
        }})