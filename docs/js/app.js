/**
 * CAIN Companion - Main Application Entry Point
 */

import { route, initRouter } from './router.js';
import { renderHome } from './pages/home.js';
import { renderCreate } from './pages/create.js';
import { renderView } from './pages/view.js';
import { renderEdit } from './pages/edit.js';

// Register routes
route('home', renderHome);
route('create', renderCreate);
route('view', renderView);
route('edit', renderEdit);

// Start
initRouter();
