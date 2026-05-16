
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/about-me"
  },
  {
    "renderMode": 2,
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4831, hash: 'd125dc456f3513ea0197b7b2ae58b6310d6995a7922ce1e31ff2287fb09d1581', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4504, hash: '2827f68cf1dae2352ad6c82ede7c18fd02c46cf9b51280b889897b319c2ca13f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 15685, hash: '85e86fe611615aa37f83613ff4e8ba5fcd2574f0538e7e7b76800f6e70f025ad', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 11187, hash: '04ca30684133fabdd7a1d80628cf3166db0279f7deb77cedce1c33737f38261a', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 10867, hash: '9719b5c576b99cf49dd18aeef8d3c5f3125116228eae4f3d229555cc1cdc2575', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 10926, hash: 'd67d87f1c651c4c752e81cb8ad3a108a5a7c2c109040841438ce36f9cd22efa9', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-H7GBIFYR.css': {size: 1804, hash: 'LqcWtwRZzTU', text: () => import('./assets-chunks/styles-H7GBIFYR_css.mjs').then(m => m.default)}
  },
};
