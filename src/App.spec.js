import delay from 'redux-saga';

// Async test in 3 ways

// 1.
// done을 인자로 받아 이용하는 방법
// next같은 역할을 하는 콜백.
it ("async test 1", done => {
  setTimeout(done, 100);
})

// 2.
it ("async test 2", () => {
  return new Promise(resolve => {
    setTimeout(resolve, 100);
  })
})
// 3.
it ("async test 3", async () => await delay(100))
// describe 대신에 it을 쓰고,
// it에 무엇을 해야하는지를 쓰는게 아니라
// 평소에 describe에 썼던 것 처럼 쓴다.
// 이렇게 해도 되고 describe 해도 되고.