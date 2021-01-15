const asyncRoutes = [
  // 首页
  // {
  //   path: '/dashboard',
  //   name: 'Dashboard',
  //   component: '/dashboard/index',
  //   meta: { title: '首页', affix: true }
  // },
  // GIS一张图
  {
    path: '/demo-gis',
    name: 'demoGis',
    component: 'Layout',
    redirect: '/demo-gis/gis1',
    meta: { title: 'GIS一张图' },
    children: [
      {
        path: '/demo-gis/gis1',
        name: 'GIS1',
        component: '/demo/index',
        meta: { title: '矿山三维场景展示' }
      },
      {
        path: '/demo-gis/gis2',
        name: 'GIS2',
        component: '/demo/index',
        meta: { title: '三维地理信息展示' }
      },
      {
        path: '/demo-gis/gis3',
        name: 'GIS3',
        component: '/demo/index',
        meta: { title: '综合一张图' }
      },
      {
        path: '/demo-gis/gis4',
        name: 'GIS4',
        component: '/demo/index',
        meta: { title: '地测一张图' }
      },
      {
        path: '/demo-gis/gis5',
        name: 'GIS5',
        component: '/demo/index',
        meta: { title: '生产一张图' }
      },
      {
        path: '/demo-gis/gis6',
        name: 'GIS6',
        component: '/demo/index',
        meta: { title: '通防一张图' }
      },
      {
        path: '/demo-gis/gis7',
        name: 'GIS7',
        component: '/demo/index',
        meta: { title: '机电一张图' }
      },
      {
        path: '/demo-gis/gis8',
        name: 'GIS8',
        component: '/demo/index',
        meta: { title: '安全一张图' }
      },
      {
        path: '/demo-gis/gis9',
        name: 'GIS9',
        component: '/demo/index',
        meta: { title: '应急一张图' }
      },
      {
        path: '/demo-gis/gis10',
        name: 'GIS10',
        component: '/demo/index',
        meta: { title: '监测一张图' }
      }
    ]
  },
  // 地测防控水
  {
    path: '/demo-geodesy',
    name: 'DemoGeodesy',
    component: 'Layout',
    redirect: '/demo-geodesy/geodesy1',
    meta: { title: '地测防控水' },
    children: [
      {
        path: '/demo-geodesy/geodesy1',
        name: 'Geodesy1',
        component: '/demo/index',
        meta: { title: '地质管理' },
        children: [
          {
            path: '/demo-geodesy/geodesy1/geodesy1-1',
            name: 'Geodesy1-1',
            component: '/demo/index',
            meta: { title: '地质图件' },
            children: [
              {
                path: '/demo-geodesy/geodesy1/geodesy1-1/geodesy1-1-1',
                name: 'Geodesy1-1-1',
                component: '/demo/index',
                meta: { title: '矿区构造纲要图' }
              },
              {
                path: '/demo-geodesy/geodesy1/geodesy1-1/geodesy1-1-2',
                name: 'Geodesy1-1-2',
                component: '/demo/index',
                meta: { title: '地质地形图' }
              },
              {
                path: '/demo-geodesy/geodesy1/geodesy1-1/geodesy1-1-3',
                name: 'Geodesy1-1-3',
                component: '/demo/index',
                meta: { title: '地层综合柱状图' }
              },
              {
                path: '/demo-geodesy/geodesy1/geodesy1-1/geodesy1-1-4',
                name: 'Geodesy1-1-4',
                component: '/demo/index',
                meta: { title: '主要地质剖面图' }
              },
              {
                path: '/demo-geodesy/geodesy1/geodesy1-1/geodesy1-1-5',
                name: 'Geodesy1-1-5',
                component: '/demo/index',
                meta: { title: '矿井煤岩层对比图' }
              },
              {
                path: '/demo-geodesy/geodesy1/geodesy1-1/geodesy1-1-6',
                name: 'Geodesy1-1-6',
                component: '/demo/index',
                meta: { title: '煤矿可采煤层底板等高线及资源/储量估算图' }
              },
              {
                path: '/demo-geodesy/geodesy1/geodesy1-1/geodesy1-1-7',
                name: 'Geodesy1-1-7',
                component: '/demo/index',
                meta: { title: '井巷地质素描图' }
              },
              {
                path: '/demo-geodesy/geodesy1/geodesy1-1/geodesy1-1-8',
                name: 'Geodesy1-1-8',
                component: '/demo/index',
                meta: { title: '水平地质切面图勘探钻孔柱状图' }
              },
              {
                path: '/demo-geodesy/geodesy1/geodesy1-1/geodesy1-1-9',
                name: 'Geodesy1-1-9',
                component: '/demo/index',
                meta: { title: '矿井瓦斯地质图' }
              },
              {
                path: '/demo-geodesy/geodesy1/geodesy1-1/geodesy1-1-10',
                name: 'Geodesy1-1-10',
                component: '/demo/index',
                meta: { title: '井上下对照图' }
              },
              {
                path: '/demo-geodesy/geodesy1/geodesy1-1/geodesy1-1-11',
                name: 'Geodesy1-1-11',
                component: '/demo/index',
                meta: { title: '采掘工程平面图' }
              },
              {
                path: '/demo-geodesy/geodesy1/geodesy1-1/geodesy1-1-12',
                name: 'Geodesy1-1-12',
                component: '/demo/index',
                meta: { title: '井巷、石门地质编录工程地质相关图件' }
              },
              {
                path: '/demo-geodesy/geodesy1/geodesy1-1/geodesy1-1-13',
                name: 'Geodesy1-1-13',
                component: '/demo/index',
                meta: { title: '储量损失量计算图' }
              },
              {
                path: '/demo-geodesy/geodesy1/geodesy1-1/geodesy1-1-14',
                name: 'Geodesy1-1-14',
                component: '/demo/index',
                meta: { title: '单孔柱状图层位控制图' }
              }
            ]
          },
          {
            path: '/demo-geodesy/geodesy1/geodesy1-2',
            name: 'Geodesy1-2',
            component: '/demo/index',
            meta: { title: '地质文件' },
            children: [
              {
                path: '/demo-geodesy/geodesy1/geodesy1-2/geodesy1-2-1',
                name: 'Geodesy1-2-1',
                component: '/demo/index',
                meta: { title: '采区地质说明书' }
              },
              {
                path: '/demo-geodesy/geodesy1/geodesy1-2/geodesy1-2-2',
                name: 'Geodesy1-2-2',
                component: '/demo/index',
                meta: { title: '掘进工作面地质说明书' }
              },
              {
                path: '/demo-geodesy/geodesy1/geodesy1-2/geodesy1-2-3',
                name: 'Geodesy1-2-3',
                component: '/demo/index',
                meta: { title: '采煤工作面地质说明书' }
              },
              {
                path: '/demo-geodesy/geodesy1/geodesy1-2/geodesy1-2-4',
                name: 'Geodesy1-2-4',
                component: '/demo/index',
                meta: { title: '揭煤地质说明书' }
              },
              {
                path: '/demo-geodesy/geodesy1/geodesy1-2/geodesy1-2-5',
                name: 'Geodesy1-2-5',
                component: '/demo/index',
                meta: { title: '采区采后总结' }
              },
              {
                path: '/demo-geodesy/geodesy1/geodesy1-2/geodesy1-2-6',
                name: 'Geodesy1-2-6',
                component: '/demo/index',
                meta: { title: '工作面采后总结' }
              },
              {
                path: '/demo-geodesy/geodesy1/geodesy1-2/geodesy1-2-7',
                name: 'Geodesy1-2-7',
                component: '/demo/index',
                meta: { title: '年度采面地质预报' }
              },
              {
                path: '/demo-geodesy/geodesy1/geodesy1-2/geodesy1-2-8',
                name: 'Geodesy1-2-8',
                component: '/demo/index',
                meta: { title: '月度采面地质预报' }
              },
              {
                path: '/demo-geodesy/geodesy1/geodesy1-2/geodesy1-2-9',
                name: 'Geodesy1-2-9',
                component: '/demo/index',
                meta: { title: '临时采面地质预报' }
              }
            ]
          },
          {
            path: '/demo-geodesy/geodesy1/geodesy1-3',
            name: 'Geodesy1-3',
            component: '/demo/index',
            meta: { title: '地质技术资料' },
            children: [
              {
                path: '/demo-geodesy/geodesy1/geodesy1-3/geodesy1-3-1',
                name: 'Geodesy1-3-1',
                component: '/demo/index',
                meta: { title: '钻孔成果卡片' }
              },
              {
                path: '/demo-geodesy/geodesy1/geodesy1-3/geodesy1-3-2',
                name: 'Geodesy1-3-2',
                component: '/demo/index',
                meta: { title: '地质构造素描卡片' }
              },
              {
                path: '/demo-geodesy/geodesy1/geodesy1-3/geodesy1-3-3',
                name: 'Geodesy1-3-3',
                component: '/demo/index',
                meta: { title: '井筒石门见煤点柱状卡片' }
              },
              {
                path: '/demo-geodesy/geodesy1/geodesy1-3/geodesy1-3-4',
                name: 'Geodesy1-3-4',
                component: '/demo/index',
                meta: { title: '地质专业的业务规程' }
              },
              {
                path: '/demo-geodesy/geodesy1/geodesy1-3/geodesy1-3-5',
                name: 'Geodesy1-3-5',
                component: '/demo/index',
                meta: { title: '理论知识' }
              },
              {
                path: '/demo-geodesy/geodesy1/geodesy1-3/geodesy1-3-6',
                name: 'Geodesy1-3-6',
                component: '/demo/index',
                meta: { title: '培训教材标准规范' }
              }
            ]
          },
          {
            path: '/demo-geodesy/geodesy1/geodesy1-4',
            name: 'Geodesy1-4',
            component: '/demo/index',
            meta: { title: '行业标准管理' },
            children: [
              {
                path: '/demo-geodesy/geodesy1/geodesy1-4/geodesy1-4-1',
                name: 'Geodesy1-4-1',
                component: '/demo/index',
                meta: { title: '国家地质文件标准规范' }
              },
              {
                path: '/demo-geodesy/geodesy1/geodesy1-4/geodesy1-4-2',
                name: 'Geodesy1-4-2',
                component: '/demo/index',
                meta: { title: '省市地质文件标准规范' }
              },
              {
                path: '/demo-geodesy/geodesy1/geodesy1-4/geodesy1-4-3',
                name: 'Geodesy1-4-3',
                component: '/demo/index',
                meta: { title: '公司地质文件标准规范' }
              },
              {
                path: '/demo-geodesy/geodesy1/geodesy1-4/geodesy1-4-4',
                name: 'Geodesy1-4-4',
                component: '/demo/index',
                meta: { title: '矿井地质文件标准规范' }
              },
              {
                path: '/demo-geodesy/geodesy1/geodesy1-4/geodesy1-4-5',
                name: 'Geodesy1-4-5',
                component: '/demo/index',
                meta: { title: '规章制度' }
              }
            ]
          }
        ]
      },
      {
        path: '/demo-geodesy/geodesy2',
        name: 'Geodesy2',
        component: '/demo/index',
        meta: { title: '测量管理' },
        children: [
          {
            path: '/demo-geodesy/geodesy2/geodesy2-1',
            name: 'Geodesy2-1',
            component: '/demo/index',
            meta: { title: '测量图件' },
            children: [
              {
                path: '/demo-geodesy/geodesy2/geodesy2-1/geodesy2-1-1',
                name: 'Geodesy2-1-1',
                component: '/demo/index',
                meta: { title: '井田区域地形图' }
              },
              {
                path: '/demo-geodesy/geodesy2/geodesy2-1/geodesy2-1-2',
                name: 'Geodesy2-1-2',
                component: '/demo/index',
                meta: { title: '工业广场平面图' }
              },
              {
                path: '/demo-geodesy/geodesy2/geodesy2-1/geodesy2-1-3',
                name: 'Geodesy2-1-3',
                component: '/demo/index',
                meta: { title: '采掘工程平面图' }
              },
              {
                path: '/demo-geodesy/geodesy2/geodesy2-1/geodesy2-1-4',
                name: 'Geodesy2-1-4',
                component: '/demo/index',
                meta: { title: '井上下对照图' }
              },
              {
                path: '/demo-geodesy/geodesy2/geodesy2-1/geodesy2-1-5',
                name: 'Geodesy2-1-5',
                component: '/demo/index',
                meta: { title: '主要保安煤柱图' }
              },
              {
                path: '/demo-geodesy/geodesy2/geodesy2-1/geodesy2-1-6',
                name: 'Geodesy2-1-6',
                component: '/demo/index',
                meta: { title: '井筒断面图' }
              },
              {
                path: '/demo-geodesy/geodesy2/geodesy2-1/geodesy2-1-7',
                name: 'Geodesy2-1-7',
                component: '/demo/index',
                meta: { title: '东西翼测量图' }
              },
              {
                path: '/demo-geodesy/geodesy2/geodesy2-1/geodesy2-1-8',
                name: 'Geodesy2-1-8',
                component: '/demo/index',
                meta: { title: '井底车场图' }
              },
              {
                path: '/demo-geodesy/geodesy2/geodesy2-1/geodesy2-1-9',
                name: 'Geodesy2-1-9',
                component: '/demo/index',
                meta: { title: '主要巷道平面图' }
              }
            ]
          },
          {
            path: '/demo-geodesy/geodesy2/geodesy2-2',
            name: 'Geodesy2-2',
            component: '/demo/index',
            meta: { title: '测量文件' },
            children: [
              {
                path: '/demo-geodesy/geodesy2/geodesy2-2/geodesy2-2-1',
                name: 'Geodesy2-2-1',
                component: '/demo/index',
                meta: { title: '安全采掘通知单' }
              },
              {
                path: '/demo-geodesy/geodesy2/geodesy2-2/geodesy2-2-2',
                name: 'Geodesy2-2-2',
                component: '/demo/index',
                meta: { title: '安全贯通通知单' }
              },
              {
                path: '/demo-geodesy/geodesy2/geodesy2-2/geodesy2-2-3',
                name: 'Geodesy2-2-3',
                component: '/demo/index',
                meta: { title: '巷道开口通知单' }
              },
              {
                path: '/demo-geodesy/geodesy2/geodesy2-2/geodesy2-2-4',
                name: 'Geodesy2-2-4',
                component: '/demo/index',
                meta: { title: '停掘、停采通知单' }
              },
              {
                path: '/demo-geodesy/geodesy2/geodesy2-2/geodesy2-2-5',
                name: 'Geodesy2-2-5',
                component: '/demo/index',
                meta: { title: '巷道变坡、拐弯通知单' }
              },
              {
                path: '/demo-geodesy/geodesy2/geodesy2-2/geodesy2-2-6',
                name: 'Geodesy2-2-6',
                component: '/demo/index',
                meta: { title: '导线技术成果台账' }
              },
              {
                path: '/demo-geodesy/geodesy2/geodesy2-2/geodesy2-2-7',
                name: 'Geodesy2-2-7',
                component: '/demo/index',
                meta: { title: '临近未保护区通知单' }
              }
            ]
          },
          {
            path: '/demo-geodesy/geodesy2/geodesy2-3',
            name: 'Geodesy2-3',
            component: '/demo/index',
            meta: { title: '测量技术资料管理' },
            children: [
              {
                path: '/demo-geodesy/geodesy2/geodesy2-3/geodesy2-3-1',
                name: 'Geodesy2-3-1',
                component: '/demo/index',
                meta: { title: '业务规程' }
              },
              {
                path: '/demo-geodesy/geodesy2/geodesy2-3/geodesy2-3-2',
                name: 'Geodesy2-3-2',
                component: '/demo/index',
                meta: { title: '理论知识' }
              },
              {
                path: '/demo-geodesy/geodesy2/geodesy2-3/geodesy2-3-3',
                name: 'Geodesy2-3-3',
                component: '/demo/index',
                meta: { title: '培训教材' }
              },
              {
                path: '/demo-geodesy/geodesy2/geodesy2-3/geodesy2-3-4',
                name: 'Geodesy2-3-4',
                component: '/demo/index',
                meta: { title: '标准规范' }
              }
            ]
          }
        ]
      },
      {
        path: '/demo-geodesy/geodesy3',
        name: 'Geodesy3',
        component: '/demo/index',
        meta: { title: '水文管理' },
        children: [
          {
            path: '/demo-geodesy/geodesy3/geodesy3-1',
            name: 'Geodesy3-1',
            component: '/demo/index',
            meta: { title: '水文台账' },
            children: [
              {
                path: '/demo-geodesy/geodesy3/geodesy3-1/geodesy3-1-1',
                name: 'Geodesy3-1-1',
                component: '/demo/index',
                meta: { title: '矿井涌水量月报表' }
              },
              {
                path: '/demo-geodesy/geodesy3/geodesy3-1/geodesy3-1-2',
                name: 'Geodesy3-1-2',
                component: '/demo/index',
                meta: { title: '地表水体观测台账' }
              },
              {
                path: '/demo-geodesy/geodesy3/geodesy3-1/geodesy3-1-3',
                name: 'Geodesy3-1-3',
                component: '/demo/index',
                meta: { title: '矿井和周边煤矿采空区相关资料台账' }
              },
              {
                path: '/demo-geodesy/geodesy3/geodesy3-1/geodesy3-1-4',
                name: 'Geodesy3-1-4',
                component: '/demo/index',
                meta: { title: '水源水质受污染观测资料台账' }
              },
              {
                path: '/demo-geodesy/geodesy3/geodesy3-1/geodesy3-1-5',
                name: 'Geodesy3-1-5',
                component: '/demo/index',
                meta: { title: '地面水文观测孔水位动态月报表' }
              },
              {
                path: '/demo-geodesy/geodesy3/geodesy3-1/geodesy3-1-6',
                name: 'Geodesy3-1-6',
                component: '/demo/index',
                meta: { title: '地面水文地质钻孔台账' }
              },
              {
                path: '/demo-geodesy/geodesy3/geodesy3-1/geodesy3-1-7',
                name: 'Geodesy3-1-7',
                component: '/demo/index',
                meta: { title: '地面水文观测孔管理台账' }
              },
              {
                path: '/demo-geodesy/geodesy3/geodesy3-1/geodesy3-1-8',
                name: 'Geodesy3-1-8',
                component: '/demo/index',
                meta: { title: '钻孔水位、井泉动态观测成果及河流渗漏台账' }
              },
              {
                path: '/demo-geodesy/geodesy3/geodesy3-1/geodesy3-1-9',
                name: 'Geodesy3-1-9',
                component: '/demo/index',
                meta: { title: '封闭不良钻孔台账' }
              },
              {
                path: '/demo-geodesy/geodesy3/geodesy3-1/geodesy3-1-10',
                name: 'Geodesy3-1-10',
                component: '/demo/index',
                meta: { title: '井田地质钻孔综合成果台账' }
              }
            ]
          },
          {
            path: '/demo-geodesy/geodesy3/geodesy3-2',
            name: 'Geodesy3-2',
            component: '/demo/index',
            meta: { title: '水文台账预览' },
            children: [
              {
                path: '/demo-geodesy/geodesy3/geodesy3-2/geodesy3-2-1',
                name: 'Geodesy3-2-1',
                component: '/demo/index',
                meta: { title: '矿井涌水量月报表预览' }
              },
              {
                path: '/demo-geodesy/geodesy3/geodesy3-2/geodesy3-2-2',
                name: 'Geodesy3-2-2',
                component: '/demo/index',
                meta: { title: '地表水体观测台账预览' }
              },
              {
                path: '/demo-geodesy/geodesy3/geodesy3-2/geodesy3-2-3',
                name: 'Geodesy3-2-3',
                component: '/demo/index',
                meta: { title: '矿井和周边煤矿采空区相关资料台账预览' }
              },
              {
                path: '/demo-geodesy/geodesy3/geodesy3-2/geodesy3-2-4',
                name: 'Geodesy3-2-4',
                component: '/demo/index',
                meta: { title: '水源水质受污染观测资料台账预览' }
              },
              {
                path: '/demo-geodesy/geodesy3/geodesy3-2/geodesy3-2-5',
                name: 'Geodesy3-2-5',
                component: '/demo/index',
                meta: { title: '地面水文观测孔水位动态月报表预览' }
              },
              {
                path: '/demo-geodesy/geodesy3/geodesy3-2/geodesy3-2-6',
                name: 'Geodesy3-2-6',
                component: '/demo/index',
                meta: { title: '地面水文地质钻孔台账预览' }
              },
              {
                path: '/demo-geodesy/geodesy3/geodesy3-2/geodesy3-2-7',
                name: 'Geodesy3-2-7',
                component: '/demo/index',
                meta: { title: '地面水文观测孔管理台账预览' }
              }
            ]
          },
          {
            path: '/demo-geodesy/geodesy3/geodesy3-3',
            name: 'Geodesy3-3',
            component: '/demo/index',
            meta: { title: '防治水工程' },
            children: [
              {
                path: '/demo-geodesy/geodesy3/geodesy3-3/geodesy3-3-1',
                name: 'Geodesy3-3-1',
                component: '/demo/index',
                meta: { title: '中长期防治水计划' }
              },
              {
                path: '/demo-geodesy/geodesy3/geodesy3-3/geodesy3-3-2',
                name: 'Geodesy3-3-2',
                component: '/demo/index',
                meta: { title: '年度防治水计划' }
              },
              {
                path: '/demo-geodesy/geodesy3/geodesy3-3/geodesy3-3-3',
                name: 'Geodesy3-3-3',
                component: '/demo/index',
                meta: { title: '工程方案与设计' }
              },
              {
                path: '/demo-geodesy/geodesy3/geodesy3-3/geodesy3-3-4',
                name: 'Geodesy3-3-4',
                component: '/demo/index',
                meta: { title: '施工结果' }
              },
              {
                path: '/demo-geodesy/geodesy3/geodesy3-3/geodesy3-3-5',
                name: 'Geodesy3-3-5',
                component: '/demo/index',
                meta: { title: '探放水工程' }
              },
              {
                path: '/demo-geodesy/geodesy3/geodesy3-3/geodesy3-3-6',
                name: 'Geodesy3-3-6',
                component: '/demo/index',
                meta: { title: '水文地质情况分析报告和水害防治措施' }
              },
              {
                path: '/demo-geodesy/geodesy3/geodesy3-3/geodesy3-3-7',
                name: 'Geodesy3-3-7',
                component: '/demo/index',
                meta: { title: '水文地质情况评价报告和水害隐患治理情况分析报告' }
              }
            ]
          },
          {
            path: '/demo-geodesy/geodesy3/geodesy3-4',
            name: 'Geodesy3-4',
            component: '/demo/index',
            meta: { title: '水文资料' },
            children: [
              {
                path: '/demo-geodesy/geodesy3/geodesy3-4/geodesy3-4-1',
                name: 'Geodesy3-4-1',
                component: '/demo/index',
                meta: { title: '矿井水文地质类型划分报告' }
              },
              {
                path: '/demo-geodesy/geodesy3/geodesy3-4/geodesy3-4-2',
                name: 'Geodesy3-4-2',
                component: '/demo/index',
                meta: { title: '月度水文地质预报' }
              },
              {
                path: '/demo-geodesy/geodesy3/geodesy3-4/geodesy3-4-3',
                name: 'Geodesy3-4-3',
                component: '/demo/index',
                meta: { title: '允许掘进通知单' }
              },
              {
                path: '/demo-geodesy/geodesy3/geodesy3-4/geodesy3-4-4',
                name: 'Geodesy3-4-4',
                component: '/demo/index',
                meta: { title: '物探报告' }
              },
              {
                path: '/demo-geodesy/geodesy3/geodesy3-4/geodesy3-4-5',
                name: 'Geodesy3-4-5',
                component: '/demo/index',
                meta: { title: '防治水隐患排查记录' }
              }
            ]
          },
          {
            path: '/demo-geodesy/geodesy3/geodesy3-5',
            name: 'Geodesy3-5',
            component: '/demo/index',
            meta: { title: '水文图件' },
            children: [
              {
                path: '/demo-geodesy/geodesy3/geodesy3-5/geodesy3-5-1',
                name: 'Geodesy3-5-1',
                component: '/demo/index',
                meta: { title: '矿井充水性图' }
              },
              {
                path: '/demo-geodesy/geodesy3/geodesy3-5/geodesy3-5-2',
                name: 'Geodesy3-5-2',
                component: '/demo/index',
                meta: { title: '矿井综合水文地质柱状图' }
              },
              {
                path: '/demo-geodesy/geodesy3/geodesy3-5/geodesy3-5-3',
                name: 'Geodesy3-5-3',
                component: '/demo/index',
                meta: { title: '矿井水文地质剖面图' }
              },
              {
                path: '/demo-geodesy/geodesy3/geodesy3-5/geodesy3-5-4',
                name: 'Geodesy3-5-4',
                component: '/demo/index',
                meta: { title: '矿井综合水文地质图' }
              },
              {
                path: '/demo-geodesy/geodesy3/geodesy3-5/geodesy3-5-5',
                name: 'Geodesy3-5-5',
                component: '/demo/index',
                meta: { title: '矿井涌水量与各种相关因素动态曲线图' }
              },
              {
                path: '/demo-geodesy/geodesy3/geodesy3-5/geodesy3-5-6',
                name: 'Geodesy3-5-6',
                component: '/demo/index',
                meta: { title: '年度水害分析预测表及水害预测图' }
              }
            ]
          },
          {
            path: '/demo-geodesy/geodesy3/geodesy3-6',
            name: 'Geodesy3-6',
            component: '/demo/index',
            meta: { title: '水质分析' },
            children: [
              {
                path: '/demo-geodesy/geodesy3/geodesy3-6/geodesy3-6-1',
                name: 'Geodesy3-6-1',
                component: '/demo/index',
                meta: { title: '水质分析台账' }
              },
              {
                path: '/demo-geodesy/geodesy3/geodesy3-6/geodesy3-6-2',
                name: 'Geodesy3-6-2',
                component: '/demo/index',
                meta: { title: '未知水样判别' }
              },
              {
                path: '/demo-geodesy/geodesy3/geodesy3-6/geodesy3-6-3',
                name: 'Geodesy3-6-3',
                component: '/demo/index',
                meta: { title: '已知水样分析' }
              }
            ]
          }
        ]
      },
      {
        path: '/demo-geodesy/geodesy4',
        name: 'Geodesy4',
        component: '/demo/index',
        meta: { title: '储量管理' },
        children: [
          {
            path: '/demo-geodesy/geodesy4/geodesy4-1',
            name: 'Geodesy4-1',
            component: '/demo/index',
            meta: { title: '分工作面各月损失量分析及回采率计算基础台账' }
          },
          {
            path: '/demo-geodesy/geodesy4/geodesy4-2',
            name: 'Geodesy4-2',
            component: '/demo/index',
            meta: { title: '分月分采区分煤层损失量分析及回采率计算基础台账' }
          },
          {
            path: '/demo-geodesy/geodesy4/geodesy4-3',
            name: 'Geodesy4-3',
            component: '/demo/index',
            meta: { title: '矿井期末保有储量计算基础和汇总数字台账' }
          },
          {
            path: '/demo-geodesy/geodesy4/geodesy4-4',
            name: 'Geodesy4-4',
            component: '/demo/index',
            meta: { title: '矿井“三下“压煤台账' }
          },
          {
            path: '/demo-geodesy/geodesy4/geodesy4-5',
            name: 'Geodesy4-5',
            component: '/demo/index',
            meta: { title: '矿井永久煤柱台账' }
          },
          {
            path: '/demo-geodesy/geodesy4/geodesy4-6',
            name: 'Geodesy4-6',
            component: '/demo/index',
            meta: { title: '矿井损失量摊销台账' }
          },
          {
            path: '/demo-geodesy/geodesy4/geodesy4-7',
            name: 'Geodesy4-7',
            component: '/demo/index',
            meta: { title: '矿井储量增减、变动审批情况台账' }
          },
          {
            path: '/demo-geodesy/geodesy4/geodesy4-8',
            name: 'Geodesy4-8',
            component: '/demo/index',
            meta: { title: '矿井储量动态数字台账' }
          },
          {
            path: '/demo-geodesy/geodesy4/geodesy4-9',
            name: 'Geodesy4-9',
            component: '/demo/index',
            meta: { title: '“三量”计算成果台账' }
          }
        ]
      },
      {
        path: '/demo-geodesy/geodesy5',
        name: 'Geodesy5',
        component: '/demo/index',
        meta: { title: '地测资料管理' },
        children: [
          {
            path: '/demo-geodesy/geodesy5/geodesy5-1',
            name: 'Geodesy5-1',
            component: '/demo/index',
            meta: { title: '超前物探信息表' }
          },
          {
            path: '/demo-geodesy/geodesy5/geodesy5-2',
            name: 'Geodesy5-2',
            component: '/demo/index',
            meta: { title: '工作面钻孔注浆管理' }
          },
          {
            path: '/demo-geodesy/geodesy4/geodesy5-3',
            name: 'Geodesy5-3',
            component: '/demo/index',
            meta: { title: '巷道贯通管理' }
          },
          {
            path: '/demo-geodesy/geodesy4/geodesy5-4',
            name: 'Geodesy5-4',
            component: '/demo/index',
            meta: { title: '超前钻探管理台账' }
          },
          {
            path: '/demo-geodesy/geodesy4/geodesy5-5',
            name: 'Geodesy5-5',
            component: '/demo/index',
            meta: { title: '沉陷观测' }
          }
        ]
      }
    ]
  },
  // 采掘管理
  {
    path: '/demo-excavate',
    name: 'DemoExcavate',
    component: 'Layout',
    redirect: '/demo-excavate/excavate1',
    meta: { title: '采掘管理' },
    children: [
      {
        path: '/demo-excavate/excavate1',
        name: 'Excavate1',
        component: '/demo/index',
        meta: { title: '基础设计信息' },
        children: [
          {
            path: '/demo-excavate/excavate1/excavate1-1',
            name: 'Excavate1-1',
            component: '/demo/index',
            meta: { title: '矿井基础信息' }
          },
          {
            path: '/demo-excavate/excavate1/excavate1-2',
            name: 'Excavate1-2',
            component: '/demo/index',
            meta: { title: '煤层编号信息' }
          },
          {
            path: '/demo-excavate/excavate1/excavate1-3',
            name: 'Excavate1-3',
            component: '/demo/index',
            meta: { title: '水平基本信息' }
          },
          {
            path: '/demo-excavate/excavate1/excavate1-4',
            name: 'Excavate1-4',
            component: '/demo/index',
            meta: { title: '采区基本信息' }
          },
          {
            path: '/demo-excavate/excavate1/excavate1-5',
            name: 'Excavate1-5',
            component: '/demo/index',
            meta: { title: '采煤队信息' }
          },
          {
            path: '/demo-excavate/excavate1/excavate1-6',
            name: 'Excavate1-6',
            component: '/demo/index',
            meta: { title: '掘进队信息' }
          },
          {
            path: '/demo-excavate/excavate1/excavate1-7',
            name: 'Excavate1-7',
            component: '/demo/index',
            meta: { title: '工作面管理' }
          },
          {
            path: '/demo-excavate/excavate1/excavate1-8',
            name: 'Excavate1-8',
            component: '/demo/index',
            meta: { title: '巷道管理' }
          }
        ]
      },
      {
        path: '/demo-excavate/excavate2',
        name: 'Excavate2',
        component: '/demo/index',
        meta: { title: '生产计划' },
        children: [
          {
            path: '/demo-excavate/excavate2/excavate2-1',
            name: 'Excavate2-1',
            component: '/demo/index',
            meta: { title: '产量月计划表' }
          },
          {
            path: '/demo-excavate/excavate2/excavate2-2',
            name: 'Excavate2-2',
            component: '/demo/index',
            meta: { title: '掘进月计划表' }
          },
          {
            path: '/demo-excavate/excavate2/excavate2-3',
            name: 'Excavate2-3',
            component: '/demo/index',
            meta: { title: '煤巷掘进接替年计划表' }
          },
          {
            path: '/demo-excavate/excavate2/excavate2-4',
            name: 'Excavate2-4',
            component: '/demo/index',
            meta: { title: '岩巷工程接替年计划表' }
          },
          {
            path: '/demo-excavate/excavate2/excavate2-5',
            name: 'Excavate2-5',
            component: '/demo/index',
            meta: { title: '工作面接续年计划表' }
          },
          {
            path: '/demo-excavate/excavate2/excavate2-6',
            name: 'Excavate2-6',
            component: '/demo/index',
            meta: { title: '年计划预览表' }
          }
        ]
      },
      {
        path: '/demo-excavate/excavate3',
        name: 'Excavate3',
        component: '/demo/index',
        meta: { title: '生产管理' },
        children: [
          {
            path: '/demo-excavate/excavate3/excavate3-1',
            name: 'Excavate3-1',
            component: '/demo/index',
            meta: { title: '工作面生命周期管理' }
          },
          {
            path: '/demo-excavate/excavate3/excavate3-2',
            name: 'Excavate3-2',
            component: '/demo/index',
            meta: { title: '巷道生命周期管理' }
          },
          {
            path: '/demo-excavate/excavate3/excavate3-3',
            name: 'Excavate3-3',
            component: '/demo/index',
            meta: { title: '采掘作业规程' }
          }
        ]
      },
      {
        path: '/demo-excavate/excavate4',
        name: 'Excavate4',
        component: '/demo/index',
        meta: { title: '生产图件' },
        children: [
          {
            path: '/demo-excavate/excavate4/excavate4-1',
            name: 'Excavate4-1',
            component: '/demo/index',
            meta: { title: '工作面图纸' }
          },
          {
            path: '/demo-excavate/excavate4/excavate4-2',
            name: 'Excavate4-2',
            component: '/demo/index',
            meta: { title: '巷道图纸' }
          },
          {
            path: '/demo-excavate/excavate4/excavate4-3',
            name: 'Excavate4-3',
            component: '/demo/index',
            meta: { title: '采掘工程设计图' }
          },
          {
            path: '/demo-excavate/excavate4/excavate4-4',
            name: 'Excavate4-4',
            component: '/demo/index',
            meta: { title: '单项工程图纸' }
          }
        ]
      },
      {
        path: '/demo-excavate/excavate5',
        name: 'Excavate5',
        component: '/demo/index',
        meta: { title: '生产文档' },
        children: [
          {
            path: '/demo-excavate/excavate5/excavate5-1',
            name: 'Excavate5-1',
            component: '/demo/index',
            meta: { title: '掘进开拓方案' }
          },
          {
            path: '/demo-excavate/excavate5/excavate5-2',
            name: 'Excavate5-2',
            component: '/demo/index',
            meta: { title: '采煤方案' }
          },
          {
            path: '/demo-excavate/excavate5/excavate5-3',
            name: 'Excavate5-3',
            component: '/demo/index',
            meta: { title: '理论知识' }
          },
          {
            path: '/demo-excavate/excavate5/excavate5-4',
            name: 'Excavate5-4',
            component: '/demo/index',
            meta: { title: '培训教材' }
          },
          {
            path: '/demo-excavate/excavate5/excavate5-5',
            name: 'Excavate5-5',
            component: '/demo/index',
            meta: { title: '标准规范' }
          },
          {
            path: '/demo-excavate/excavate5/excavate5-6',
            name: 'Excavate5-6',
            component: '/demo/index',
            meta: { title: '上报上级单位周报' }
          },
          {
            path: '/demo-excavate/excavate5/excavate5-7',
            name: 'Excavate5-7',
            component: '/demo/index',
            meta: { title: '上报上级单位月报' }
          },
          {
            path: '/demo-excavate/excavate5/excavate5-8',
            name: 'Excavate5-8',
            component: '/demo/index',
            meta: { title: '上报上级单位季报' }
          },
          {
            path: '/demo-excavate/excavate5/excavate5-9',
            name: 'Excavate5-9',
            component: '/demo/index',
            meta: { title: '上报上级单位年报' }
          }
        ]
      }
    ]
  },
  // 生产调度
  {
    path: '/demo-dispatch',
    name: 'DemoDispatch',
    component: 'Layout',
    redirect: '/demo-dispatch/dispatch1',
    meta: { title: '生产调度' },
    children: [
      {
        path: '/demo-dispatch/dispatch1',
        name: 'Dispatch1',
        component: '/demo/index',
        meta: { title: '调度台账' },
        children: [
          {
            path: '/demo-dispatch/dispatch1/dispatch1-1',
            name: 'Dispatch1-1',
            component: '/demo/index',
            meta: { title: '采煤工作面日报' }
          },
          {
            path: '/demo-dispatch/dispatch1/dispatch1-2',
            name: 'Dispatch1-2',
            component: '/demo/index',
            meta: { title: '主井提升及调度生产动态' }
          },
          {
            path: '/demo-dispatch/dispatch1/dispatch1-3',
            name: 'Dispatch1-3',
            component: '/demo/index',
            meta: { title: '中央区副井提升情况表' }
          },
          {
            path: '/demo-dispatch/dispatch1/dispatch1-4',
            name: 'Dispatch1-4',
            component: '/demo/index',
            meta: { title: '南区副井提升情况表' }
          },
          {
            path: '/demo-dispatch/dispatch1/dispatch1-5',
            name: 'Dispatch1-5',
            component: '/demo/index',
            meta: { title: '东区副井提升情况表' }
          },
          {
            path: '/demo-dispatch/dispatch1/dispatch1-6',
            name: 'Dispatch1-6',
            component: '/demo/index',
            meta: { title: '深部基本井提升情况表' }
          },
          {
            path: '/demo-dispatch/dispatch1/dispatch1-7',
            name: 'Dispatch1-7',
            component: '/demo/index',
            meta: { title: '回采工作面区队长汇报记录' }
          },
          {
            path: '/demo-dispatch/dispatch1/dispatch1-8',
            name: 'Dispatch1-8',
            component: '/demo/index',
            meta: { title: '掘进工作面区队长汇报记录' }
          },
          {
            path: '/demo-dispatch/dispatch1/dispatch1-9',
            name: 'Dispatch1-9',
            component: '/demo/index',
            meta: { title: '巷道贯通日报' }
          },
          {
            path: '/demo-dispatch/dispatch1/dispatch1-10',
            name: 'Dispatch1-10',
            component: '/demo/index',
            meta: { title: '巷道揭煤日报' }
          },
          {
            path: '/demo-dispatch/dispatch1/dispatch1-11',
            name: 'Dispatch1-11',
            component: '/demo/index',
            meta: { title: '工作面安装日报' }
          },
          {
            path: '/demo-dispatch/dispatch1/dispatch1-12',
            name: 'Dispatch1-12',
            component: '/demo/index',
            meta: { title: '工作面拆除日报' }
          },
          {
            path: '/demo-dispatch/dispatch1/dispatch1-13',
            name: 'Dispatch1-13',
            component: '/demo/index',
            meta: { title: '煤管科生产信息日报' }
          },
          {
            path: '/demo-dispatch/dispatch1/dispatch1-14',
            name: 'Dispatch1-14',
            component: '/demo/index',
            meta: { title: '矸石仓地点信息表' }
          },
          {
            path: '/demo-dispatch/dispatch1/dispatch1-15',
            name: 'Dispatch1-15',
            component: '/demo/index',
            meta: { title: '矸石仓放矸日报' }
          }
        ]
      },
      {
        path: '/demo-dispatch/dispatch2',
        name: 'Dispatch2',
        component: '/demo/index',
        meta: { title: '调度管理' },
        children: [
          {
            path: '/demo-dispatch/dispatch2/dispatch2-1',
            name: 'Dispatch2-1',
            component: '/demo/index',
            meta: { title: '入井人数日统计' }
          },
          {
            path: '/demo-dispatch/dispatch2/dispatch2-2',
            name: 'Dispatch2-2',
            component: '/demo/index',
            meta: { title: '矿领导值班计划表' }
          },
          {
            path: '/demo-dispatch/dispatch2/dispatch2-3',
            name: 'Dispatch2-3',
            component: '/demo/index',
            meta: { title: '矿领导带班计划表' }
          },
          {
            path: '/demo-dispatch/dispatch2/dispatch2-4',
            name: 'Dispatch2-4',
            component: '/demo/index',
            meta: { title: '防汛值班计划表' }
          },
          {
            path: '/demo-dispatch/dispatch2/dispatch2-5',
            name: 'Dispatch2-5',
            component: '/demo/index',
            meta: { title: '调度员值班计划表' }
          },
          {
            path: '/demo-dispatch/dispatch2/dispatch2-6',
            name: 'Dispatch2-6',
            component: '/demo/index',
            meta: { title: '各单位值跟班计划表' }
          },
          {
            path: '/demo-dispatch/dispatch2/dispatch2-7',
            name: 'Dispatch2-7',
            component: '/demo/index',
            meta: { title: '各单位值跟班计划预览表' }
          },
          {
            path: '/demo-dispatch/dispatch2/dispatch2-8',
            name: 'Dispatch2-8',
            component: '/demo/index',
            meta: { title: '调度数据锁定' }
          },
          {
            path: '/demo-dispatch/dispatch2/dispatch2-9',
            name: 'Dispatch2-9',
            component: '/demo/index',
            meta: { title: '公文公告' }
          },
          {
            path: '/demo-dispatch/dispatch2/dispatch2-10',
            name: 'Dispatch2-10',
            component: '/demo/index',
            meta: { title: '公文公告查看' }
          },
          {
            path: '/demo-dispatch/dispatch2/dispatch2-11',
            name: 'Dispatch2-11',
            component: '/demo/index',
            meta: { title: '早调会领导下派任务' }
          },
          {
            path: '/demo-dispatch/dispatch2/dispatch2-12',
            name: 'Dispatch2-12',
            component: '/demo/index',
            meta: { title: '早调会领导下派任务记录' }
          }
        ]
      },
      {
        path: '/demo-dispatch/dispatch3',
        name: 'Dispatch3',
        component: '/demo/index',
        meta: { title: '调度汇报' },
        children: [
          {
            path: '/demo-dispatch/dispatch3/dispatch3-1',
            name: 'Dispatch3-1',
            component: '/demo/index',
            meta: { title: '调度资料' },
            children: [
              {
                path: '/demo-dispatch/dispatch3/dispatch3-1/dispatch3-1-1',
                name: 'Dispatch3-1-1',
                component: '/demo/index',
                meta: { title: '管理制度' }
              },
              {
                path: '/demo-dispatch/dispatch3/dispatch3-1/dispatch3-1-2',
                name: 'Dispatch3-1-2',
                component: '/demo/index',
                meta: { title: '机构建设' }
              },
              {
                path: '/demo-dispatch/dispatch3/dispatch3-1/dispatch3-1-3',
                name: 'Dispatch3-1-3',
                component: '/demo/index',
                meta: { title: '领导讲话' }
              },
              {
                path: '/demo-dispatch/dispatch3/dispatch3-1/dispatch3-1-4',
                name: 'Dispatch3-1-4',
                component: '/demo/index',
                meta: { title: '政策法规' }
              }
            ]
          },
          {
            path: '/demo-dispatch/dispatch3/dispatch3-2',
            name: 'Dispatch3-2',
            component: '/demo/index',
            meta: { title: '作业月计划预览' }
          },
          {
            path: '/demo-dispatch/dispatch3/dispatch3-3',
            name: 'Dispatch3-3',
            component: '/demo/index',
            meta: { title: '生产综合台账' }
          }
        ]
      }
    ]
  },
  // 安全管理
  {
    path: '/demo-safe',
    name: 'DemoSafe',
    component: 'Layout',
    redirect: '/demo-safe/safe1',
    meta: { title: '安全管理' },
    children: [
      {
        path: '/demo-safe/safe1',
        name: 'Safe1',
        component: '/demo/index',
        meta: { title: '安全生产标准化' },
        children: [
          {
            path: '/demo-safe/safe1/safe1-1',
            name: 'Safe1-1',
            component: '/demo/index',
            meta: { title: '达标规划' },
            children: [
              {
                path: '/demo-safe/safe1/safe1-1/safe1-1-1',
                name: 'Safe1-1-1',
                component: '/demo/index',
                meta: { title: '年度规划' }
              },
              {
                path: '/demo-safe/safe1/safe1-1/safe1-1-2',
                name: 'Safe1-1-2',
                component: '/demo/index',
                meta: { title: '季度计划' }
              },
              {
                path: '/demo-safe/safe1/safe1-1/safe1-1-3',
                name: 'Safe1-1-3',
                component: '/demo/index',
                meta: { title: '月度计划' }
              }
            ]
          },
          {
            path: '/demo-safe/safe1/safe1-2',
            name: 'Safe1-2',
            component: '/demo/index',
            meta: { title: '标准化评分管理' },
            children: [
              {
                path: '/demo-safe/safe1/safe1-2/safe1-2-1',
                name: 'Safe1-2-1',
                component: '/demo/index',
                meta: { title: '理念目标和矿长安全承诺' }
              },
              {
                path: '/demo-safe/safe1/safe1-2/safe1-2-2',
                name: 'Safe1-2-2',
                component: '/demo/index',
                meta: { title: '组织机构' }
              },
              {
                path: '/demo-safe/safe1/safe1-2/safe1-2-3',
                name: 'Safe1-2-3',
                component: '/demo/index',
                meta: { title: '安全生产责任制及安全管理制度' }
              },
              {
                path: '/demo-safe/safe1/safe1-2/safe1-2-4',
                name: 'Safe1-2-4',
                component: '/demo/index',
                meta: { title: '从业人员素质' }
              },
              {
                path: '/demo-safe/safe1/safe1-2/safe1-2-5',
                name: 'Safe1-2-5',
                component: '/demo/index',
                meta: { title: '安全风险分级管控' }
              },
              {
                path: '/demo-safe/safe1/safe1-2/safe1-2-6',
                name: 'Safe1-2-6',
                component: '/demo/index',
                meta: { title: '事故隐患排查治理' }
              },
              {
                path: '/demo-safe/safe1/safe1-2/safe1-2-7',
                name: 'Safe1-2-7',
                component: '/demo/index',
                meta: { title: '质量控制_通风' }
              },
              {
                path: '/demo-safe/safe1/safe1-2/safe1-2-8',
                name: 'Safe1-2-8',
                component: '/demo/index',
                meta: { title: '质量控制_地质灾害防治与测量' }
              },
              {
                path: '/demo-safe/safe1/safe1-2/safe1-2-9',
                name: 'Safe1-2-9',
                component: '/demo/index',
                meta: { title: '质量控制_采煤' }
              },
              {
                path: '/demo-safe/safe1/safe1-2/safe1-2-10',
                name: 'Safe1-2-10',
                component: '/demo/index',
                meta: { title: '质量控制_掘进' }
              },
              {
                path: '/demo-safe/safe1/safe1-2/safe1-2-11',
                name: 'Safe1-2-11',
                component: '/demo/index',
                meta: { title: '质量控制_机电' }
              },
              {
                path: '/demo-safe/safe1/safe1-2/safe1-2-12',
                name: 'Safe1-2-12',
                component: '/demo/index',
                meta: { title: '质量控制_运输' }
              },
              {
                path: '/demo-safe/safe1/safe1-2/safe1-2-13',
                name: 'Safe1-2-13',
                component: '/demo/index',
                meta: { title: '质量控制_调度和应急管理' }
              },
              {
                path: '/demo-safe/safe1/safe1-2/safe1-2-14',
                name: 'Safe1-2-14',
                component: '/demo/index',
                meta: { title: '质量控制_职业病危害防治和地面设施' }
              },
              {
                path: '/demo-safe/safe1/safe1-2/safe1-2-15',
                name: 'Safe1-2-15',
                component: '/demo/index',
                meta: { title: '持续改进' }
              }
            ]
          },
          {
            path: '/demo-safe/safe1/safe1-3',
            name: 'Safe1-3',
            component: '/demo/index',
            meta: { title: '标准化评分汇总' }
          },
          {
            path: '/demo-safe/safe1/safe1-4',
            name: 'Safe1-4',
            component: '/demo/index',
            meta: { title: '矿井地质类型设置' }
          },
          {
            path: '/demo-safe/safe1/safe1-5',
            name: 'Safe1-5',
            component: '/demo/index',
            meta: { title: '标准化知识库' }
          }
        ]
      },
      {
        path: '/demo-safe/safe2',
        name: 'Safe2',
        component: '/demo/index',
        meta: { title: '安全风险分级管控' },
        children: [
          {
            path: '/demo-safe/safe2-1',
            name: 'Safe2-1',
            component: '/demo/index',
            meta: { title: '管理制度' },
            children: [
              {
                path: '/demo-safe/safe2-1/safe2-1-1',
                name: 'Safe2-1-1',
                component: '/demo/index',
                meta: { title: '安全风险分级管理制度' }
              },
              {
                path: '/demo-safe/safe2-1/safe2-1-2',
                name: 'Safe2-1-2',
                component: '/demo/index',
                meta: { title: '风险组织结构' }
              },
              {
                path: '/demo-safe/safe2-1/safe2-1-3',
                name: 'Safe2-1-3',
                component: '/demo/index',
                meta: { title: '风险责任体系' }
              }
            ]
          },
          {
            path: '/demo-safe/safe2/safe2-2',
            name: 'Safe2-2',
            component: '/demo/index',
            meta: { title: '年度辨识评估' },
            children: [
              {
                path: '/demo-safe/safe2/safe2-2/safe2-2-1',
                name: 'Safe2-2-1',
                component: '/demo/index',
                meta: { title: '年度辨识评估报告' }
              },
              {
                path: '/demo-safe/safe2/safe2-2/safe2-2-2',
                name: 'Safe2-2-2',
                component: '/demo/index',
                meta: { title: '风险辨识库' }
              }
            ]
          },
          {
            path: '/demo-safe/safe2/safe2-3',
            name: 'Safe2-3',
            component: '/demo/index',
            meta: { title: '专项辨识：设计前' },
            children: [
              {
                path: '/demo-safe/safe2/safe2-3/safe2-3-1',
                name: 'Safe2-3-1',
                component: '/demo/index',
                meta: { title: '设计前风险清单' }
              },
              {
                path: '/demo-safe/safe2/safe2-3/safe2-3-2',
                name: 'Safe2-3-2',
                component: '/demo/index',
                meta: { title: '设计前辨识报告' }
              }
            ]
          },
          {
            path: '/demo-safe/safe2/safe2-4',
            name: 'Safe2-4',
            component: '/demo/index',
            meta: { title: '专项辨识：变化后' },
            children: [
              {
                path: '/demo-safe/safe2/safe2-4/safe2-4-1',
                name: 'Safe2-4-1',
                component: '/demo/index',
                meta: { title: '变化后风险清单' }
              },
              {
                path: '/demo-safe/safe2/safe2-4/safe2-4-2',
                name: 'Safe2-4-2',
                component: '/demo/index',
                meta: { title: '变化后辨识报告' }
              }
            ]
          },
          {
            path: '/demo-safe/safe2/safe2-5',
            name: 'Safe2-5',
            component: '/demo/index',
            meta: { title: '专项辨识：施工前' },
            children: [
              {
                path: '/demo-safe/safe2/safe2-5/safe2-5-1',
                name: 'Safe2-5-1',
                component: '/demo/index',
                meta: { title: '施工前风险清单' }
              },
              {
                path: '/demo-safe/safe2/safe2-5/safe2-5-2',
                name: 'Safe2-5-2',
                component: '/demo/index',
                meta: { title: '施工前辨识报告' }
              }
            ]
          },
          {
            path: '/demo-safe/safe2/safe2-6',
            name: 'Safe2-6',
            component: '/demo/index',
            meta: { title: '专项辨识：事故后' },
            children: [
              {
                path: '/demo-safe/safe2/safe2-6/safe2-6-1',
                name: 'Safe2-6-1',
                component: '/demo/index',
                meta: { title: '事故后风险清单' }
              },
              {
                path: '/demo-safe/safe2/safe2-6/safe2-6-2',
                name: 'Safe2-6-2',
                component: '/demo/index',
                meta: { title: '事故后辨识报告' }
              }
            ]
          },
          {
            path: '/demo-safe/safe2/safe2-7',
            name: 'Safe2-7',
            component: '/demo/index',
            meta: { title: '现状风险辨识评估' }
          },
          {
            path: '/demo-safe/safe2/safe2-8',
            name: 'Safe2-8',
            component: '/demo/index',
            meta: { title: '安全风险管控' }
          },
          {
            path: '/demo-safe/safe2/safe2-9',
            name: 'Safe2-9',
            component: '/demo/index',
            meta: { title: '风险分析' }
          }
        ]
      },
      {
        path: '/demo-safe/safe3',
        name: 'Safe3',
        component: '/demo/index',
        meta: { title: '隐患排查治理' },
        children: [
          {
            path: '/demo-safe/safe3/safe3-1',
            name: 'Safe3-1',
            component: '/demo/index',
            meta: { title: '工作机制' },
            children: [
              {
                path: '/demo-safe/safe3/safe3-1/safe3-1-1',
                name: 'Safe3-1-1',
                component: '/demo/index',
                meta: { title: '隐患组织结构' }
              },
              {
                path: '/demo-safe/safe3/safe3-1/safe3-1-2',
                name: 'Safe3-1-2',
                component: '/demo/index',
                meta: { title: '隐患责任体系' }
              }
            ]
          },
          {
            path: '/demo-safe/safe3/safe3-2',
            name: 'Safe3-2',
            component: '/demo/index',
            meta: { title: '事故隐患登记' }
          },
          {
            path: '/demo-safe/safe3/safe3-3',
            name: 'Safe3-3',
            component: '/demo/index',
            meta: { title: '隐患监督管理' },
            children: [
              {
                path: '/demo-safe/safe3/safe3-3/safe3-3-1',
                name: 'Safe3-3-1',
                component: '/demo/index',
                meta: { title: '隐患整改' }
              },
              {
                path: '/demo-safe/safe3/safe3-3/safe3-3-2',
                name: 'Safe3-3-2',
                component: '/demo/index',
                meta: { title: '延期审批' }
              },
              {
                path: '/demo-safe/safe3/safe3-3/safe3-3-3',
                name: 'Safe3-3-3',
                component: '/demo/index',
                meta: { title: '隐患验收' }
              },
              {
                path: '/demo-safe/safe3/safe3-3/safe3-3-4',
                name: 'Safe3-3-4',
                component: '/demo/index',
                meta: { title: '超期隐患' }
              },
              {
                path: '/demo-safe/safe3/safe3-3/safe3-3-5',
                name: 'Safe3-3-5',
                component: '/demo/index',
                meta: { title: '治理督办' }
              }
            ]
          },
          {
            path: '/demo-safe/safe3/safe3-4',
            name: 'Safe3-4',
            component: '/demo/index',
            meta: { title: '隐患清单' }
          },
          {
            path: '/demo-safe/safe3/safe3-5',
            name: 'Safe3-5',
            component: '/demo/index',
            meta: { title: '隐患统计分析' }
          }
        ]
      },
      {
        path: '/demo-safe/safe4',
        name: 'Safe4',
        component: '/demo/index',
        meta: { title: '三违管理' },
        children: [
          {
            path: '/demo-safe/safe4/safe4-1',
            name: 'Safe4-1',
            component: '/demo/index',
            meta: { title: '三违文档管理' }
          },
          {
            path: '/demo-safe/safe4/safe4-2',
            name: 'Safe4-2',
            component: '/demo/index',
            meta: { title: '三违登记' }
          },
          {
            path: '/demo-safe/safe4/safe4-3',
            name: 'Safe4-3',
            component: '/demo/index',
            meta: { title: '三违分析' }
          }
        ]
      },
      {
        path: '/demo-safe/safe5',
        name: 'Safe5',
        component: '/demo/index',
        meta: { title: '证照管理' },
        children: [
          {
            path: '/demo-safe/safe5/safe5-1',
            name: 'Safe5-1',
            component: '/demo/index',
            meta: { title: '三证一照' }
          }
        ]
      },
      {
        path: '/demo-safe/safe6',
        name: 'Safe6',
        component: '/demo/index',
        meta: { title: '职业卫生' },
        children: [
          {
            path: '/demo-safe/safe6/safe6-1',
            name: 'Safe6-1',
            component: '/demo/index',
            meta: { title: '体检' }
          },
          {
            path: '/demo-safe/safe6/safe6-2',
            name: 'Safe6-2',
            component: '/demo/index',
            meta: { title: '劳保发放' },
            children: [
              {
                path: '/demo-safe/safe6/safe6-2/safe6-2-1',
                name: 'Safe6-2-1',
                component: '/demo/index',
                meta: { title: '年度计划' }
              },
              {
                path: '/demo-safe/safe6/safe6-2/safe6-2-2',
                name: 'Safe6-2-2',
                component: '/demo/index',
                meta: { title: '季度计划' }
              },
              {
                path: '/demo-safe/safe6/safe6-2/safe6-2-3',
                name: 'Safe6-2-3',
                component: '/demo/index',
                meta: { title: '劳保发放记录' }
              }
            ]
          },
          {
            path: '/demo-safe/safe6/safe6-3',
            name: 'Safe6-3',
            component: '/demo/index',
            meta: { title: '职业病危害防治' }
          },
          {
            path: '/demo-safe/safe6/safe6-4',
            name: 'Safe6-4',
            component: '/demo/index',
            meta: { title: '职业病危害告知' }
          }
        ]
      },
      {
        path: '/demo-safe/safe7',
        name: 'Safe7',
        component: '/demo/index',
        meta: { title: '安全综合管理' },
        children: [
          {
            path: '/demo-safe/safe7/safe7-1',
            name: 'Safe7-1',
            component: '/demo/index',
            meta: { title: '事故警示教育' }
          },
          {
            path: '/demo-safe/safe7/safe7-2',
            name: 'Safe7-2',
            component: '/demo/index',
            meta: { title: '国家安全文件' }
          },
          {
            path: '/demo-safe/safe7/safe7-3',
            name: 'Safe7-3',
            component: '/demo/index',
            meta: { title: '省市安全文件' }
          },
          {
            path: '/demo-safe/safe7/safe7-4',
            name: 'Safe7-4',
            component: '/demo/index',
            meta: { title: '集团安全文件' }
          },
          {
            path: '/demo-safe/safe7/safe7-5',
            name: 'Safe7-5',
            component: '/demo/index',
            meta: { title: '矿井安全文件' }
          },
          {
            path: '/demo-safe/safe7/safe7-6',
            name: 'Safe7-6',
            component: '/demo/index',
            meta: { title: '矿井安全例会' }
          },
          {
            path: '/demo-safe/safe7/safe7-7',
            name: 'Safe7-7',
            component: '/demo/index',
            meta: { title: '安全地点管理' }
          },
          {
            path: '/demo-safe/safe7/safe7-8',
            name: 'Safe7-8',
            component: '/demo/index',
            meta: { title: '员工培训台账' }
          }
        ]
      }
    ]
  },
  // 应急救援
  {
    path: '/demo-emergency',
    name: 'DemoEmergency',
    component: 'Layout',
    redirect: '/demo-emergency/emergency1',
    meta: { title: '应急救援' },
    children: [
      {
        path: '/demo-emergency/emergency1',
        name: 'Emergency1',
        component: '/demo/index',
        meta: { title: '应急救援指南' },
        children: [
          {
            path: '/demo-emergency/emergency1/emergency1-1',
            name: 'Emergency1-1',
            component: '/demo/index',
            meta: { title: '事故管理' }
          },
          {
            path: '/demo-emergency/emergency1/emergency1-2',
            name: 'Emergency1-2',
            component: '/demo/index',
            meta: { title: '应急流程管理' }
          }
        ]
      },
      {
        path: '/demo-emergency/emergency2',
        name: 'Emergency2',
        component: '/demo/index',
        meta: { title: '应急救援预案' },
        children: [
          {
            path: '/demo-emergency/emergency2/emergency2-1',
            name: 'Emergency2-1',
            component: '/demo/index',
            meta: { title: '综合预案' }
          },
          {
            path: '/demo-emergency/emergency2/emergency2-2',
            name: 'Emergency2-2',
            component: '/demo/index',
            meta: { title: '专项预案' }
          },
          {
            path: '/demo-emergency/emergency2/emergency2-3',
            name: 'Emergency2-3',
            component: '/demo/index',
            meta: { title: '事故处置方案' }
          }
        ]
      },
      {
        path: '/demo-emergency/emergency3',
        name: 'Emergency3',
        component: '/demo/index',
        meta: { title: '应急救援保障' },
        children: [
          {
            path: '/demo-emergency/emergency3/emergency3-1',
            name: 'Emergency3-1',
            component: '/demo/index',
            meta: { title: '应急通讯组织机构' }
          },
          {
            path: '/demo-emergency/emergency3/emergency3-2',
            name: 'Emergency3-2',
            component: '/demo/index',
            meta: { title: '应急通讯' }
          },
          {
            path: '/demo-emergency/emergency3/emergency3-3',
            name: 'Emergency3-3',
            component: '/demo/index',
            meta: { title: '应急队伍' }
          },
          {
            path: '/demo-emergency/emergency3/emergency3-4',
            name: 'Emergency3-4',
            component: '/demo/index',
            meta: { title: '应急专家' }
          },
          {
            path: '/demo-emergency/emergency3/emergency3-5',
            name: 'Emergency3-5',
            component: '/demo/index',
            meta: { title: '应急物资' }
          },
          {
            path: '/demo-emergency/emergency3/emergency3-6',
            name: 'Emergency3-6',
            component: '/demo/index',
            meta: { title: '应急车辆' }
          },
          {
            path: '/demo-emergency/emergency3/emergency3-7',
            name: 'Emergency3-7',
            component: '/demo/index',
            meta: { title: '应急医疗' }
          },
          {
            path: '/demo-emergency/emergency3/emergency3-8',
            name: 'Emergency3-8',
            component: '/demo/index',
            meta: { title: '应急避险' }
          },
          {
            path: '/demo-emergency/emergency3/emergency3-9',
            name: 'Emergency3-9',
            component: '/demo/index',
            meta: { title: '应急处置权' }
          }
        ]
      },
      {
        path: '/demo-emergency/emergency4',
        name: 'Emergency4',
        component: '/demo/index',
        meta: { title: '日常管理' },
        children: [
          {
            path: '/demo-emergency/emergency4/emergency4-1',
            name: 'Emergency4-1',
            component: '/demo/index',
            meta: { title: '事故调查报告' }
          },
          {
            path: '/demo-emergency/emergency4/emergency4-2',
            name: 'Emergency4-2',
            component: '/demo/index',
            meta: { title: '应急演练' }
          }
        ]
      }
    ]
  },

  {
    path: '/manager',
    component: 'Layout',
    redirect: '/manager/manager1/manager1-1',
    name: 'Manager',
    meta: { title: '地测防治水' },
    children: [
      {
        path: '/manager/manager1',
        name: 'Manager1',
        component: '/manager/manager1/index',
        redirect: '/manager/manager1/manager1-1',
        meta: { title: '地质管理' },
        children: [
          {
            path: '/manager/manager1/manager1-1',
            name: 'Manager1-1',
            component: '/manager/manager1/manager1-1/index',
            meta: { title: '区域数据' }
          },
          {
            path: '/manager/manager1/manager1-2',
            name: 'Manager1-2',
            component: '/manager/manager1/manager1-2/index',
            redirect: '/manager/manager1/manager1-2/manager1-2-1',
            meta: { title: '行业标准管理' },
            children: [
              {
                path: '/manager/manager1/manager1-2/manager1-2-1',
                name: 'Manager1-2-1',
                component: '/manager/manager1/manager1-2/manager1-2-1/index',
                meta: { title: '国家地质文件标准规范' }
              },
              {
                path: '/manager/manager1/manager1-2/manager1-2-2',
                name: 'Manager1-2-2',
                component: '/manager/manager1/manager1-2/manager1-2-2/index',
                meta: { title: '公司地质文件标准规范' }
              },
              {
                path: '/manager/manager1/manager1-2/manager1-2-3',
                name: 'Manager1-2-3',
                component: '/manager/manager1/manager1-2/manager1-2-3/index',
                meta: { title: '矿井地质文件标准规范' }
              }
            ]
          },
          {
            path: '/manager/manager1/manager1-3',
            name: 'Manager1-3',
            component: '/manager/manager1/manager1-3/index',
            meta: { title: '地质技术资料' }
          },
          {
            path: '/manager/manager1/manager1-4',
            name: 'Manager1-4',
            component: '/manager/manager1/manager1-3/index',
            meta: { title: '地质图件' }
          }
        ]
      },
      {
        path: '/manager/manager2',
        name: 'Manager2',
        component: '/manager/manager2/index',
        meta: { title: '测量管理' },
        children: [
          {
            path: '/manager/manager2/manager2-1',
            name: 'Manager2-1',
            component: '/manager/manager2/manager2-1/index',
            meta: { title: '测量图件' }
          }
        ]
      },
      {
        path: '/manager/manager3',
        name: 'Manager3',
        component: '/manager/manager3/index',
        meta: { title: '水文管理' },
        children: [
          {
            path: '/manager/manager3/manager3-1',
            name: 'Manager3-1',
            component: '/manager/manager3/manager3-1/index',
            meta: { title: '水文台账' }
          }
        ]
      }
    ]
  },
  {
    path: '/example',
    component: 'Layout',
    redirect: '/example/examp1/examp1-1',
    name: 'Example',
    meta: { title: '一级路由', roles: ['admin', 'editor'] },
    children: [
      {
        path: '/example/examp1',
        name: 'Examp1',
        component: '/example/examp1/index',
        redirect: '/example/examp1/examp1-1',
        meta: { title: '二级路由1', roles: ['admin', 'editor'] },
        children: [
          {
            path: '/example/examp1/examp1-1',
            name: 'Examp1-1',
            component: '/example/examp1/examp1-1/index',
            meta: { title: '三级路由1-1', roles: ['admin', 'editor'] }
          },
          {
            path: '/example/examp1/examp1-2',
            name: 'Examp1-2',
            component: '/example/examp1/examp1-2/index',
            redirect: '/example/examp1/examp1-2/examp1-2-1',
            meta: { title: '三级路由1-2', roles: ['admin'] },
            children: [
              {
                path: '/example/examp1/examp1-2/examp1-2-1',
                name: 'Examp1-2-1',
                component: '/example/examp1/examp1-2/examp1-2-1/index',
                meta: { title: '四级路由1-2-1', roles: ['admin'] }
              },
              {
                path: '/example/examp1/examp1-2/examp1-1-2',
                name: 'Examp1-1-2',
                component: '/example/examp1/examp1-2/examp1-2-2/index',
                meta: { title: '四级路由1-2-2', roles: ['admin'] }
              }
            ]
          }
        ]
      },
      {
        path: '/example/examp2',
        name: 'Examp2',
        component: '/example/examp2/index',
        redirect: '/example/examp2/examp2-1',
        meta: { title: '二级路由2', roles: ['admin'] },
        children: [
          {
            path: '/example/examp2/examp2-1',
            name: 'Examp2-1',
            component: '/example/examp2/examp2-1/index',
            meta: { title: '三级路由2-1', roles: ['admin'] }
          }
        ]
      },
      {
        path: '/example/examp3',
        name: 'Examp3',
        component: '/example/examp3/index',
        redirect: '/example/examp3/examp3-1',
        meta: { title: '二级路由3', roles: ['admin'] },
        children: [
          {
            path: '/example/examp3/examp3-1',
            name: 'Examp3-1',
            component: '/example/examp3/examp3-1/index',
            meta: { title: '三级路由3-1', roles: ['admin'] }
          },
          {
            path: '/example/examp3/examp3-2',
            name: 'Examp3-2',
            component: '/example/examp3/examp3-2/index',
            meta: { title: '三级路由3-2', roles: ['admin'] }
          }
        ]
      }
    ]
  },
  {
    path: '/safeManager',
    name: 'SafeManager',
    component: 'Layout',
    redirect: '/safeManager/index',
    meta: { title: '安全管理', roles: ['admin'], hiddenChild: true },
    children: [
      {
        path: '/safeManager/index',
        name: 'SafeManagerIndex',
        component: '/safeManager/index',
        meta: { title: '安全管理' }
      }
    ]
  },
  {
    path: '/emergency',
    name: 'Emergency',
    component: 'Layout',
    redirect: '/emergency/index',
    meta: { title: '应急救援', roles: ['admin'], hiddenChild: true },
    children: [
      {
        path: '/emergency/index',
        name: 'EmergencyIndex',
        component: '/emergency/index',
        meta: { title: '应急救援' }
      }
    ]
  },
  {
    path: '/404',
    component: '/404',
    hidden: true
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

module.exports = [
  {
    url: '/example/route',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: asyncRoutes
      }
    }
  }
]
