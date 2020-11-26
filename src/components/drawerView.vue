<template>
  <div class="drawer-box">
    <ul class="base-info">
      <li>
        <label>商品名称：</label>
        <span>{{baseData.wareName}}</span>
      </li>
      <li>
        <label>商品品牌：</label>
        <span>{{baseData.brandName}}</span>
      </li>
      <li>
        <label>商品类型：</label>
        <span>{{baseData.wareType}}</span>
      </li>
      <li>
        <label>限购数量：</label>
        <span>{{baseData.limitNum}}</span>
      </li>
      <li>
        <label>商品保质期：</label>
        <span>{{baseData.wareDate}}</span>
      </li>
      <li>
        <label>上/下架时间：</label>
        <span>{{baseData.saleTime}}</span>
      </li>
      <li>
        <label>商品描述：</label>
        <span>{{baseData.desc}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {

  props: {
    commodity: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      baseData: {
        wareName: '悦诗风吟面膜套装', // 商品名称
        brandName: '悦诗风吟', // 品牌名称
        wareType: '护肤', // 商品类型
        wareDate: '一年', // 商品保质期
        limitNum: '5', // 限购数量
        saleTime: '2020-11-22 10:10 ~ 2020-11-23 10:10', // 销售时间
        desc: '套装有两种个批次，价格不同'// 商品描述
      }
    }
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
.drawer-box {
  .base-info {
    border-bottom: 1px solid #d9d9d9;
    li {
      display: flex;
      margin-bottom: 20px;
      font-size: 14px;
      color: #333;
      label {
        flex-shrink: 0;
      }
      span {
        flex-shrink: 1;
        line-height: 20px;
      }
    }
  }
}
</style>
