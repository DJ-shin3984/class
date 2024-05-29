// 1. 함수를 리턴하는 함수
const aaa = (apple) => (banana) => {
    console.log(apple)
    console.log(banana)
    
    return (tomato) => {
        console.log(tomato)
    }
};

aaa(10)(20)(30);





