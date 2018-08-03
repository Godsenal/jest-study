describe('Question list test', () => {
  it.only("Only means test only this one.", () => {
    expect(40 + 2).toEqual(42);
  })
  it.skip("Skip means skip this test.", () => {
    expect(40 + 2).toEqual(43);
  });
})

// describe는 어떤 test인지 설명
// it은 어떻게 동작되어야 하는지.
// describe 대신에 it을 쓰고,
// it에 무엇을 해야하는지를 쓰는게 아니라
// 평소에 describe에 썼던 것 처럼 써도됨