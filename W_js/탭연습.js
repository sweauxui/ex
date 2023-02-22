let tapbuttons = document.querySelectorAll('.tapbutton');
console.log(tapbuttons)
Array.from(tapbuttons).forEach((eachbutton, index) => { //이치버튼=요소, 인덱스=번호
    eachbutton.addEventListener('click', function() { //이치버튼 클릭이벤트로 불러오면 함수가 일어난다 
//탭박스 선언
        let tapboxs = document.querySelectorAll('.tapbox');
        for (var i = 0; i < tapboxs.length; i++) {
            tapboxs[i].classList.remove("on"); // 내가 특정 탭 박스 누를 때 마다 안누른 친구들 초기화
            tapbuttons[i].classList.remove("on");
        }
        tapboxs[index].classList.add("on"); //
        this.classList.add("on");
    })
});
tapbuttons[0].click();
//탭버튼즈가 읽히면 최초버튼 누른 상태로 보자