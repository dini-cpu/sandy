// 타이핑 효과를 주기 위한 함수
function typeText(element, text, delay) {
    let index = 0;

    function type() {
        if (index < text.length) {
            // 줄 바꿈 처리
            if (text.charAt(index) === '\n') {
                element.innerHTML += '<br>'; // <br> 태그로 줄 바꿈
                index++;
            } else {
                element.innerHTML += text.charAt(index);
                index++;
            }
            setTimeout(type, delay);
        }
    }
    type();
}

// 페이지가 로드될 때 모든 <p> 태그에 대해 타이핑 효과 적용
window.onload = function() {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach((paragraph, index) => {
        const text = paragraph.innerHTML.replace(/<br\s*\/?>/g, '\n'); // <br> 태그를 \n으로 변환
        paragraph.innerHTML = ''; // 초기화
        setTimeout(() => {
            typeText(paragraph, text, 70); // 타이핑 효과 적용
        }, index * 3000); // 각 문단의 시작 시간을 조정
    });
};
