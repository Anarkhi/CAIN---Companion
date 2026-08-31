/**
 * Simple hash-based router for single-page navigation.
 * Routes are defined as hash fragments: #home, #create, #view/id, #edit/id
 */

const routes = {};
let currentRoute = null;

/**
 * Register a route handler.
 * @param {string} path - Route path (e.g. 'home', 'create', 'view')
 * @param {function} handler - Function to call when route matches. Receives params.
 */
export function route(path, handler) {
  routes[path] = handler;
}

/**
 * Navigate to a route.
 * @param {string} path - e.g. 'home', 'view/abc123'
 */
export function navigate(path) {
  window.location.hash = path;
}

/**
 * Initialize the router and handle hash changes.
 */
export function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}

function handleRoute() {
  const hash = window.location.hash.slice(1) || 'home';
  const parts = hash.split('/');
  const path = parts[0];
  const params = parts.slice(1);

  if (routes[path]) {
    currentRoute = path;
    routes[path](...params);
  } else {
    // Default to home
    if (routes['home']) {
      currentRoute = 'home';
      routes['home']();
    }
  }
}

/**
 * Get the current route name.
 * @returns {string}
 */
export function getCurrentRoute() {
  return currentRoute;
}
