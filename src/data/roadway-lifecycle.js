export const TableConfig = {
  /**
   * 这种表格配置表对整个项目而言耦合性较高，后续每次对表格有特殊要求都需要修改
   * 而且由于某些字段需要前端方法处理，所以这个配置也应由前端定义交给后端，然后再通过接口动态调用
   *
   * @param {array}   actions           操作按钮，例如：['preview', 'edit', 'delete', 'upload', 'other']
   * @param {string}  otherActionTitle  其他特定操作按钮文本
   * @param {boolean} summary           是否需要合计数据
   * @param {array}   summaryField      合计字段
   * @param {boolean} inlineEdit        是否支持在表格行内直接编辑，默认不支持且编辑为弹窗形式
   * @param {array}   columns           每列参数
   * @param {boolean} sortable          是否需要排序
   * @param {string}  align             单元表格对齐方向，默认为'center'
   * @param {string}  unit              字段单位，例如：元、kw/h
   * @param {string}  layout            表单类型
   * @param {string}  dateFormat        日期格式
   * @param {array}   options           选择器配置项
   * @param {string}  showType          表格内数据显示方式，属于对展现形式有特殊要求的配置项，例如：colorLump 色块显示
   */
  actions: ['edit', 'delete', 'other'],
  otherActionTitle: ['巷道进度'],
  summary: false,
  summaryField: [],
  columns: [
    { label: '巷道名称', field: 'name', width: '200', layout: 'Text', placeholder: '请填写工作面名称' },
    { label: '事件名称', field: 'eventName', width: '150', layout: 'Text', placeholder: '请填写事件名称' },
    { label: '日期', field: 'date', width: '200', sortable: true, layout: 'DateTime', placeholder: '请选择日期' },
    { label: '说明', field: 'describe', width: '', layout: 'Textarea', placeholder: '请填写说明' },
    { label: '附件', field: 'files', width: '250', layout: 'Upload', placeholder: '请上传附件' }
  ]
}

export const FilterConfig = {
  /**
   * @param {array} actions   操作按钮
   * @param {array} filters   筛选项
   * @param {array} options   选择器配置项
   */
  actions: ['search', 'reset', 'create'],
  filters: [
    { label: '巷道名称', field: 'name', width: '220', layout: 'Text', placeholder: '巷道名称、事件名称' }
  ]
}
