<template>
  <div class="drawer-box">
    <ul class="base-info">
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
    </ul>
    <ul class="commdity"
        v-for="(goods,index) in goodsArr"
        :key="index">
      <li class="commdity-item">
        <ol>
          <li>
            <label>商品名称：</label>
            <span>{{goods.wareName}}</span>
          </li>
          <li>
            <label>商品数量：</label>
            <span>{{goods.wareNum}}</span>
          </li>
          <li>
            <label>商品规格：</label>
            <span>{{goods.wareSize}}</span>
          </li>
          <li>
            <label>商品类型：</label>
            <span>{{goods.wareType}}</span>
          </li>
          <li>
            <label>生产日期：</label>
            <span>{{goods.productDate}}</span>
          </li>
          <li>
            <label>商品图片：</label>
            <img :src="goods.img">
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
        wareSize: '200g',
        img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2771978851,2906984932&fm=26&gp=0.jpg'
      }, {
        wareName: '珂润面膜套装',
        wareNum: 5,
        wareType: '洗护', // 商品类型
        productDate: '2020-01-04', // 商品保质期
        wareSize: '130g',
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
  border-bottom: 1px solid #d9d9d9;
  .commdity-item {
    ol {
      padding-top: 20px;

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
        img {
          width: 76px;
          height: 76px;
        }
      }
    }
  }
}
.commdity:last-child {
  border-bottom: 0;
}
</style>
