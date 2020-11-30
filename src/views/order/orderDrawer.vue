<template>
  <div class="drawer-box">
    <ul class="base-info">
      <li>
        <label>订单编号：</label>
        <span>{{baseData.wareName}}</span>
      </li>
      <li>
        <label>用户名称：</label>
        <span>{{baseData.brandName}}</span>
      </li>
      <li>
        <label>部门：</label>
        <span>{{baseData.wareType}}</span>
      </li>
      <li>
        <label>工号：</label>
        <span>{{baseData.limitNum}}</span>
      </li>
      <li>
        <label>订单金额：</label>
        <span>{{baseData.wareDate}}</span>
      </li>
      <li>
        <label>订单生成时间：</label>
        <span>{{baseData.wareDate}}</span>
      </li>
    </ul>
    <ul class="commdity"
        v-for="(goods,index) in goodsArr"
        :key="index">
      <li class="commdity-item">
        <ol>
          <li>
            <label>商品名称：</label>
            <span>{{baseData.wareName}}</span>
          </li>
          <li>
            <label>商品数量：</label>
            <span>{{baseData.wareName}}</span>
          </li>
          <li>
            <label>商品规格：</label>
            <span>{{baseData.wareName}}</span>
          </li>
          <li>
            <label>商品类型：</label>
            <span>{{baseData.wareName}}</span>
          </li>
          <li>
            <label>生产日期：</label>
            <span>{{baseData.wareName}}</span>
          </li>
          <li>
            <label>商品图片：</label>
            <img>
          </li>
        </ol>
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
      },

      goodsArr: [{
        wareName: '悦诗风吟面膜套装',
        wareNum: 5,
        wareType: '护肤', // 商品类型
        productDate: '2020-01-01', // 商品保质期
        wareSize: '女款/红色/S码',
        img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2771978851,2906984932&fm=26&gp=0.jpg'
      }]
    }
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
@import "~@/components/drawerMode/drawerView";
.commdity {
  .commdity-item {
    ol {
      li {
        display: flex;
        margin-bottom: 20px;

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
}
</style>
