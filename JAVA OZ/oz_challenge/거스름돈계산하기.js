

function question(n, w) {
    
    let result;
    result = w - (3000*n);
    return result;
}



Test(
    question,
    [
        [1, 7000],
        [2, 12340],
        [3, 34560],
        [4, 78890],
        [5, 453400],
        [6, 5634500],
    ],
    [4000, 6340, 25560, 66890, 438400, 5616500]
);

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