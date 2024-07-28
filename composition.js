const log = console.log;
// Function composition

// f(g(x)) 형태로 하나의 함수를 입력 x로 실행한 결과를 다른 함수의 입력으로 전달하는 구조를 만드는 방법

// 특정 프로세스가 있다고 생각해보자.

// 예를 들어, 서브웨이를 생각해보자.

// 처음에 빵을 고르고 그 다음에 차례대로 재료를 추가해야 한다.

// 이 프로세스를 일반적인 함수로 구현하면 다음과 같다.

const ingredientAdder = (ingredient) => (input) => `${input} ${ingredient}`;

const bacon = ingredientAdder("베이컨");
const lettuce = ingredientAdder("상추");
const cheese = ingredientAdder("치즈");

const makeSandwich = (bread) => cheese(lettuce(bacon(bread)));

log(makeSandwich("허니오트")); // 허니오트 베이컨 상추 치즈

// 중첩된 고차함수 패턴의 위 코드는 몇 가지 문제점이 있다.

// 가독성 떨어지고, 재사용이 어렵고, 유지보수도 어려움.
// 이해하기가 좀 까다롭고, 함수가 많아질수록 복잡도가 많이 올라감.

// 이런 상황에서 가독성과 재사용성 등을 개선하기 위한 패턴이 Compose, Pipeline 패턴이다.

// 둘 다 함수들을 연속적으로 호출하고, input -> output이 다시 input 형태의 flow로 동작한다.
// 그래서 보통 이 2가지 함수들을 유틸리티/헬퍼 함수처럼 한 곳에 선언하고 사용한다.

// Compose
const compose =
  (...functions) =>
  (input) =>
    functions.reduceRight((acc, fn) => fn(acc), input);

// 인자로 전달받은 함수를 오른쪽에서 왼쪽으로 순차적으로 실행(오른쪽이 기존 코드의 안쪽에 해당되는 함수이다.)

const makeSandwichWithCompose = (bread) =>
  compose(cheese, lettuce, bacon)(bread);
// bacon -> lettuce -> cheese 순서로, 각각 이전 단계 함수의 output이 다음 함수의 input으로 전달돼서 실행된다.

// 중첩된 고차함수 패턴과 비교했을 때, 결과는 같지만 가독성이 훨씬 좋아졌음.
log(makeSandwichWithCompose("허니오트")); // 허니오트 베이컨 상추 치즈

// Pipeline
// compose와 비슷하지만, 함수를 왼쪽에서 오른쪽으로 순차적으로 실행한다.
// compose는 실행 순서가 가장 마지막에 인자로 전달된 함수부터 실행되어서 우리가 평소에 글이나 코드를 읽는 방향과 다르다는 사소한 단점이 있는데,

// pipe는 이를 보완하기 위해 왼쪽에서 오른쪽으로 실행되는 방식을 채택했다.
const pipe =
  (...functions) =>
  (input) =>
    functions.reduce((acc, fn) => fn(acc), input);

const makeSandwichWithPipe = (bread) => pipe(bacon, lettuce, cheese)(bread);

log(makeSandwichWithPipe("허니오트")); // 허니오트 베이컨 상추 치즈

// 연습

const title = "Learning Function Composition 1";

// slug -> 'learning-function-composition-1'

// title을 위 형태로 변환하기 위해서는 수행되어야 하는 작업이 몇 가지 있다.

// 1. 배열로 변환(문자열 작업을 위해서)
// 2. 모든 문자를 소문자로 변환
// 3. 배열 -> 문자열, 여백을 '-'으로 처리으로 변환

// 1번 함수
const strToArr = (str) => str.split(" ");
const toLowerCase = (arr) => arr.map((word) => word.toLowerCase());
const joinWithDash = (arr) => arr.join("-");

// 중첩 HOF 패턴 사용시..
const slug1 = joinWithDash(toLowerCase(strToArr(title))); // 함수가 많이 늘어나면...흠..

// Compose 사용시
const slug2 = compose(joinWithDash, toLowerCase, strToArr)(title); // 오른쪽에서 왼쪽으로 실행된다.

// Pipe 사용시
const slug3 = pipe(strToArr, toLowerCase, joinWithDash)(title); // 왼쪽에서 오른쪽으로 실행된다.

log(slug1); // learning-function-composition-1
log(slug2); // learning-function-composition-1
log(slug3); // learning-function-composition-1
