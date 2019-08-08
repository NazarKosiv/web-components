import AppHeader from './components/app-header';
import AppRoot from './components/app-root';
import AppForm from './components/app-form';
import AppHeaderContainer from './containers/app-header-container';

const components = [
    AppRoot,
    AppHeader,
    AppForm,
    AppHeaderContainer
]

components.forEach((component) => {
    const componentName: string = component.name.match(/[A-Z][a-z]+/g).join('-').toLowerCase();
    customElements.define(componentName, component);
});
