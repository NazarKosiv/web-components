import '../styles/main.scss';
import './components-map';
import AppHeader from './components/app-header';

console.log('app created');

const appRoot: HTMLDivElement = document.getElementById('app-root') as HTMLDivElement;
const appHeader: AppHeader = document.createElement('app-header') as AppHeader;
appHeader.title = 'Trying out web components';

appRoot.appendChild(appHeader);

