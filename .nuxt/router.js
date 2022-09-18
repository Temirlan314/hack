import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d679abf6 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _cf1175c2 = () => interopDefault(import('../pages/admin1.vue' /* webpackChunkName: "pages/admin1" */))
const _68209905 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _59956248 = () => interopDefault(import('../pages/driver/index.vue' /* webpackChunkName: "pages/driver/index" */))
const _1689a916 = () => interopDefault(import('../pages/google.vue' /* webpackChunkName: "pages/google" */))
const _466d5f4d = () => interopDefault(import('../pages/icons.vue' /* webpackChunkName: "pages/icons" */))
const _ed9581ca = () => interopDefault(import('../pages/notifications.vue' /* webpackChunkName: "pages/notifications" */))
const _c2d03fe2 = () => interopDefault(import('../pages/regular.vue' /* webpackChunkName: "pages/regular" */))
const _037e3aa5 = () => interopDefault(import('../pages/reviewer/index.vue' /* webpackChunkName: "pages/reviewer/index" */))
const _72e7895d = () => interopDefault(import('../pages/rtl.vue' /* webpackChunkName: "pages/rtl" */))
const _7b74c3ac = () => interopDefault(import('../pages/starter-page.vue' /* webpackChunkName: "pages/starter-page" */))
const _db032ae8 = () => interopDefault(import('../pages/typography.vue' /* webpackChunkName: "pages/typography" */))
const _371aea30 = () => interopDefault(import('../pages/user.vue' /* webpackChunkName: "pages/user" */))
const _01fa0a4c = () => interopDefault(import('../pages/GeneralViews/NotFoundPage.vue' /* webpackChunkName: "pages/GeneralViews/NotFoundPage" */))

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
    component: _d679abf6,
    name: "admin___en"
  }, {
    path: "/admin1",
    component: _cf1175c2,
    name: "admin1___en"
  }, {
    path: "/ar",
    component: _68209905,
    name: "index___ar"
  }, {
    path: "/driver",
    component: _59956248,
    name: "driver___en"
  }, {
    path: "/google",
    component: _1689a916,
    name: "google___en"
  }, {
    path: "/icons",
    component: _466d5f4d,
    name: "icons___en"
  }, {
    path: "/notifications",
    component: _ed9581ca,
    name: "notifications___en"
  }, {
    path: "/regular",
    component: _c2d03fe2,
    name: "regular___en"
  }, {
    path: "/reviewer",
    component: _037e3aa5,
    name: "reviewer___en"
  }, {
    path: "/rtl",
    component: _72e7895d,
    name: "rtl___en"
  }, {
    path: "/starter-page",
    component: _7b74c3ac,
    name: "starter-page___en"
  }, {
    path: "/typography",
    component: _db032ae8,
    name: "typography___en"
  }, {
    path: "/user",
    component: _371aea30,
    name: "user___en"
  }, {
    path: "/ar/admin",
    component: _d679abf6,
    name: "admin___ar"
  }, {
    path: "/ar/admin1",
    component: _cf1175c2,
    name: "admin1___ar"
  }, {
    path: "/ar/driver",
    component: _59956248,
    name: "driver___ar"
  }, {
    path: "/ar/google",
    component: _1689a916,
    name: "google___ar"
  }, {
    path: "/ar/icons",
    component: _466d5f4d,
    name: "icons___ar"
  }, {
    path: "/ar/notifications",
    component: _ed9581ca,
    name: "notifications___ar"
  }, {
    path: "/ar/regular",
    component: _c2d03fe2,
    name: "regular___ar"
  }, {
    path: "/ar/reviewer",
    component: _037e3aa5,
    name: "reviewer___ar"
  }, {
    path: "/ar/rtl",
    component: _72e7895d,
    name: "rtl___ar"
  }, {
    path: "/ar/starter-page",
    component: _7b74c3ac,
    name: "starter-page___ar"
  }, {
    path: "/ar/typography",
    component: _db032ae8,
    name: "typography___ar"
  }, {
    path: "/ar/user",
    component: _371aea30,
    name: "user___ar"
  }, {
    path: "/GeneralViews/NotFoundPage",
    component: _01fa0a4c,
    name: "GeneralViews-NotFoundPage___en"
  }, {
    path: "/ar/GeneralViews/NotFoundPage",
    component: _01fa0a4c,
    name: "GeneralViews-NotFoundPage___ar"
  }, {
    path: "/",
    component: _68209905,
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
