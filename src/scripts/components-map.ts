import AppHeader from './components/app-header';
import AppRoot from './components/app-root';
import AppForm from './components/app-form';
import AppHeaderContainer from './containers/app-header-container';
import AppCanvas from './components/app-canvas';

const components = [
    AppRoot,
    AppHeader,
    AppForm,
    AppHeaderContainer,
    AppCanvas
]

components.forEach((component) => {
    const componentName: string = component.name.match(/[A-Z][a-z]+/g).join('-').toLowerCase();
    customElements.define(componentName, component);
});
