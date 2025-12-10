
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 808, hash: 'b63a7afa78da4b21023cd2acd717cbd55d38bf56d174721a574ad037707a14eb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 976, hash: '8a5a24cef30e5403842a1c7a61222e12c8bbe65ea5c4d30d6a1303c13b534aee', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2805, hash: '09ef819fb9d3130be985ee1ba1bf5e4548aee5f60a12266688f7c7e8e281f4ed', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OST4QXXG.css': {size: 220, hash: 'gkHg96owqws', text: () => import('./assets-chunks/styles-OST4QXXG_css.mjs').then(m => m.default)}
  },
};
