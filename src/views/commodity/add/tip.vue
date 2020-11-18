<template>
  <div class="tip">
    <div></div>
    <h4>说明</h4>
    <p>带“<span>*</span>”选项为必填选项</p>
    <p>新增的商品将自动进入“未发布”中，可在“未发布”中进行查看和再编辑</p>
    <p>若您想在设置的上/下架时间之外上/下架，那么你可在”未发布”和“已上架”中手动上/下架</p>
  </div>
</template>
<style lang="less" scoped>
.tip {
  padding: 50px 0 38px 0;
  color: #777;
  div {
    width: 100%;
    height: 1px;
    margin-bottom: 30px;
    background-color: #f0f0f0;
  }
  h4 {
    margin-bottom: 14px;
    font-size: 18px;
  }
  p {
    line-height: 22px;
    font-size: 14px;
    span {
      color: #ff4d4f;
    }
  }
}
</style>
