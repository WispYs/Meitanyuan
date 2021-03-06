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
  actions: ['preview', 'edit', 'delete'],
  summary: true,
  summaryField: ['money'],
  inlineEdit: true,
  columns: [
    { label: '标题', field: 'title', width: '150', align: 'left', layout: 'Text', placeholder: '请填写标题' },
    { label: '负责人', field: 'person', width: '100', layout: 'Text', placeholder: '请填写负责人' },
    { label: '项目时间', field: 'time', width: '180', sortable: true, layout: 'DateTime', placeholder: '请选择项目时间' },
    { label: '完成率', field: 'completed', width: '80', layout: 'Slider', placeholder: '请填写项目完成率' },
    { label: '金额（元）', field: 'money', unit: '元', width: '110', layout: 'Text', placeholder: '请填写项目金额' },
    { label: '项目状态', field: 'status', width: '110', layout: 'Select',
      options: [
        {
          value: 1,
          label: '已完成'
        }, {
          value: 2,
          label: '进行中'
        }, {
          value: 3,
          label: '未开始'
        }, {
          value: 4,
          label: '已搁置'
        }
      ], placeholder: '请选择项目状态' },
    { label: '是否紧急', field: 'urgency', width: '80', layout: 'Switch',
      options: [
        {
          value: true,
          label: '是'
        }, {
          value: false,
          label: '否'
        }
      ], placeholder: '请选择紧急状态' },
    { label: '项目类型', field: 'type', width: '160', layout: 'Radio',
      options: [
        {
          value: '类型一',
          label: '类型一'
        }, {
          value: '类型二',
          label: '类型二'
        }
      ], placeholder: '请选择项目类型' },
    { label: '项目阶段', field: 'stage', width: '230', layout: 'Checkbox',
      options: [
        {
          value: '阶段一',
          label: '阶段一'
        }, {
          value: '阶段二',
          label: '阶段二'
        }, {
          value: '阶段三',
          label: '阶段三'
        }
      ], placeholder: '请选择项目阶段' },
    { label: '备注', field: 'remark', width: '200', layout: 'Textarea', placeholder: '请填写项目备注' }

  ]
}

export const FilterConfig = {
  /**
   * @param {array} actions   操作按钮
   * @param {array} filters   筛选项
   * @param {array} options   选择器配置项
   */
  actions: ['search', 'reset', 'create', 'export'],
  filters: [
    { label: '关键字', field: 'keywords', width: '150', layout: 'Text', placeholder: '请输入关键字' },
    { label: '项目时间', field: 'time', width: '150', layout: 'DateTime', placeholder: '请选择开始时间' },
    { label: '项目状态', field: 'status', width: '150', layout: 'Select',
      options: [
        {
          value: 1,
          label: '已完成'
        }, {
          value: 2,
          label: '进行中'
        }, {
          value: 3,
          label: '未开始'
        }, {
          value: 4,
          label: '已搁置'
        }
      ], placeholder: '请选择项目状态' }
  ]
}
