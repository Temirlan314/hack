import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _38229b14 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _5acb26b0 = () => interopDefault(import('../pages/admin1.vue' /* webpackChunkName: "pages/admin1" */))
const _c01c7d58 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _22241319 = () => interopDefault(import('../pages/driver/index.vue' /* webpackChunkName: "pages/driver/index" */))
const _4e44eab2 = () => interopDefault(import('../pages/google.vue' /* webpackChunkName: "pages/google" */))
const _7e3e879c = () => interopDefault(import('../pages/icons.vue' /* webpackChunkName: "pages/icons" */))
const _5b06af2c = () => interopDefault(import('../pages/notifications.vue' /* webpackChunkName: "pages/notifications" */))
const _26c0309e = () => interopDefault(import('../pages/regular.vue' /* webpackChunkName: "pages/regular" */))
const _39b80994 = () => interopDefault(import('../pages/reviewer/index.vue' /* webpackChunkName: "pages/reviewer/index" */))
const _4a34796c = () => interopDefault(import('../pages/rtl.vue' /* webpackChunkName: "pages/rtl" */))
const _ea57620a = () => interopDefault(import('../pages/starter-page.vue' /* webpackChunkName: "pages/starter-page" */))
const _5df51b9d = () => interopDefault(import('../pages/typography.vue' /* webpackChunkName: "pages/typography" */))
const _1278c68e = () => interopDefault(import('../pages/user.vue' /* webpackChunkName: "pages/user" */))
const _243834ae = () => interopDefault(import('../pages/GeneralViews/NotFoundPage.vue' /* webpackChunkName: "pages/GeneralViews/NotFoundPage" */))

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
    component: _38229b14,
    name: "admin___en"
  }, {
    path: "/admin1",
    component: _5acb26b0,
    name: "admin1___en"
  }, {
    path: "/ar",
    component: _c01c7d58,
    name: "index___ar"
  }, {
    path: "/driver",
    component: _22241319,
    name: "driver___en"
  }, {
    path: "/google",
    component: _4e44eab2,
    name: "google___en"
  }, {
    path: "/icons",
    component: _7e3e879c,
    name: "icons___en"
  }, {
    path: "/notifications",
    component: _5b06af2c,
    name: "notifications___en"
  }, {
    path: "/regular",
    component: _26c0309e,
    name: "regular___en"
  }, {
    path: "/reviewer",
    component: _39b80994,
    name: "reviewer___en"
  }, {
    path: "/rtl",
    component: _4a34796c,
    name: "rtl___en"
  }, {
    path: "/starter-page",
    component: _ea57620a,
    name: "starter-page___en"
  }, {
    path: "/typography",
    component: _5df51b9d,
    name: "typography___en"
  }, {
    path: "/user",
    component: _1278c68e,
    name: "user___en"
  }, {
    path: "/ar/admin",
    component: _38229b14,
    name: "admin___ar"
  }, {
    path: "/ar/admin1",
    component: _5acb26b0,
    name: "admin1___ar"
  }, {
    path: "/ar/driver",
    component: _22241319,
    name: "driver___ar"
  }, {
    path: "/ar/google",
    component: _4e44eab2,
    name: "google___ar"
  }, {
    path: "/ar/icons",
    component: _7e3e879c,
    name: "icons___ar"
  }, {
    path: "/ar/notifications",
    component: _5b06af2c,
    name: "notifications___ar"
  }, {
    path: "/ar/regular",
    component: _26c0309e,
    name: "regular___ar"
  }, {
    path: "/ar/reviewer",
    component: _39b80994,
    name: "reviewer___ar"
  }, {
    path: "/ar/rtl",
    component: _4a34796c,
    name: "rtl___ar"
  }, {
    path: "/ar/starter-page",
    component: _ea57620a,
    name: "starter-page___ar"
  }, {
    path: "/ar/typography",
    component: _5df51b9d,
    name: "typography___ar"
  }, {
    path: "/ar/user",
    component: _1278c68e,
    name: "user___ar"
  }, {
    path: "/GeneralViews/NotFoundPage",
    component: _243834ae,
    name: "GeneralViews-NotFoundPage___en"
  }, {
    path: "/ar/GeneralViews/NotFoundPage",
    component: _243834ae,
    name: "GeneralViews-NotFoundPage___ar"
  }, {
    path: "/",
    component: _c01c7d58,
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
