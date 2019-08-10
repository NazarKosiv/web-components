import AppStore from '../store/store';
import CustomComponent from '../shared/components/custom-component';
import AppForm from './app-form';
import AppHeaderContainer from '../containers/app-header-container';
import AppCanvas from './app-canvas';

const tmpl = `
    <app-header-container></app-header-container>
    <app-form></app-form>
    <app-canvas></app-canvas>
`;

export default class AppRoot extends CustomComponent {
    private appHeaderContainer: AppHeaderContainer;
    private appForm: AppForm;
    private appCanvas: AppCanvas;

    constructor() {
        super(tmpl);
    }

    public connectedCallback() {
        this.store = new AppStore();
        this.initApp();
    }

    private initApp(): void {
        this.appHeaderContainer = this.shadowRoot.querySelector('app-header-container') as AppHeaderContainer;
        this.appForm = this.shadowRoot.querySelector('app-form') as AppForm;
        this.appCanvas = this.shadowRoot.querySelector('app-canvas') as AppCanvas;

        this.appHeaderContainer.store = this.store;
        this.appForm.store = this.store;
        this.appCanvas.store = this.store;
    }
}
