export const stepOneForm = {
  wareName: '', // 商品名称
  brandName: '', // 品牌名称
  wareType: '', // 商品类型
  wareDate: '', // 商品保质期
  wareDateType: '1', // 保质期日期类型
  limitNum: '', // 限购数量
  saleTime: [], // 销售时间
  desc: ''// 商品描述
}

export const stepOneFormRules = {
  wareName: [
    { required: true, message: '请输入商品名称', trigger: 'blur' }
  ],
  brandName: [
    { required: true, message: '请选择品牌名称', trigger: 'change' }
  ],
  wareType: [
    { required: true, message: '请选择商品类型', trigger: 'change' }
  ],
  limitNum: [
    { required: true, message: '请输入限购数量', trigger: 'blur' },
    { pattern: /^[1-9]+$/, message: '请输入正确的数字', trigger: 'blur' }
  ],
  saleTime: [
    { required: true, message: '请选择上/下架时间', trigger: 'blur' }
  ],
  desc: [
    { required: true, message: '请输入商品描述', trigger: 'blur' }
  ]

}
