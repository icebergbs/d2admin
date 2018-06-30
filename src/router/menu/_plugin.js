// [插件] 菜单
export const menu = {
  title: '插件',
  path: '/demo/users',
  name: 'demo-plugins',
  meta: {
    requiresAuth: true
  },
  component: resolve => { require(['@/components/core/MainLayout/index.vue'], resolve) },
  redirect: {
    name: 'demo-plugins-index'
  },
  children: [
    // 首页
    {
      path: 'index',
      name: 'demo-plugins-index',
      meta: {
        requiresAuth: true
      },
      component: resolve => { require(['@/pages/demo/plugins/index/index.vue'], resolve) }
    },
    // mock
    {
      title: '用户管理',
      icon: 'globe',
      path: 'userManage',
      name: 'demo-users-userManage',
      meta: {
        requiresAuth: true
      },
      component: resolve => { require(['@/pages/demo/users/userManage.vue'], resolve) }
    },
    // 问答管理
    {
      title: '问答管理',
      icon: 'object-ungroup',
      path: 'askManage',
      name: 'demo-ask-askManage',
      meta: {
        requiresAuth: true
      },
      component: resolve => { require(['@/pages/demo/ask/askManage.vue'], resolve)},  
    },
    //问答管理 -- 查看回答
    {
        icon: 'file-o',
        path: 'lookAnswer',
        name: 'demo-ask-askManage-lookAnswer',
        meta: {
          requiresAuth: true
        },
        component: resolve => { require(['@/pages/demo/ask/lookAnswer.vue'], resolve) }
    },
    // 多国语
    {
      title: '多国语',
      icon: 'book',
      children: [
        {
          title: '演示页面 1',
          icon: 'file-o',
          path: 'vue-i18n/demo-1',
          name: 'demo-plugins-vue-i18n-demo-1',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/vue-i18n/demo-1.vue'], resolve) }
        },
        {
          title: '演示页面 2',
          icon: 'file-o',
          path: 'vue-i18n/demo-2',
          name: 'demo-plugins-vue-i18n-demo-2',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/vue-i18n/demo-2.vue'], resolve) }
        },
        {
          title: '使用方法',
          icon: 'file-o',
          path: 'vue-i18n/doc',
          name: 'demo-plugins-vue-i18n-doc',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/vue-i18n/doc.vue'], resolve) }
        }
      ]
    },
    // 导入和导出
    {
      title: '导入和导出',
      icon: 'download',
      children: [
        {
          title: '导入csv文件',
          icon: 'download',
          path: 'import/csv',
          name: 'demo-plugins-import-csv',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/import/csv.vue'], resolve) }
        },
        {
          title: '导入xlsx文件',
          icon: 'download',
          path: 'import/xlsx',
          name: 'demo-plugins-import-xlsx',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/import/xlsx.vue'], resolve) }
        },
        {
          title: '导出表格',
          icon: 'cloud-download',
          path: 'export/table',
          name: 'demo-plugins-export-table',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/export/table.vue'], resolve) }
        },
        {
          title: '导出文本',
          icon: 'cloud-download',
          path: 'export/txt',
          name: 'demo-plugins-export-txt',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/export/txt.vue'], resolve) }
        }
      ]
    },
    // clipboard-polyfill
    {
      title: '剪贴板',
      icon: 'clipboard',
      children: [
        {
          title: '基本示例',
          icon: 'file-o',
          path: 'clipboard-polyfill/demo',
          name: 'demo-plugins-clipboard-polyfill-demo',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/clipboard-polyfill/demo.vue'], resolve) }
        }
      ]
    },
    // js-cookie
    {
      title: 'Cookie',
      icon: 'hdd-o',
      children: [
        {
          title: '基本示例',
          icon: 'file-o',
          path: 'js-cookie/demo',
          name: 'demo-plugins-js-cookie-demo',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/js-cookie/demo.vue'], resolve) }
        }
      ]
    },
    // 时间计算
    {
      title: '时间计算',
      icon: 'clock-o',
      children: [
        {
          title: '基本示例',
          icon: 'file-o',
          path: 'timeago/demo',
          name: 'demo-plugins-timeago-demo',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/timeago/demo.vue'], resolve) }
        }
      ]
    },
    // 多环境发布
    {
      title: '多环境发布',
      icon: 'paper-plane',
      children: [
        {
          title: '检验环境',
          icon: 'file-o',
          path: 'build',
          name: 'demo-plugins-build',
          meta: {
            requiresAuth: true
          },
          component: resolve => { require(['@/pages/demo/plugins/build/index.vue'], resolve) }
        }
      ]
    }
  ]
}

// [插件] 路由设置
export const router = {
  ...menu,
  children: [].concat(...menu.children.map(e => e.children || e))
}
