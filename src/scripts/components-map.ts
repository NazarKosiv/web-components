import AppHeader from './components/app-header';

const components = [
    AppHeader
]

components.forEach((component) => {
    const componentName: string = component.name.match(/[A-Z][a-z]+/g).join('-').toLowerCase();
    customElements.define(componentName, component);
});
