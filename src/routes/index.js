import Index from '../components/Index';
import App from '../components/App';
import Game from '../components/Game';
import Todo from '../components/Todo';

export default [
  {
    path: '/',
	component: Index,
	childRoutes: [
		{ path: 'app', component: App },
		{ path: 'game', component: Game },
		{ path: 'todo', component: Todo },
	]
  }
]