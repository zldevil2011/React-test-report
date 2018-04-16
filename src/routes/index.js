import Index from './components/Index';
import App from './components/App';
import Game from './components/Game';

export default [
  {
    path: '/',
	component: Index,
	childRoutes: [
		{ path: 'app', component: App },
		{ path: 'game', component: Game },
	]
  }
]