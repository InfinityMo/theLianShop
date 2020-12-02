<template>
  <div class="drawer-box">
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
    </ul>
    <ul class="integral">
      <li>
        <label>用户积分：</label>
        <el-input-number v-model="integralForm.integral"
                         :min="0"
                         :max="5000"></el-input-number>
      </li>
    </ul>
    <div class="btn-group">
      <el-button @click="cancel">取 消</el-button>
      <el-button type="primary"
                 @click="submitForm">确定</el-button>
    </div>
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
      integralForm: {
        integral: ''
      },
      baseData: {
        userName: 'Infinity',
        userDept: '销售部',
        userNum: 'TL - 1563'
      }
    }
  },
  methods: {
    submitForm () {

    },
    cancel () {

    }
  }
}
</script>
<style lang="less" scoped>
@import "~@/components/drawerMode/drawerView";
.integral {
  padding-top: 20px;
  li {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    label {
      flex-shrink: 0;
    }

    .el-input-number {
      flex-shrink: 1;
      width: auto;
    }
  }
}
.btn-group {
  display: flex;
  justify-content: flex-end;
}
</style>
