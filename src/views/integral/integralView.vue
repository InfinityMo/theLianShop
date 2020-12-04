<template>
  <div class="drawer-box">
    <div class="fixed-wrap">
      <ul class="base-info">
        <li>
          <label>用户名称：</label>
          <span>{{baseData.userName}}</span>
        </li>
        <li>
          <label>部门：</label>
          <span>{{baseData.userDept}}</span>
        </li>
        <li>
          <label>工号：</label>
          <span>{{baseData.userNum}}</span>
        </li>
        <li>
          <label>积分：</label>
          <span>{{baseData.integral}}</span>
        </li>
      </ul>
      <div class="table-head infinite-table">
        <span>操作时间</span>
        <span>操作者</span>
        <span>积分变更</span>
        <span>剩余积分</span>
      </div>
    </div>
    <div class="infinite-list-wrapper">
      <ul class="list"
          v-infinite-scroll="load"
          infinite-scroll-distance="60"
          infinite-scroll-disabled="disabled">
        <li v-for="(item,index) in infiniteArr"
            :key="index"
            class="list-item infinite-table">
          <span>{{item.operateTime}}</span>
          <span>{{item.operator}}</span>
          <span>{{item.alter}}</span>
          <span>{{item.surplus}}</span>
        </li>
      </ul>
      <p v-if="noMore"
         class="tip">没有更多了</p>
    </div>
  </div>
</template>
<script>
import mockData from './mockData'
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
        userName: 'Infinity',
        userDept: '销售部',
        userNum: 'TL - 1563',
        integral: 100
      },
      infiniteArr: [...mockData],
      loading: false,
      total: 100
    }
  },
  computed: {
    noMore () {
      return this.infiniteArr.length >= this.total
    },
    disabled () {
      return this.loading || this.noMore
    }
  },

  mounted () {

  },
  methods: {
    load () {
      this.loading = true
      setTimeout(() => {
        for (let i = 0; i < 5; i++) {
          this.infiniteArr.push({
            operateTime: '2020-11-01 13:34',
            operator: i % 2 === 0 ? '管理员' : 'Infinity',
            alterFlag: 0,
            alter: 303,
            surplus: 2003
          })
        }
        this.loading = false
      }, 200)
    }
  }
}
</script>
<style lang="less" scoped>
@import "~@/components/drawerMode/drawerView";
.fixed-wrap {
  position: absolute;
  z-index: 10;
  background: #fff;
}
.drawer-box .base-info {
  border-bottom: 0;
}
.table-head {
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  background: #fafafa;
}
.infinite-table {
  span {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  span:first-child {
    width: 206px;
  }
  span:nth-child(2) {
    width: 92px;
  }
  span:nth-child(3) {
    width: 106px;
  }
}
.infinite-list-wrapper {
  height: calc(100vh - 281px);
  padding-top: 199px;
  overflow: auto;
  li {
    display: flex;
    justify-content: flex-start;
    padding: 12px 10px;
    font-size: 14px;
    text-align: left;
    color: #333;
    border-bottom: 1px solid #f0f0f0;
  }
}
.tip {
  padding: 20px 0;
  color: #777;
  text-align: center;
}
</style>
