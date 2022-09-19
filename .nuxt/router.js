import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _36f98d34 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _1b915d1e = () => interopDefault(import('../pages/admin1.vue' /* webpackChunkName: "pages/admin1" */))
const _6117f5b4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _01d73f07 = () => interopDefault(import('../pages/driver/index.vue' /* webpackChunkName: "pages/driver/index" */))
const _ccb87dd6 = () => interopDefault(import('../pages/google.vue' /* webpackChunkName: "pages/google" */))
const _a47e6924 = () => interopDefault(import('../pages/icons.vue' /* webpackChunkName: "pages/icons" */))
const _2da20b88 = () => interopDefault(import('../pages/notifications.vue' /* webpackChunkName: "pages/notifications" */))
const _7ec0c7f0 = () => interopDefault(import('../pages/regular.vue' /* webpackChunkName: "pages/regular" */))
const _ba8838b8 = () => interopDefault(import('../pages/reviewer/index.vue' /* webpackChunkName: "pages/reviewer/index" */))
const _f28cec84 = () => interopDefault(import('../pages/rtl.vue' /* webpackChunkName: "pages/rtl" */))
const _6a877ae9 = () => interopDefault(import('../pages/starter-page.vue' /* webpackChunkName: "pages/starter-page" */))
const _4abe6b0b = () => interopDefault(import('../pages/typography.vue' /* webpackChunkName: "pages/typography" */))
const _4ae096a7 = () => interopDefault(import('../pages/user.vue' /* webpackChunkName: "pages/user" */))
const _b3bfe70a = () => interopDefault(import('../pages/GeneralViews/NotFoundPage.vue' /* webpackChunkName: "pages/GeneralViews/NotFoundPage" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _36f98d34,
    name: "admin___en"
  }, {
    path: "/admin1",
    component: _1b915d1e,
    name: "admin1___en"
  }, {
    path: "/ar",
    component: _6117f5b4,
    name: "index___ar"
  }, {
    path: "/driver",
    component: _01d73f07,
    name: "driver___en"
  }, {
    path: "/google",
    component: _ccb87dd6,
    name: "google___en"
  }, {
    path: "/icons",
    component: _a47e6924,
    name: "icons___en"
  }, {
    path: "/notifications",
    component: _2da20b88,
    name: "notifications___en"
  }, {
    path: "/regular",
    component: _7ec0c7f0,
    name: "regular___en"
  }, {
    path: "/reviewer",
    component: _ba8838b8,
    name: "reviewer___en"
  }, {
    path: "/rtl",
    component: _f28cec84,
    name: "rtl___en"
  }, {
    path: "/starter-page",
    component: _6a877ae9,
    name: "starter-page___en"
  }, {
    path: "/typography",
    component: _4abe6b0b,
    name: "typography___en"
  }, {
    path: "/user",
    component: _4ae096a7,
    name: "user___en"
  }, {
    path: "/ar/admin",
    component: _36f98d34,
    name: "admin___ar"
  }, {
    path: "/ar/admin1",
    component: _1b915d1e,
    name: "admin1___ar"
  }, {
    path: "/ar/driver",
    component: _01d73f07,
    name: "driver___ar"
  }, {
    path: "/ar/google",
    component: _ccb87dd6,
    name: "google___ar"
  }, {
    path: "/ar/icons",
    component: _a47e6924,
    name: "icons___ar"
  }, {
    path: "/ar/notifications",
    component: _2da20b88,
    name: "notifications___ar"
  }, {
    path: "/ar/regular",
    component: _7ec0c7f0,
    name: "regular___ar"
  }, {
    path: "/ar/reviewer",
    component: _ba8838b8,
    name: "reviewer___ar"
  }, {
    path: "/ar/rtl",
    component: _f28cec84,
    name: "rtl___ar"
  }, {
    path: "/ar/starter-page",
    component: _6a877ae9,
    name: "starter-page___ar"
  }, {
    path: "/ar/typography",
    component: _4abe6b0b,
    name: "typography___ar"
  }, {
    path: "/ar/user",
    component: _4ae096a7,
    name: "user___ar"
  }, {
    path: "/GeneralViews/NotFoundPage",
    component: _b3bfe70a,
    name: "GeneralViews-NotFoundPage___en"
  }, {
    path: "/ar/GeneralViews/NotFoundPage",
    component: _b3bfe70a,
    name: "GeneralViews-NotFoundPage___ar"
  }, {
    path: "/",
    component: _6117f5b4,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
