function question(n, m) {
    let j = 0; //당첨 횟수
    let result;//당첨금:당첨 횟수와 배팅금액을 곱해준 결과 값
    for (let i = 0; i <= 10; i++) {//10번 반복한다.
        let lucky = Math.floor(Math.random() * 9);//할 때마다 랜덤으로 1과 10사이의 숫자를 생성한다
        if (n == lucky) {//이게 맞으면??
            console.log(`${i}회차 행운의 숫자:${lucky}당첨!`);//당첨 표시 해주기
            j += 1;//당첨될 때마다 당첨횟수에 1씩 더해줌.
        } else {
            console.log(`${i}회차 행운의 숫자:${lucky}낙첨! 유감`); //낙첨됐다고 유감표시
        }
    }
    result = j * m; //10회를 시도한 후 알게된 당첨횟수와 베팅금액을 곱해줌
    console.log(result)//당첨금 내놔

}

question(4, 10000);