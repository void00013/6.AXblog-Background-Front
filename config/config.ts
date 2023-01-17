import { defineConfig } from 'umi';
import routes from './router'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // 修改icon
  links: [
    { rel: 'icon', href: '/img/logo.svg' },
  ],
  routes,
  // dva: {
  //   immer: true,
  //   hmr: false,
  // },
  fastRefresh: {},
  layout: {
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    name: 'AXblog后台系统',
    locale: true,
    "navTheme": "light",
    "primaryColor": "#722ED1",
    "layout": "mix",
    "contentWidth": "Fluid",
    "fixedHeader": false,
    "fixSiderbar": true,
    "pwa": false,
    "logo": "/img/logo.svg",
    "headerHeight": 48,
  }
});
