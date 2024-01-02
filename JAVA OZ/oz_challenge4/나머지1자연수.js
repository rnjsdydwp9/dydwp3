function question(n) {
    // 여기에서 코드 작성해주세요!
    let result; 
    let arr = []; //나머지가 1인 숫자만 걸러서 넣어줄 망태기 배열 선언
    for(let i=0; i <=n; i++ ){ //n까지 체크할거니까 n번 반복하는 반복문
        if(n % i ==1){ //i로 나눠서 나머지가 1이면??
            arr.push(i);//아까 저 망태기에 넣어줌.
        }
    }
    let new_Arr = arr.sort(); //일단 이쁘게 작은 수부터 큰 수까지 줄세움
    result=new_Arr[0]//가장 첫번째가 제일 작으니까 new_Arr[0]너 나와라
    return result; 
}

// 여기는 결과값 함수이므로 신경쓰지 않으셔도 됩니다!
Test(question, [[10], [12]], [3, 11]);

function Test(question, conditions, results) {
    for (let index in results) {
        const result = question(...conditions[index]) === results[index];
        console.log(`테스트 ${+index + 1}`, result);
        if (!result) {
            console.log('테스트에 통과하지 못했습니다.');
            return;
        }
    }

    console.log('테스트에 통과하셨습니다!');
}