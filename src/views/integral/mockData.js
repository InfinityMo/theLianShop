const infiniteArr = []
for (let i = 0; i < 20; i++) {
  infiniteArr.push({
    operateTime: '2020-11-12 13:34',
    operator: i % 2 === 0 ? '管理员' : 'Infinity',
    alterFlag: 0,
    alter: 30,
    surplus: 200
  })
}
export default infiniteArr
